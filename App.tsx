import React from 'react';
import AppStack from './src/navigation/AppStack';
import { ThemeProvider } from './src/context/ThemeContext';
import { CartProvider } from './src/context/CartContext';
import { I18nManager } from "react-native";

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppStack />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
