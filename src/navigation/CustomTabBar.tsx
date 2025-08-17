import React from 'react';
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { customTabBarStyles } from '../theme/styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { colors } = useTheme();
    const styles = customTabBarStyles(colors);

    const [keyboardVisible, setKeyboardVisible] = React.useState(false);
    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    if (keyboardVisible) {
        return null;
    }

    const icons: { [key: string]: string[] } = {
        Home: ['home', 'home-outline'],
        Products: ['cube', 'cube-outline'],
        Cart: ['cart', 'cart-outline'],
        Support: ['chatbubbles', 'chatbubbles-outline'],
        Settings: ['settings', 'settings-outline'],
    };

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.title !== undefined ? options.title : route.name;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const iconName = icons[route.name][isFocused ? 0 : 1];
                
                if (route.name === 'Cart') {
                    return (
                        <View key={index} style={styles.centerButtonContainer}>
                            <TouchableOpacity onPress={onPress} style={styles.centerButton}>
                                <Icon name={iconName} size={32} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    );
                }

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={styles.tabButton}
                    >
                        <Icon 
                            name={iconName} 
                            size={24} 
                            color={isFocused ? colors.primary : colors.textSecondary} 
                        />
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