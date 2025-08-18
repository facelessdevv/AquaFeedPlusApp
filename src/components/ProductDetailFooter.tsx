import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import QuantitySelector from './common/QuantitySelector';
import { productDetailFooterStyles } from '../theme/styles';

interface ProductDetailFooterProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onAddToCart: () => void;
    onPdfDownload: () => void;
}

const ProductDetailFooter = ({ quantity, onIncrease, onDecrease, onAddToCart, onPdfDownload }: ProductDetailFooterProps) => {
    const { colors } = useTheme();
    const styles = productDetailFooterStyles(colors);

    return (
        <SafeAreaView edges={['bottom']} style={[styles.safeArea, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
            <View style={styles.quantitySection}>
                <QuantitySelector
                    quantity={quantity}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                />
                <View>
                    <Text style={[styles.quantityLabel, { color: colors.textPrimary }]}>مقدار ( کیلوگرم )</Text>
                </View>
            </View>
            <View style={styles.buttonSection}>
                <View>
                    <TouchableOpacity style={styles.cartButton} onPress={onAddToCart}>
                        <Text style={styles.buttonText}>افزودن به سبد خرید</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.pdfButton} onPress={onPdfDownload}>
                        <Text style={[styles.buttonText, { color: '#333' }]}>مشاهده PDF</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProductDetailFooter;