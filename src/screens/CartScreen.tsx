import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { cartScreenStyles as styles } from '../theme/styles';
import { wp } from '../theme/layout';

const CartScreen = () => {
    const { colors } = useTheme();

    const cartItems = []; 
    const itemCount = cartItems.length;

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={[styles.header, { borderBottomColor: colors.border }]}>
                <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
                    سبد خرید ({itemCount})
                </Text>
            </View>

            <View style={styles.emptyContainer}>
                <Icon name="cart-outline" size={wp('20%')} color={colors.border} />
                <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                    سبد خرید شما خالی است.
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;