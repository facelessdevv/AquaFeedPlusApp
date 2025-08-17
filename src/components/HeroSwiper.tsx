import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { useTheme } from '../context/ThemeContext';
import { HeroSwiperStyles as styles } from '../theme/styles';

const SLIDER_IMAGES = [
  'https://aquafeedplus.org/wp-content/uploads/2025/08/site-baner.psd-farsi-png.webp',
  'https://aquafeedplus.org/wp-content/uploads/2025/04/3-2.webp',
  'https://aquafeedplus.org/wp-content/uploads/2025/04/2-2.webp',
];

const HeroSwiper = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay
        autoplayTimeout={4}
        dot={<View style={[styles.dot, { backgroundColor: colors.border }]} />}
        activeDot={<View style={[styles.dot, { backgroundColor: colors.accent }]} />}
      >
        {SLIDER_IMAGES.map((url, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: url }} style={styles.image} resizeMode="stretch" />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default HeroSwiper;