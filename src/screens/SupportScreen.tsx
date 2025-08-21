import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Platform, Alert } from 'react-native';
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

    const handleLinkPress = async (url: string) => {
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert("خطا", `امکان باز کردن این لینک وجود ندارد: ${url}`);
            }
        } catch (error) {
            Alert.alert("خطا", "مشکلی در باز کردن لینک پیش آمد.");
        }
    };

    const InfoRow = ({ icon, text, onPress, isLink = false }: { icon: string; text: string; onPress?: () => void; isLink?: boolean }) => (
        <TouchableOpacity style={styles.infoRow} onPress={onPress} disabled={!onPress}>
            <Icon name={icon} size={22} color={colors.primary} />
            <Text style={[styles.infoText, isLink && styles.linkText]}>{text}</Text>
        </TouchableOpacity>
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
                    
                    <InfoRow 
                        icon="mail-outline" 
                        text={MAIN_OFFICE_DATA.email} 
                        onPress={() => Linking.openURL(`mailto:${MAIN_OFFICE_DATA.email}`)}
                        isLink={true}
                    />
                    <View style={styles.infoRow}>
                        <Icon name="call-outline" size={22} color={colors.primary} />
                        <View style={[styles.infoText, styles.phoneRowContainer]}>
                            {MAIN_OFFICE_DATA.phonenumbers.map((phone, index) => (
                                <React.Fragment key={phone.id}>
                                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone.value}`)}>
                                        <Text style={styles.phoneLinkText}>{phone.value}</Text>
                                    </TouchableOpacity>
                                    {index < MAIN_OFFICE_DATA.phonenumbers.length - 1 && (
                                        <Text style={styles.phoneSeparator}>-</Text>
                                    )}
                                </React.Fragment>
                            ))}
                        </View>
                    </View>
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