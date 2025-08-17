import React from 'react';
import AppStack from './src/navigation/AppStack';
import { ThemeProvider } from './src/context/ThemeContext';
import { CartProvider } from './src/context/CartContext';

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