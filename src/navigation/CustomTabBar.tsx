import React from 'react';
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { customTabBarStyles as styles } from '../theme/styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { colors } = useTheme();

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
        Profile: ['person', 'person-outline'],
    };

    return (
        <View style={styles.wrapper}>
            {/* پس‌زمینه اصلی که دکمه‌های کناری را نگه می‌دارد */}
            <View style={[styles.background, { backgroundColor: colors.surface, shadowColor: colors.shadow }]}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    // اگر دکمه ساختگی سبد خرید بود، یک جای خالی با همان اندازه رندر کن
                    if (route.name === 'Cart') {
                        return <View key={index} style={styles.tabButton} />;
                    }

                    const label = options.title || route.name;
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const iconName = icons[route.name]?.[isFocused ? 0 : 1] || 'ellipse-outline';
                    const color = isFocused ? colors.primary : colors.textSecondary;
                    const fontFamily = isFocused ? 'IRANSans(FaNum)_Bold' : 'IRANSans(FaNum)_Medium';

                    return (
                        <TouchableOpacity key={index} onPress={onPress} style={styles.tabButton}>
                            <Icon name={iconName} size={24} color={color} />
                            <Text style={[styles.tabLabel, { color, fontFamily }]}>{label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* دکمه شناور سبد خرید که همیشه روی بقیه قرار دارد */}
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={[styles.centerButton, { backgroundColor: colors.accent, shadowColor: colors.accent }]}
            >
                <Icon name={icons['Cart'][0]} size={32} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
};

export default CustomTabBar;