import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { departmentsScreenStyles } from '../theme/styles';
import { DEPARTMENTS_DATA } from '../data/supportData';

const DepartmentsScreen = () => {
    const { colors } = useTheme();
    const styles = departmentsScreenStyles(colors);
    const navigation = useNavigation();

    const handleEmailPress = async (email: string) => {
        const url = `mailto:${email}`;
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert("خطا", `امکان باز کردن اپلیکیشن ایمیل وجود ندارد.`);
            }
        } catch (error) {
            Alert.alert("خطا", "مشکلی در باز کردن ایمیل پیش آمد.");
        }
    };

    const renderItem = ({ item }: { item: typeof DEPARTMENTS_DATA[0] }) => (
        <View style={styles.departmentCard}>
            <Text style={styles.departmentName}>{item.name}</Text>
            <TouchableOpacity style={styles.emailButton} onPress={() => Linking.openURL(`mailto:${item.email}`)}>
                <Icon name="mail-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={28} color={colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>ارتباط با واحدها</Text>
            </View>
            <FlatList
                data={DEPARTMENTS_DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

export default DepartmentsScreen;