import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightColors, darkColors, Colors } from '../theme/colors';

interface ThemeContextType {
    theme: 'light' | 'dark';
    colors: Colors;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const systemScheme = useColorScheme() || 'light';
    const [theme, setTheme] = useState<'light' | 'dark'>(systemScheme);

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem('theme') as 'light' | 'dark';
            if (savedTheme) setTheme(savedTheme);
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        await AsyncStorage.setItem('theme', newTheme);
    };

    const colors = theme === 'light' ? lightColors : darkColors;

    return (
        <ThemeContext.Provider value={{ theme, colors, isDarkMode: theme === 'dark', toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};