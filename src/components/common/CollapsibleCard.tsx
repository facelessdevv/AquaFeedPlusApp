import React, {useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../context/ThemeContext';
import { collapsibleCardStyles } from '../../theme/styles';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface CollapsibleCardProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleCard = ({ title, children }: CollapsibleCardProps) => {
  const { colors } = useTheme();
  const styles = collapsibleCardStyles(colors);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleCollapse}>
        <Text style={styles.headerText}>{title}</Text>
        <Icon name={isOpen ? 'chevron-down-outline' : 'chevron-back-outline'} size={24} color={colors.textPrimary} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  );
};

export default CollapsibleCard;