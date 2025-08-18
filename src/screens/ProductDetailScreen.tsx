import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { hp } from '../theme/layout';

import { useTheme } from '../context/ThemeContext';
import { productDetailScreenStyles } from '../theme/styles';
import { productCategories } from '../data/productData';
import { RootStackParamList } from '../navigation/AppStack';
import ProductDetailFooter from '../components/ProductDetailFooter';

type ScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
    const { colors } = useTheme();
    const styles = productDetailScreenStyles(colors);
    const navigation = useNavigation();
    const route = useRoute<ScreenRouteProp>();
    const { productId } = route.params;

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
        Alert.alert('موفق', `${quantity} عدد از محصول "${product?.name}" به سبد خرید اضافه شد.`);
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

            <ScrollView contentContainerStyle={{ paddingBottom: hp('2%') }}>
                <View style={styles.content}>
                    <Image source={{ uri: product.image }} style={styles.productImage} resizeMode='cover'/>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>

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

                    <Text style={styles.tableHeader}>آنالیز محصول</Text>
                    {product.analysisTable.map((row, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{row.component}</Text>
                            <Text style={styles.tableCell}>{row.value}</Text>
                        </View>
                    ))}
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