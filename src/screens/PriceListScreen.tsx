import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { priceListScreenStyles } from '../theme/styles';
import { productCategories, Product } from '../data/productData';
import { RootStackParamList } from '../navigation/AppStack';
import { wp } from '../theme/layout';

type ScreenRouteProp = RouteProp<RootStackParamList, 'PriceList'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const PriceListScreen = () => {
    const { colors } = useTheme();
    const styles = priceListScreenStyles(colors);
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<ScreenRouteProp>();
    const { categoryId, categoryName } = route.params;

    const allProducts = productCategories
        .find(cat => cat.id === categoryId)
        ?.subCategories.flatMap(sub => sub.products) || [];

    const handleProductPress = (productId: string) => {
        navigation.navigate('ProductDetail', { productId });
    };

    const renderItem = ({ item, index }: { item: Product, index: number }) => (
        <View style={[styles.tableRow, index === allProducts.length - 1 && { borderBottomWidth: 0 }]}>
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

          <View style={styles.tableContainer}>
              <View style={styles.tableHeaderRow}>
                  <Text style={[styles.tableHeaderCell, { flex: 2 }]}>نام محصول</Text>
                  <Text style={styles.tableHeaderCell}>قیمت (کیلوگرم)</Text>
                  <View style={{ flex: 0.8 }} />
              </View>

              <FlatList
                  data={allProducts}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={styles.listContent}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
              />
          </View>
        </SafeAreaView>
    );
};

export default PriceListScreen;