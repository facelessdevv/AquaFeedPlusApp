import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';

import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SupportScreen from '../screens/SupportScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CartScreen from '../screens/CartScreen';

export type MainTabsParamList = {
  Products: undefined;
  Support: undefined;
  Cart: undefined;
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'تنظیمات' }} />
      <Tab.Screen name="Products" component={ProductsScreen} options={{ title: 'محصولات' }} />
      <Tab.Screen name="Support" component={SupportScreen} options={{ title: 'پشتیبانی' }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ title: 'سبد خرید' }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'خانه' }} />
    </Tab.Navigator>
  );
};

export default MainTabs;