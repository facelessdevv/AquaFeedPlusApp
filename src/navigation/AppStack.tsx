import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import ProfileScreen from '../screens/ProfileScreen';
// import ProductDetailScreen from '../screens/ProductDetailScreen';
// import AboutUsScreen from '../screens/AboutUsScreen';
// import NewsScreen from '../screens/NewsScreen';
// import ContactUsScreen from '../screens/ContactUsScreen';

export type RootStackParamList = {
  Main: undefined;
  Profile: undefined;
  ProductDetail: { productId: string };
  AboutUs: undefined;
  News: undefined;
  ContactUs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;