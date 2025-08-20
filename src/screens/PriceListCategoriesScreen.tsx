import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { productsScreenStyles } from '../theme/styles';
import { productCategories, Category } from '../data/productData';
import { RootStackParamList } from '../navigation/AppStack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const PriceListCategoriesScreen = () => {
    const { colors } = useTheme();
    const styles = productsScreenStyles(colors);
    const navigation = useNavigation<NavigationProp>();

    const handleCategoryPress = (categoryId: string, categoryName: string) => {
        navigation.navigate('PriceList', { categoryId, categoryName });
    };

    const renderCategoryItem = ({ item }: { item: Category }) => (
        <TouchableOpacity 
            style={styles.categoryCard} 
            onPress={() => handleCategoryPress(item.id, item.name)}
        >
            <ImageBackground source={{ uri: item.image }} style={styles.cardImageBackground}>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={28} color={colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>لیست قیمت محصولات</Text>
            </View>
            <FlatList
                data={productCategories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                numColumns={1}
                contentContainerStyle={styles.listContent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default PriceListCategoriesScreen;