import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { useTheme } from '../context/ThemeContext';
import { HeroSwiperStyles as styles } from '../theme/styles';

const SLIDER_IMAGES = [
  'https://placehold.co/600x400/003a5d/FFFFFF?text=Aquafeed+Plus+1',
  'https://placehold.co/600x400/E04B15/FFFFFF?text=Aquafeed+Plus+2',
  'https://placehold.co/600x400/8cc63f/FFFFFF?text=Aquafeed+Plus+3',
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
            <Image source={{ uri: url }} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default HeroSwiper;