import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { buttonStyles as styles } from '../../theme/styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'accent' | 'secondary';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button = ({ title, onPress, type = 'primary', style, textStyle }: ButtonProps) => {
  const { colors } = useTheme();

  const getButtonStyles = () => {
    switch (type) {
      case 'accent':
        return { backgroundColor: colors.accent, textColor: '#FFFFFF' };
      case 'secondary':
        return { backgroundColor: colors.surface, textColor: colors.textPrimary };
      case 'primary':
      default:
        return { backgroundColor: colors.primary, textColor: '#FFFFFF' };
    }
  };

  const { backgroundColor, textColor } = getButtonStyles();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;