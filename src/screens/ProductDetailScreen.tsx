import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, Linking, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { hp } from '../theme/layout';

import { useTheme } from '../context/ThemeContext';
import { productDetailScreenStyles } from '../theme/styles';
import { productCategories } from '../data/productData';
import { RootStackParamList } from '../navigation/AppStack';
import ProductDetailFooter from '../components/ProductDetailFooter';
import { useCart } from '../context/CartContext';

type ScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
    const { colors } = useTheme();
    const styles = productDetailScreenStyles(colors);
    const navigation = useNavigation();
    const route = useRoute<ScreenRouteProp>();
    const { productId } = route.params;
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);
    
    let product = null;
    let categoryName = '';
    for (const cat of productCategories) {
        for (const subCat of cat.subCategories) {
            const foundProduct = subCat.products.find(p => p.id === productId);
            if (foundProduct) {
                product = foundProduct;
                categoryName = cat.name;
                break;
            }
        }
        if (product) break;
    }
    
    if (!product) {
        return <SafeAreaView><Text>محصول یافت نشد!</Text></SafeAreaView>;
    }

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
        }
    };

    const handlePdfDownload = async () => {
        if (product && product.pdfUrl) {
            try {
                const supported = await Linking.canOpenURL(product.pdfUrl);
                if (supported) {
                    await Linking.openURL(product.pdfUrl);
                } else {
                    Alert.alert("خطا", `امکان باز کردن این لینک وجود ندارد: ${product.pdfUrl}`);
                }
            } catch (error) {
                Alert.alert("خطا", "مشکلی در باز کردن لینک پیش آمد.");
            }
        } else {
            Alert.alert("خطا", "فایل PDF برای این محصول موجود نیست.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={28} color={colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{categoryName}</Text>
            </View>

            <ScrollView 
                contentContainerStyle={{ paddingBottom: hp('20%') }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                >
                <View style={styles.content}>
                    <Image source={{ uri: product.image }} style={styles.productImage} resizeMode='cover'/>
                    <Text style={styles.productName}>{product.name}</Text>
                    <View style={[styles.separator, { backgroundColor: colors.border }]} />
                    <Text style={styles.productDescription}>{product.description}</Text>

                    <View style={[styles.separator, { backgroundColor: colors.border }]} />

                    {product.content && product.content.length > 0 && (
                        <View>
                            <Text style={styles.featuresHeader}>ویژگی‌های کلیدی</Text>
                            {product.content.map((item, index) => (
                                <View key={index} style={styles.featureRow}>
                                    <Icon name="checkmark-circle-outline" size={24} color={colors.accent} style={styles.featureIcon} />
                                    <Text style={styles.featureText}>{item.value}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {product.ingredients && product.ingredients.length > 0 && (
                        <View style={styles.ingredientsContainer}>
                            <View style={[styles.separator, { backgroundColor: colors.border }]} />
                            <Text style={styles.tableHeader}>ترکیبات</Text>
                            <FlatList
                                data={product.ingredients}
                                horizontal
                                inverted
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.name}
                                style={styles.ingredientList}
                                renderItem={({ item }) => (
                                    <View style={styles.ingredientItem}>
                                        <Image source={{ uri: item.image }} style={styles.ingredientImage} />
                                        <Text style={styles.ingredientName}>{item.name}</Text>
                                    </View>
                                )}
                            />
                            <Text style={styles.ingredientcontent}>{product.ingredientcontent}</Text>
                        </View>
                    )}

                    <View style={[styles.separator, { backgroundColor: colors.border }]} />

                    <Text style={styles.tableHeader}>آنالیز محصول</Text>
                    {product.analysisTable.map((row, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{row.component}</Text>
                            <Text style={styles.tableCell}>{row.value}</Text>
                        </View>
                    ))}
                    
                    {product.usageGuideTable && product.usageGuideTable.length > 0 && (
                        <View>
                            <View style={[styles.separator, { backgroundColor: colors.border }]} />
                            {product.usageGuideTable.map((row, index) => (
                                <View key={index} style={styles.tableRow}>
                                    <Text style={styles.tableCell}>{row.component}</Text>
                                    <Text style={styles.tableCell}>{row.value}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </ScrollView>

            <ProductDetailFooter
                quantity={quantity}
                onIncrease={() => setQuantity(q => q + 1)}
                onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                onAddToCart={handleAddToCart}
                onPdfDownload={handlePdfDownload}
            />
        </SafeAreaView>
    );
};

export default ProductDetailScreen;