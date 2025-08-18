import React from 'react';
import { View, Text, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { profileScreenStyles } from '../theme/styles';

const ProfileScreen = () => {
    const { theme, colors, toggleTheme } = useTheme();
    const styles = profileScreenStyles(colors);

    const isDarkMode = theme === 'dark';

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={styles.container}>
                <Text style={styles.header}>پروفایل</Text>

                <View style={styles.settingRow}>
                    <Text style={styles.settingText}>حالت تیره (Dark Mode)</Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={toggleTheme}
                        thumbColor={isDarkMode ? colors.primary : '#f4f3f4'}
                        trackColor={{ false: '#767577', true: colors.accent }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;