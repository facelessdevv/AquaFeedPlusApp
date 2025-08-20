import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import { latestNewsStyles as styles } from '../theme/styles';
import { allNews, NewsArticle } from '../data/newsData';
import { RootStackParamList } from '../navigation/AppStack';
import { wp, hp } from '../theme/layout';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

const LatestNewsList = () => {
    const { colors } = useTheme();
    const navigation = useNavigation<NavigationProp>();
    
    const latestNews = allNews.slice(0, 5);

    const handleNewsPress = (articleId: string) => {
        navigation.navigate('NewsDetail', { articleId });
    };

    const handleShowAllPress = () => {
        navigation.navigate('News');
    };

    const renderItem = ({ item }: { item: NewsArticle }) => (
        <View style={{right: wp('5%'),  paddingVertical: hp('1%'),}}>
            <TouchableOpacity style={styles(colors).cardContainer} onPress={() => handleNewsPress(item.id)}>
                <Image source={{ uri: item.mainImage }} style={styles(colors).cardImage} resizeMode='cover' />
                <View style={styles(colors).cardContent}>
                    <Text style={styles(colors).cardTitle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles(colors).cardDate}>{item.date}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <View style={styles(colors).header}>
                <Text style={{ ...styles(colors).newsTitle, fontSize: hp('2.2%') }}>آخرین اخبار</Text>
                <TouchableOpacity onPress={handleShowAllPress}>
                    <Text style={styles(colors).showAllButtonText}>مشاهده همه</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={latestNews}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                }}
                ListHeaderComponent={<View style={{ width: wp('5%') }} />}
                ListFooterComponent={<View style={{ width: wp('5%') }} />}
                inverted
            />

        </View>
    );
};

export default LatestNewsList;