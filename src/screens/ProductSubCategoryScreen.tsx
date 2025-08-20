import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { useTheme } from '../context/ThemeContext';
import { subCategoryScreenStyles } from '../theme/styles';
import { productCategories, SubCategory } from '../data/productData';
import { RootStackParamList } from '../navigation/AppStack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type ScreenRouteProp = RouteProp<RootStackParamList, 'ProductSubCategory'>;

const ProductSubCategoryScreen = () => {
    const { colors } = useTheme();
    const styles = subCategoryScreenStyles(colors);
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<ScreenRouteProp>();

    const { categoryId, categoryName } = route.params;

    const category = productCategories.find(cat => cat.id === categoryId);
    const subCategories = category ? category.subCategories : [];

    const handleProductPress = (productId: string) => {
        navigation.navigate('ProductDetail', { productId });
    };

    const renderSubCategory = ({ item }: { item: SubCategory }) => (
        <View style={styles.subCategoryCard}>
            <View style={styles.cardContent}>
                {item.products.map((product) => (
                    <TouchableOpacity 
                        key={product.id} 
                        style={styles.productRow}
                        onPress={() => handleProductPress(product.id)}
                    >
                        <View style={{flexDirection: 'column',}}>
                            {item.image && (
                                <Image source={{ uri: item.image }} style={styles.cardImage} />
                            )}
                            <View style={styles.row}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardHeaderTitle}>{item.name}</Text>
                                </View>
                                <View style={[styles.separator, { backgroundColor: colors.border }]} />
                                <View style={styles.productInfo}>
                                    <Text style={styles.productName}>{product.name}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={28} color={colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{categoryName}</Text>
            </View>

            <FlatList
                data={subCategories}
                renderItem={renderSubCategory}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default ProductSubCategoryScreen;