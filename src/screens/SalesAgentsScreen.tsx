import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { salesAgentsScreenStyles } from '../theme/styles';
import { PROVINCES_DATA } from '../data/supportData';
import CollapsibleCard from '../components/common/CollapsibleCard';

const SalesAgentsScreen = () => {
    const { colors } = useTheme();
    const styles = salesAgentsScreenStyles(colors);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={28} color={colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>عاملین فروش</Text>
            </View>
            <ScrollView contentContainerStyle={styles.listContainer}>
                {PROVINCES_DATA.map((province) => (
                    <CollapsibleCard key={province.id} title={province.name}>
                        {province.agents.map((agent, index) => (
                            <View 
                                key={index} 
                                style={[
                                    styles.agentContainer, 
                                    { borderBottomColor: colors.border },
                                    index === province.agents.length - 1 && { borderBottomWidth: 0 }
                                ]}
                            >
                                <Text style={styles.agentName}>{agent.name}</Text>
                                <View style={styles.agentDetailRow}>
                                    <Icon name="location-outline" size={18} color={colors.textSecondary} />
                                    <Text style={styles.agentDetailText}>{agent.address}</Text>
                                </View>
                                <TouchableOpacity style={styles.agentDetailRow} onPress={() => Linking.openURL(`tel:${agent.phone}`)}>
                                    <Icon name="call-outline" size={18} color={colors.textSecondary} />
                                    <Text style={styles.agentDetailText}>{agent.phone}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </CollapsibleCard>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SalesAgentsScreen;