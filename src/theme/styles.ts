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

export const cartScreenStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        padding: wp('4%'),
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        backgroundColor: colors.surface,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: hp('2.5%'),
        fontFamily: 'IRANSans(FaNum)_Bold',
        color: colors.textPrimary,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('10%'),
    },
    emptyText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.2%'),
        color: colors.textSecondary,
        marginTop: hp('2%'),
        textAlign: 'center',
    },
    listContainer: {
        paddingVertical: hp('2%'),
    },
    cartItem: {
        flexDirection: 'row-reverse',
        backgroundColor: colors.surface,
        marginHorizontal: wp('4%'),
        marginVertical: wp('4%'),
        marginBottom: hp('2%'),
        borderRadius: metrics.borderRadius,
        padding: wp('3%'),
        ...metrics.cardShadow,
    },
    itemImage: {
        width: wp('22%'),
        height: wp('22%'),
        borderRadius: metrics.borderRadius,
    },
    itemDetails: {
        flex: 1,
        marginRight: wp('4%'),
        justifyContent: 'space-between',
    },
    itemName: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: colors.textPrimary,
        textAlign: 'right',
    },
    itemPrice: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('1.9%'),
        color: colors.primary,
        textAlign: 'right',
        marginTop: hp('1%'),
    },
    itemActions: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp('2%'),
    },
    removeButton: {
        padding: wp('1.5%'),
    },
    footer: {
        backgroundColor: colors.surface,
        padding: wp('4%'),
        borderTopWidth: 1,
        borderTopColor: colors.border,
        height: hp('26%'),
    },
    totalRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginBottom: hp('2%'),
    },
    totalText: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('2%'),
        color: colors.textSecondary,
    },
    totalPriceText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.2%'),
        color: colors.textPrimary,
    },
    checkoutButton: {
        backgroundColor: colors.accent,
        padding: hp('1%'),
        borderRadius: metrics.borderRadius,
        alignItems: 'center',
    },
    checkoutButtonText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: '#FFFFFF',
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
    badgeContainer: {
        position: 'absolute',
        top: -5,
        right: -5,
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'IRANSans(FaNum)_Bold',
        paddingHorizontal: 4,
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
        textAlign: 'center',
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

export const productsScreenStyles = (colors: any) => StyleSheet.create({
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
    listContent: {
        padding: wp('4%'),
        paddingBottom: hp('15%')
    },
    categoryCard: {
        height: hp('25%'),
        flex: 1,
        margin: wp('2%'),
        borderRadius: metrics.borderRadius * 1.5,
        overflow: 'hidden',
        ...metrics.cardShadow,
    },
    cardImageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    cardOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: wp('4%'),
    },
    cardTitle: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.2%'),
        color: '#FFFFFF',
        textAlign: 'right',
    },
});

export const subCategoryScreenStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    subCategoryCard: {
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius * 1.5,
        marginBottom: hp('2.5%'),
        ...metrics.cardShadow,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: hp('32%'),
        borderRadius: metrics.borderRadius
    },
    row: {
        flexDirection: 'row-reverse',
        width: wp('80%'),
        alignItems: 'center',
        paddingTop: hp('3%')
    },
    cardHeader: {
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('4%'),
    },
    cardHeaderTitle: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: colors.textPrimary,
        textAlign: 'right',
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
        fontSize: hp('2%'),
        color: colors.textPrimary,
        flex: 1,
        textAlign: 'center',
    },
    listContent: {
        padding: wp('4%'),
    },
    cardContent: {
        padding: wp('4%'),
    },
    productRow: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingVertical: hp('1.5%'),
        alignSelf: 'center'
    },
    productImage: {
        width: wp('15%'),
        height: wp('15%'),
        resizeMode: 'contain',
    },
    separator: {
        width: wp('1%'),
        height: hp('5%'),
    },
    productInfo: {
        flex: 1,
        marginRight: wp('4%'),
    },
    productName: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('1.5%'),
        color: colors.textPrimary,
        textAlign: 'right',
    },
});

export const productDetailScreenStyles = (colors: any) => StyleSheet.create({
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
    scrollView: {
        flex: 1,
    },
    content: {
        padding: wp('5%'),
    },
    productImage: {
        width: '100%',
        height: hp('30%'),
        resizeMode: 'contain',
        marginBottom: hp('3%'),
        borderRadius: metrics.borderRadius,
        backgroundColor: colors.surface,
    },
    productDetailView: {
        paddingTop: wp('5%')
    },
    productDetailImage: {
        width: '100%',
        height: hp('30%'),
        resizeMode: 'contain',
        marginBottom: hp('3%'),
        borderRadius: metrics.borderRadius,
        backgroundColor: colors.surface,
    },
    productName: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.5%'),
        color: colors.textPrimary,
        textAlign: 'right',
    },
    productDescription: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.5%'),
        color: colors.textSecondary,
        textAlign: 'right',
        lineHeight: hp('3.5%'),
    },
    separator: {
        height: 1,
        marginVertical: hp('3%'),
    },
    tableHeader: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: colors.textPrimary,
        textAlign: 'right',
        marginBottom: hp('2%'),
    },
    tableRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingVertical: hp('1.5%'),
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    tableCell: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.5%'),
        color: colors.textPrimary,
    },
    featuresHeader: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: colors.textPrimary,
        textAlign: 'right',
        marginBottom: hp('2%'),
    },
    featureRow: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginBottom: hp('1.5%'),
    },
    featureIcon: {
        marginLeft: wp('3%'),
    },
    featureText: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.5%'),
        color: colors.textPrimary,
        flex: 1,
        textAlign: 'right',
    },
    ingredientsContainer: {
        marginTop: hp('4%'),
    },
    ingredientList: {
        marginTop: hp('2%'),
    },
    ingredientItem: {
        alignItems: 'center',
        marginRight: wp('4%'),
    },
    ingredientImage: {
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: wp('10%'),
        backgroundColor: colors.surface,
        borderWidth: 2,
        borderColor: colors.border,
    },
    ingredientName: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.6%'),
        color: colors.textSecondary,
        marginTop: hp('1%'),
    },
    ingredientcontent: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.5%'),
        color: colors.textSecondary,
        textAlign: 'right',
        lineHeight: hp('3.5%'),
        marginTop: hp('3%'),
    },
});

export const quantitySelectorStyles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    button: {
        width: wp('8%'),
        height: wp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('4%'),
    },
    quantityText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.5%'),
        marginHorizontal: wp('5%'),
    },
});

export const productDetailFooterStyles = (colors: any) => StyleSheet.create({
    safeArea: {
    borderTopWidth: 1,
    paddingBottom: hp('1%'),
    height: hp('17%'),
    borderRadius: metrics.borderRadius,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
},
    quantitySection: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('1.5%'),
    },
    quantityLabel: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
    },
    buttonSection: {
        flexDirection: 'row-reverse',
        paddingHorizontal: wp('5%'),
        justifyContent: 'space-between',
    },
    pdfButton: {
        backgroundColor: '#e7e7e7',
        padding: hp('1.8%'),
        borderRadius: metrics.borderRadius,
        alignItems: 'center',
        width: wp('30%')
    },
    cartButton: {
        backgroundColor: colors.accent,
        padding: hp('1.8%'),
        borderRadius: metrics.borderRadius,
        alignItems: 'center',
        width: wp('58%')
    },
    buttonText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('1.5%'),
        color: '#FFFFFF',
    },
    pdfText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('1.5%'),
        color: '#FFFFFF',
    },
});

export const priceListScreenStyles = (colors: any) => StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: colors.background 
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
    listContent: {
        paddingBottom: hp('2%'),
        paddingHorizontal: wp('4%'),
        paddingTop: hp('2%')
    },
    tableContainer: {
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius,
        ...metrics.cardShadow,
        overflow: 'hidden',
        marginTop: hp('2%'),
    },

    tableHeaderRow: {
        flexDirection: 'row-reverse',
        backgroundColor: colors.primary,
        paddingVertical: hp('1.2%'),
        paddingHorizontal: wp('3%'),
        alignItems: 'center',
        borderRadius: metrics.borderRadius,
    },
    tableHeaderCell: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: '#FFFFFF',
        textAlign: 'right',
    },

    tableRow: {
        flexDirection: 'row-reverse',
        paddingVertical: hp('1.2%'),
        paddingHorizontal: wp('3%'),
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius,
        marginTop: wp('1%')
    },
    tableCell: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.6%'),
        color: colors.textPrimary,
        textAlign: 'right',
        alignSelf: 'center',
        paddingHorizontal: wp('2%'),
        lineHeight: hp('3%')
    },
    viewProductButton: {
        backgroundColor: colors.accent,
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('2%'),
        borderRadius: metrics.borderRadius,
        alignItems: 'center',
    },
    viewProductButtonText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('1.6%'),
        color: '#FFFFFF',
    },
    footer: {
        padding: wp('4%'),
        backgroundColor: colors.surface,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    pdfButton: {
        backgroundColor: colors.primary,
        paddingVertical: hp('1.5%'),
        borderRadius: metrics.borderRadius,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    pdfButtonText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: '#FFFFFF',
        marginRight: wp('2%'),
    },
});

export const supportScreenStyles = (colors: any) => StyleSheet.create({
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
    card: {
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius,
        margin: wp('4%'),
        padding: wp('4%'),
        ...metrics.cardShadow,
    },
    cardTitle: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2.2%'),
        color: colors.textPrimary,
        textAlign: 'right',
        marginBottom: hp('2%'),
    },
    infoRow: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginBottom: hp('1.5%'),
    },
    linkText: {
        color: colors.primary,
        textDecorationLine: 'underline',
    },
    mapButton: {
        backgroundColor: colors.primary,
        padding: hp('1.5%'),
        borderRadius: metrics.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        marginTop: hp('1%'),
    },
    mapButtonText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('1.8%'),
        color: '#FFFFFF',
        marginLeft: wp('2%'),
    },
    navButton: {
        backgroundColor: colors.surface,
        marginHorizontal: wp('4%'),
        marginBottom: hp('2%'),
        padding: wp('4%'),
        borderRadius: metrics.borderRadius,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...metrics.cardShadow,
    },
    navButtonText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: colors.textPrimary,
    },
    infoText: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.8%'),
        color: colors.textSecondary,
        marginRight: wp('3%'),
        flex: 1,
        textAlign: 'right',
    },
    phoneRowContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    phoneLinkText: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.8%'),
        color: colors.primary,
        textDecorationLine: 'underline',
    },
    phoneSeparator: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.8%'),
        color: colors.textSecondary,
        marginHorizontal: wp('1%'),
    },
});

export const collapsibleCardStyles = (colors: any) => StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius,
        marginVertical: hp('1%'),
        overflow: 'hidden',
        ...metrics.cardShadow,
    },
    header: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: wp('4%'),
    },
    headerText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: colors.textPrimary,
    },
    content: {
        paddingHorizontal: wp('4%'),
        paddingBottom: hp('2%'),
    },
});

export const salesAgentsScreenStyles = (colors: any) => StyleSheet.create({
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
    listContainer: {
        padding: wp('4%'),
    },
    agentContainer: {
        paddingVertical: hp('1.5%'),
        borderBottomWidth: 1,
    },
    agentName: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('1.9%'),
        color: colors.textPrimary,
        textAlign: 'right',
        marginBottom: hp('1%'),
    },
    agentDetailRow: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginTop: hp('0.5%'),
    },
    agentDetailText: {
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.7%'),
        color: colors.textSecondary,
        marginLeft: wp('2%'),
    },
});

export const departmentsScreenStyles = (colors: any) => StyleSheet.create({
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
    listContent: {
        padding: wp('4%'),
    },
    departmentCard: {
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius,
        padding: wp('4%'),
        marginBottom: hp('2%'),
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...metrics.cardShadow,
    },
    departmentName: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: colors.textPrimary,
    },
    emailButton: {
        backgroundColor: colors.primary,
        padding: wp('2.5%'),
        borderRadius: wp('10%'),
    },
});

export const feedbackScreenStyles = (colors: any) => StyleSheet.create({
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
    scrollContainer: {
        padding: wp('5%'),
    },
    label: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('1.9%'),
        color: colors.textPrimary,
        textAlign: 'right',
        marginBottom: hp('1%'),
    },
    input: {
        backgroundColor: colors.surface,
        borderRadius: metrics.borderRadius,
        padding: wp('3%'),
        borderWidth: 1,
        borderColor: colors.border,
        fontFamily: 'IRANSans(FaNum)_Medium',
        fontSize: hp('1.8%'),
        textAlign: 'right',
        writingDirection: 'rtl',
        marginBottom: hp('3%'),
        color: colors.textPrimary,
    },
    textArea: {
        height: hp('20%'),
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: colors.primary,
        padding: hp('2%'),
        borderRadius: metrics.borderRadius,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'IRANSans(FaNum)_Bold',
        fontSize: hp('2%'),
        color: '#FFFFFF',
    },
});