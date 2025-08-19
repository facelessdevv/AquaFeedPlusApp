import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { useCart, CartItem } from '../context/CartContext';
import { cartScreenStyles } from '../theme/styles';
import QuantitySelector from '../components/common/QuantitySelector';
import { hp } from '../theme/layout';

const CartScreen = () => {
    const { colors } = useTheme();
    const styles = cartScreenStyles(colors);
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, itemCount } = useCart();

    const renderItem = ({ item }: { item: CartItem }) => (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <View>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{item.price.toLocaleString('fa-IR')} تومان</Text>
                </View>
                <View style={styles.itemActions}>
                    <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                        <Icon name="trash-outline" size={24} color={colors.error} />
                    </TouchableOpacity>
                    <QuantitySelector
                        quantity={item.quantity}
                        onIncrease={() => increaseQuantity(item.id)}
                        onDecrease={() => decreaseQuantity(item.id)}
                    />
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>سبد خرید ({itemCount})</Text>
            </View>

            {cartItems.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Icon name="cart-outline" size={80} color={colors.border} />
                    <Text style={styles.emptyText}>سبد خرید شما خالی است.</Text>
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingBottom: hp('2%') }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                    <View style={styles.footer}>
                        <View style={styles.totalRow}>
                            <Text style={styles.totalText}>جمع کل:</Text>
                            <Text style={styles.totalPriceText}>{totalPrice.toLocaleString('fa-IR')} تومان</Text>
                        </View>
                        <TouchableOpacity style={styles.checkoutButton} onPress={() => Alert.alert("ثبت سفارش", "این قابلیت هنوز پیاده‌سازی نشده است.")}>
                            <Text style={styles.checkoutButtonText}>ثبت سفارش</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

export default CartScreen;