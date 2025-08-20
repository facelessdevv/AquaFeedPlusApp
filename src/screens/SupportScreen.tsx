import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { supportScreenStyles } from '../theme/styles';
import { MAIN_OFFICE_DATA } from '../data/supportData';
import { RootStackParamList } from '../navigation/AppStack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SupportScreen = () => {
    const { colors } = useTheme();
    const styles = supportScreenStyles(colors);
    const navigation = useNavigation<NavigationProp>();

    const openMap = () => {
        const { location, address } = MAIN_OFFICE_DATA;
        const { latitude, longitude } = location;
        const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=';
        const label = encodeURIComponent(address);
        const url = `${scheme}${latitude},${longitude}(${label})`;
        Linking.openURL(url);
    };

    const InfoRow = ({ icon, text }: { icon: string, text: string }) => (
        <View style={styles.infoRow}>
            <Icon name={icon} size={22} color={colors.primary} />
            <Text style={styles.infoText}>{text}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>پشتیبانی</Text>
            </View>
            <ScrollView>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>دفتر مرکزی</Text>
                    <InfoRow icon="location-outline" text={MAIN_OFFICE_DATA.address} />
                    <InfoRow icon="mail-outline" text={MAIN_OFFICE_DATA.email} />
                    <InfoRow icon="call-outline" text={MAIN_OFFICE_DATA.phone} />
                    <TouchableOpacity style={styles.mapButton} onPress={openMap}>
                        <Icon name="map-outline" size={20} color="#FFFFFF" />
                        <Text style={styles.mapButtonText}>مشاهده روی نقشه</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SalesAgents')}>
                    <Text style={styles.navButtonText}>عاملین فروش</Text>
                    <Icon name="chevron-back-outline" size={24} color={colors.textSecondary} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Departments')}>
                    <Text style={styles.navButtonText}>ارتباط با واحدها</Text>
                    <Icon name="chevron-back-outline" size={24} color={colors.textSecondary} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Feedback')}>
                    <Text style={styles.navButtonText}>پیشنهاد و انتقاد</Text>
                    <Icon name="chevron-back-outline" size={24} color={colors.textSecondary} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SupportScreen;