import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { wp, hp } from '../theme/layout';
import { productCategories, Product } from '../data/productData';
import { RootStackParamList } from '../navigation/AppStack';
import { priceListScreenStyles } from '../theme/styles';

type ScreenRouteProp = RouteProp<RootStackParamList, 'PriceList'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const PriceListScreen = () => {
    const { colors } = useTheme();
    const styles = priceListScreenStyles(colors);
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<ScreenRouteProp>();
    const { categoryId, categoryName } = route.params;

    const category = productCategories.find(cat => cat.id === categoryId);
    const allProducts = category ? category.subCategories.flatMap(sub => sub.products) : [];

    const handleProductPress = (productId: string) => {
        navigation.navigate('ProductDetail', { productId });
    };

    const handlePdfPress = async () => {
        if (!category?.priceListPdfUrl) {
            Alert.alert('خطا', 'فایل PDF برای این لیست قیمت موجود نیست.');
            return;
        }
        try {
            await Linking.openURL(category.priceListPdfUrl);
        } catch {
            Alert.alert('خطا', 'مشکلی در باز کردن فایل پیش آمد.');
        }
    };

    const renderItem = ({ item }: { item: Product }) => (
        <View style={styles.tableRow}>
            <View style={{ flex: 4, flexDirection: 'row-reverse', justifyContent: 'center' }}>
                <Text style={[styles.tableCell, { flex: 1 }]}>{item.name}</Text>
                <Text style={styles.tableCell}>{item.price.toLocaleString('fa-IR')} تومان</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: wp('2%') }}>
                <TouchableOpacity 
                    style={styles.viewProductButton}
                    onPress={() => handleProductPress(item.id)}
                >
                    <Text style={styles.viewProductButtonText}>مشاهده</Text>
                </TouchableOpacity>
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

            <View style={{ flex: 1 }}>
                <FlatList
                    data={allProducts}
                    ListHeaderComponent={
                        <View style={styles.tableHeaderRow}>
                            <Text style={[styles.tableHeaderCell, { flex: 3 }]}>نام محصول</Text>
                            <Text style={styles.tableHeaderCell}>قیمت (کیلوگرم)</Text>
                            <View style={{ flex: 0.8 }} />
                        </View>
                    }
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    stickyHeaderIndices={[0]}
                    contentContainerStyle={styles.listContent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.pdfButton} onPress={handlePdfPress}>
                        <Icon name="document-text-outline" size={22} color="#FFFFFF" />
                        <Text style={styles.pdfButtonText}>مشاهده PDF قیمت‌ها</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PriceListScreen;