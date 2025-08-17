import React, { ReactNode } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { cardStyles as styles } from '../../theme/styles';

interface CardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Card = ({ children, style }: CardProps) => {
  const { colors } = useTheme();

  return (
    <View style={[
      styles.container,
      { backgroundColor: colors.surface, shadowColor: colors.textPrimary },
      style
    ]}>
      {children}
    </View>
  );
};

export default Card;