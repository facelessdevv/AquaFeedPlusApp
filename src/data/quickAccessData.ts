export interface QuickAccessItem {
  id: number;
  title: string;
  icon: string;
  screen: string;
}

export const quickAccessItems: QuickAccessItem[] = [
  { id: 1, title: 'ثبت سفارش', icon: 'cube-outline', screen: 'Product' },
  { id: 2, title: 'لیست قیمت', icon: 'pricetag-outline', screen: 'PriceListCategories' },
  { id: 3, title: 'تحقیق و توسعه', icon: 'flask-outline', screen: 'RandD' },
  { id: 4, title: 'تماس با ما', icon: 'call-outline', screen: 'ContactUs' },
  { id: 5, title: 'عاملین فروش', icon: 'people-outline', screen: 'Agents' },
  { id: 6, title: 'اولویت‌ها', icon: 'star-outline', screen: 'Priorities' },
];