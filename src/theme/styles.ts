import { StyleSheet } from 'react-native';
import { wp, hp, metrics } from './layout';

export const buttonStyles = StyleSheet.create({
    container: {
        paddingVertical: hp('1.8%'),
        paddingHorizontal: wp('5%'),
        borderRadius: metrics.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: wp('4%'),
        fontFamily: 'IRANSans(FaNum)_Bold',
    },
});

export const cardStyles = StyleSheet.create({
    container: {
        borderRadius: metrics.borderRadius,
        padding: wp('4%'),
        marginBottom: hp('2%'),
        ...metrics.cardShadow,
    },
});

export const homeScreenStyles = StyleSheet.create({
    flex: { flex: 1 },
    container: {
        paddingBottom: hp('10%'),
    },
    header: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('1.5%'),
        borderBottomWidth: 1,
    },
    headerSection: {
        flex: 1,
        justifyContent: 'center',
    },
    headerLogo: {
        width: wp('12%'),
        height: wp('12%'),
    },
    headerTitle: {
        fontSize: wp('6%'),
        fontFamily: 'IRANSans(FaNum)_Bold',
        textAlign: 'center',
    },
    profileButton: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    cardTitle: {
        fontSize: wp('4.5%'),
        fontFamily: 'IRANSans(FaNum)_Bold',
        textAlign: 'right',
        marginBottom: hp('2%'),
    },
    quickAccessGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    quickAccessItem: {
        width: wp('28%'),
        alignItems: 'center',
        paddingVertical: hp('2%'),
        borderRadius: metrics.borderRadius,
        marginBottom: hp('1.5%'),
    },
    quickAccessText: {
        marginTop: hp('1%'),
        fontSize: wp('3%'),
        fontFamily: 'IRANSans(FaNum)_Medium',
    },
});

export const HeroSwiperStyles = StyleSheet.create({
    container: {
        height: hp('25%'),
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    dot: {
        width: wp('2%'),
        height: wp('2%'),
        borderRadius: wp('1%'),
        marginLeft: wp('1%'),
        marginRight: wp('1%'),
    },
});

export const cartScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: wp('4%'),
        borderBottomWidth: 1,
    },
    headerTitle: {
        fontSize: wp('5%'),
        fontFamily: 'IRANSans(FaNum)_Bold',
        textAlign: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: hp('10%'),
    },
    emptyText: {
        marginTop: hp('2%'),
        fontSize: wp('4.5%'),
        fontFamily: 'IRANSans(FaNum)_Medium',
    },
});

export const customTabBarStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: hp('2%'),
      left: wp('5%'),
      right: wp('5%'),
      height: hp('8%'),
      borderRadius: metrics.borderRadius * 1.5,
      backgroundColor: colors.surface + 'F2',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: wp('3%'),
      ...metrics.cardShadow,
      shadowOpacity: 0.15,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 4 },
      elevation: 5,
    },
    tabButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: hp('0.5%'),
    },
    centerButtonContainer: {
      width: wp('20%'),
      height: wp('20%'),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -hp('5.5%'),
    },
    centerButton: {
      width: wp('15%'),
      height: wp('15%'),
      borderRadius: wp('10%'),
      backgroundColor: colors.accent,
      justifyContent: 'center',
      alignItems: 'center',
      ...metrics.cardShadow,
      shadowColor: colors.accent,
      shadowOpacity: 0.35,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 6 },
      elevation: 8,
    },
    tabLabel: {
      fontSize: hp('1.4%'),
      fontFamily: 'IRANSans(FaNum)_Medium',
      marginTop: 3,
      color: colors.textSecondary,
    },
    activeTabLabel: {
      color: colors.primary,
      fontFamily: 'IRANSans(FaNum)_Bold',
    },
  });
