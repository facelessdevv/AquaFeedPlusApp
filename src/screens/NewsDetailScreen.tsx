import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useTheme } from '../context/ThemeContext';
import { newsDetailStyles } from '../theme/styles';
import { RootStackParamList } from '../navigation/AppStack';
import { allNews, NewsContent } from '../data/newsData';

type NewsDetailScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

const NewsDetailScreen = () => {
    const { colors } = useTheme();
    const styles = newsDetailStyles(colors);
    const route = useRoute<NewsDetailScreenRouteProp>();
    const navigation = useNavigation();
    const { articleId } = route.params;

    const article = allNews.find(item => item.id === articleId);

    const renderContentItem = (item: NewsContent, index: number) => {
        switch (item.type) {
            case 'paragraph':
                return <Text key={index} style={styles.contentText}>{item.value}</Text>;
            case 'header':
                return <Text key={index} style={styles.contentHeading}>{item.value}</Text>;
            case 'image':
                return <Image key={index} source={{ uri: item.value }} style={styles.contentImage} />;
            default:
                return null;
        }
    };

    
    if (!article) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
                <Text style={{ color: colors.textPrimary, fontFamily: 'IRANSans(FaNum)_Bold' }}>
                    خبر با شناسه {articleId} یافت نشد!
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
                    <Text style={{ color: colors.primary }}>بازگشت</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.header}>
                <Icon name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <Image source={{ uri: article.mainImage }} style={styles.mainImage} />

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{article.title}</Text>
                <Text style={styles.date}>{article.date}</Text>

                {/* این بخش فقط زمانی اجرا می‌شود که article.content یک آرایه باشد 
                  که با بررسی بالا تضمین شده است.
                */}
                {article.content?.map((item, index) => renderContentItem(item, index))}

                {article.galleryImages && article.galleryImages?.length > 0 && (
                    <View style={styles.galleryContainer}>
                        <Text style={styles.galleryTitle}>گالری تصاویر</Text>
                        <FlatList
                            data={article.galleryImages}
                            keyExtractor={(item, index) => `${item}-${index}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Image source={{ uri: item }} style={styles.galleryImage} />
                            )}
                        />
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default NewsDetailScreen;