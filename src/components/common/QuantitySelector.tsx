import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../context/ThemeContext';
import { quantitySelectorStyles as styles } from '../../theme/styles';

interface QuantitySelectorProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const QuantitySelector = ({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onIncrease} style={[styles.button, { backgroundColor: colors.primary }]}>
                <Icon name="add" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={[styles.quantityText, { color: colors.textPrimary }]}>{quantity}</Text>
            <TouchableOpacity onPress={onDecrease} style={[styles.button, { backgroundColor: colors.primary }]}>
                <Icon name="remove" size={20} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
};

export default QuantitySelector;