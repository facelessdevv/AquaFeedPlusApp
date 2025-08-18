import { StyleSheet } from 'react-native';
import { hp, wp, metrics } from './layout';

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
        paddingHorizontal: wp('5%')
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('1.5%'),
        borderBottomWidth: 1,
        borderBottomLeftRadius: metrics.borderRadius,
        borderBottomRightRadius: metrics.borderRadius,
    },
    headerSection: {
        alignSelf: 'center',
    },
    headerLogo: {
        width: wp('15%'),
        height: wp('15%'),
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
    padding: {
        paddingVertical: hp('2%')
    }
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
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        borderRadius: metrics.borderRadius
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

export const customTabBarStyles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: hp('12%'),
        alignItems: 'center',
        zIndex: 1000,
    },
    background: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: hp('2%'),
        width: wp('90%'),
        height: hp('8%'),
        borderRadius: metrics.borderRadius * 1.5,
        ...metrics.cardShadow,
    },
    centerButton: {
        position: 'absolute',
        top: 0,
        width: wp('15%'),
        height: wp('15%'),
        borderRadius: wp('7.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        ...metrics.cardShadow,
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabLabel: {
        fontSize: hp('1.4%'),
        fontFamily: 'IRANSans(FaNum)_Medium',
        marginTop: 3,
    },
});
  
  export const quickAccessStyles = (colors: any) => StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: hp('2%'),
    },
    itemContainer: {
        width: wp('25%'),
        alignItems: 'center',
        marginBottom: hp('2.5%'),
    },
    iconWrapper: {
        width: wp('14%'),
        height: wp('14%'),
        borderRadius: metrics.borderRadius,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        ...metrics.cardShadow,
        shadowColor: colors.primary,
        shadowOpacity: 0.05,
    },
    itemTitle: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.5%'),
        color: colors.textSecondary,
        marginTop: hp('1%'),
        textAlign: 'center',
    },
});

export const latestNewsStyles = (colors: any) => StyleSheet.create({
    container: {
        marginTop: hp('3%'),
    },
    header: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('2%'),
        paddingHorizontal: wp('5%'),
    },
    headerTitle: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.2%'),
        color: colors.textPrimary,
    },
    showAllButtonText: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.7%'),
        color: colors.primary,
    },
    cardContainer: {
        width: wp('65%'),
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius,
        ...metrics.cardShadow,
        overflow: 'hidden',
        marginRight: wp('4%'),
    },
    cardImage: {
        width: wp('75%'),
        height: hp('15%'),
    },
    cardContent: {
        padding: wp('3%'),
    },
    newsTitle: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        color: colors.textPrimary,
        textAlign: 'right',
        width: wp('30%')
    },
    cardTitle: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        width: ('auto'),
        fontSize: hp('1.5%'),
        color: colors.textPrimary,
        marginBottom: hp('1%'),
        textAlign: 'right',
    },
    cardDate: {
        fontFamily: 'IRANSans(FaNum)_Light',
        fontSize: hp('1.5%'),
        color: colors.textSecondary,
        textAlign: 'right',
    },
});

export const newsScreenStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('4%'),
        backgroundColor: colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    headerTitle: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.5%'),
        color: colors.textPrimary,
        flex: 1,
        textAlign: 'center',
    },
    newsItemContainer: {
        flexDirection: 'row-reverse',
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius,
        marginHorizontal: wp('4%'),
        marginTop: hp('2%'),
        ...metrics.cardShadow,
        overflow: 'hidden',
    },
    newsItemImage: {
        width: wp('30%'),
        height: '100%',
    },
    newsItemContent: {
        flex: 1,
        padding: wp('3%'),
        justifyContent: 'space-between',
    },
    newsItemTitle: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('1.9%'),
        color: colors.textPrimary,
        textAlign: 'right',
        marginBottom: hp('1%'),
    },
    newsItemSummary: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.6%'),
        color: colors.textSecondary,
        textAlign: 'right',
        lineHeight: hp('2.5%'),
    },
    newsItemDate: {
        fontFamily: 'IRANSans(FaNum)_Light',
        fontSize: hp('1.5%'),
        color: colors.textSecondary,
        textAlign: 'right',
        marginTop: hp('1.5%'),
    },
});

export const newsDetailStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        top: hp('5%'),
        left: wp('5%'), 
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: wp('5%'),
        padding: 8,
    },
    mainImage: {
        width: wp('100%'),
        height: hp('40%'),
        borderBottomLeftRadius: metrics.borderRadius,
        borderBottomRightRadius: metrics.borderRadius,
    },
    padding: {
        paddingHorizontal: wp('5%'),
    },
    contentContainer: {
        padding: wp('5%'),
        backgroundColor: colors.surface,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -hp('3%'),
        minHeight: hp('63%'),
    },
    title: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.2%'),
        color: colors.textPrimary,
        marginBottom: hp('1%'),
        textAlign: 'right',
        lineHeight: hp('4%'),
    },
    date: {
        fontFamily: 'IRANSans(FaNum)_Light',
        fontSize: hp('1.6%'),
        color: colors.textSecondary,
        marginBottom: hp('3%'),
        textAlign: 'right',
    },
    separator: {
        height: 1,
        marginVertical: hp('3%'),
    },
    contentText: {
        fontFamily: 'IRANSans(FaNum)_Light',
        fontSize: hp('1.9%'),
        color: colors.textPrimary,
        lineHeight: hp('3.5%'),
        textAlign: 'right',
        
    },
    contentHeading: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.2%'),
        color: colors.textPrimary,
        marginBottom: hp('1.5%'),
        marginTop: hp('1%'),
        textAlign: 'right',
    },
    contentImage: {
        width: '100%',
        height: hp('25%'),
        borderRadius: metrics.borderRadius,
        marginBottom: hp('2%'),
    },
    galleryContainer: {
        marginTop: hp('3%'),
    },
    galleryTitle: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.2%'),
        color: colors.textPrimary,
        marginBottom: hp('2%'),
        textAlign: 'right',
    },
    galleryImage: {
        width: wp('80%'),
        height: hp('25%'),
        borderRadius: metrics.borderRadius,
        marginRight: wp('4%'),
    },
});

export const profileScreenStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: wp('5%'),
    },
    header: {
        fontSize: hp('3%'),
        fontFamily: 'IRANSans(FaNum)_Bold',
        color: colors.textPrimary,
        textAlign: 'right',
        marginBottom: hp('4%'),
    },
    settingRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: hp('2%'),
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius,
        paddingHorizontal: wp('4%'),
    },
    settingText: {
        fontSize: hp('2%'),
        fontFamily: 'IRANSans(FaNum)_Medium',
        color: colors.textPrimary,
    },
});