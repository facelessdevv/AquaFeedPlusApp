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

export const customTabBarStyles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row-reverse',
        height: hp('9%'),
        borderTopWidth: 1,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerButtonContainer: {
        flex: 1.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerButton: {
        width: wp('16%'),
        height: wp('16%'),
        borderRadius: wp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: hp('2.5%'),
        ...metrics.cardShadow,
    },
    tabLabel: {
        fontSize: wp('2.5%'),
        fontFamily: 'IRANSans(FaNum)',
        marginTop: hp('0.5%'),
    }
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