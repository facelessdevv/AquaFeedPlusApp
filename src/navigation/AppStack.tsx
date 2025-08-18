import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabs from './MainTabs';
import AboutUsScreen from '../screens/AboutUsScreen';
import RandDScreen from '../screens/RandDScreen';
import NewsScreen from '../screens/NewsScreen';
import AgentsScreen from '../screens/AgentsScreen';
import PrioritiesScreen from '../screens/PrioritiesScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import PriceListScreen from '../screens/PriceListScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductSubCategoryScreen from '../screens/ProductSubCategoryScreen';


export type RootStackParamList = {
  Main: undefined;
  AboutUs: undefined;
  RandD: undefined;
  News: undefined;
  NewsDetail: { articleId: string };
  Agents: undefined;
  Priorities: undefined;
  ContactUs: undefined;
  PriceList: undefined;
  Product: undefined;
  ProductSubCategory: { categoryId: string; categoryName: string };
  ProductDetail: { productId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="RandD" component={RandDScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
        <Stack.Screen name="Agents" component={AgentsScreen} />
        <Stack.Screen name="Priorities" component={PrioritiesScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="PriceList" component={PriceListScreen} />
        <Stack.Screen name="Product" component={ProductsScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="ProductSubCategory" component={ProductSubCategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;