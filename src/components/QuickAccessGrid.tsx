import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import { quickAccessStyles } from '../theme/styles';
import { quickAccessItems, QuickAccessItem } from '../data/quickAccessData';
import { RootStackParamList } from '../navigation/AppStack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const QuickAccessGrid = () => {
    const { colors } = useTheme();
    const styles = quickAccessStyles(colors);
    const navigation = useNavigation<NavigationProp>();

    const handlePress = (screenName: keyof RootStackParamList) => {
        navigation.navigate(screenName);
    };

    const renderItem = ({ item }: { item: QuickAccessItem }) => (
        <TouchableOpacity 
            style={styles.itemContainer}
            onPress={() => handlePress(item.screen as keyof RootStackParamList)}
        >
            <View style={styles.iconWrapper}>
                <Icon name={item.icon} size={30} color={colors.primary} />
            </View>
            <Text style={styles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.gridContainer}>
            {quickAccessItems.map(item => (
                <TouchableOpacity 
                    key={item.id}
                    style={styles.itemContainer}
                    onPress={() => handlePress(item.screen as keyof RootStackParamList)}
                >
                    <View style={styles.iconWrapper}>
                        <Icon name={item.icon} size={30} color={colors.primary} />
                    </View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default QuickAccessGrid;