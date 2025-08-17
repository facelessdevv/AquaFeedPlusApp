import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { customTabBarStyles as styles } from '../theme/styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { colors } = useTheme();

    const orderedRoutes = [
        state.routes.find(route => route.name === 'Products'),
        state.routes.find(route => route.name === 'Support'),
        state.routes.find(route => route.name === 'Cart'),
        state.routes.find(route => route.name === 'Home'),
        state.routes.find(route => route.name === 'Settings'),
    ];

    return (
        <View style={[styles.tabBarContainer, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
            {orderedRoutes.map((route) => {
                if (!route) return null;
                
                const { options } = descriptors[route.key];
                const label = options.title !== undefined ? options.title : route.name;
                const isFocused = state.index === state.routes.findIndex(r => r.name === route.name);

                const onPress = () => {
                    const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };
                
                if (route.name === 'Cart') {
                    return (
                        <TouchableOpacity key={route.key} onPress={onPress} style={styles.centerButtonContainer}>
                            <View style={[styles.centerButton, { backgroundColor: colors.accent }]}>
                                <Icon name="cart" size={30} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                    );
                }

                let iconName = 'ellipse-outline';
                if (route.name === 'Products') iconName = isFocused ? 'cube' : 'cube-outline';
                else if (route.name === 'Support') iconName = isFocused ? 'chatbubbles' : 'chatbubbles-outline';
                else if (route.name === 'Home') iconName = isFocused ? 'home' : 'home-outline';
                else if (route.name === 'Settings') iconName = isFocused ? 'settings' : 'settings-outline';

                return (
                    <TouchableOpacity key={route.key} onPress={onPress} style={styles.tabButton}>
                        <Icon name={iconName} size={24} color={isFocused ? colors.primary : colors.textSecondary} />
                        <Text style={[styles.tabLabel, { color: isFocused ? colors.primary : colors.textSecondary }]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;