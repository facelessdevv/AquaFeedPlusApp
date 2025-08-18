import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { hp, wp } from '../theme/layout';

import { useTheme } from '../context/ThemeContext';
import { newsScreenStyles } from '../theme/styles';
import { allNews, NewsArticle } from '../data/newsData';
import { RootStackParamList } from '../navigation/AppStack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const NewsScreen = () => {
    const { colors } = useTheme();
    const styles = newsScreenStyles(colors);
    const navigation = useNavigation<NavigationProp>();

    const handleNewsPress = (articleId: string) => {
        navigation.navigate('NewsDetail', { articleId });
    };

    const renderItem = ({ item }: { item: NewsArticle }) => (
        <TouchableOpacity style={styles.newsItemContainer} onPress={() => handleNewsPress(item.id)}>
            <Image source={{ uri: item.mainImage }} style={styles.newsItemImage} />
            <View style={styles.newsItemContent}>
                <View>
                    <Text style={styles.newsItemTitle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.newsItemSummary} numberOfLines={3}>{item.summary}</Text>
                </View>
                <Text style={styles.newsItemDate}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back-outline" size={28} color={colors.textPrimary} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>اخبار و مقالات</Text>
                </View>

                <FlatList
                    data={allNews}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: hp('2%') }}
                />
            </View>
        </SafeAreaView>
    );
};

export default NewsScreen;