import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const metrics = {
  borderRadius: 12,
  cardShadow: {
    shadowColor: '#0B1A2B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
};

export const screenWidth = wp('100%');
export const screenHeight = hp('100%');
export { wp, hp };