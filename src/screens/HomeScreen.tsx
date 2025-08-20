import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppStack';
import { homeScreenStyles as styles } from '../theme/styles';
import Card from '../components/common/Card';
import HeroSwiper from '../components/HeroSwiper';
import QuickAccessGrid from '../components/QuickAccessGrid';
import LatestNewsList from '../components/LatestNewsList';


type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
    const { colors } = useTheme();
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <SafeAreaView style={[styles.flex, { backgroundColor: colors.background }]}>
            <View style={[styles.header, { borderBottomColor: colors.border }]}>
                <View style={styles.headerSection}>
                    <Text style={[styles.headerTitle, { color: colors.primary }]}>AquaFeed Plus</Text>
                </View>
                <View style={styles.headerSection}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.headerLogo}
                        resizeMode="contain"
                    />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.padding}>
                    <HeroSwiper />
                </View>

                <Card>
                    <QuickAccessGrid />
                </Card>

                <LatestNewsList />
                
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;