import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SupportScreen from '../screens/SupportScreen';
import CartScreen from '../screens/CartScreen';
import CustomTabBar from './CustomTabBar';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />} 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'خانه' }} />
      <Tab.Screen name="Products" component={ProductsScreen} options={{ title: 'محصولات' }} />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ 
          title: 'سبد خرید',
        }} 
      />
      <Tab.Screen name="Support" component={SupportScreen} options={{ title: 'پشتیبانی' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'پروفایل' }} />
    </Tab.Navigator>
  );
};

export default MainTabs;