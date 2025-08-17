import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartContextType {
    itemCount: number;
    addToCart: () => void;
    removeFromCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [itemCount, setItemCount] = useState(0);

    const addToCart = () => {
        setItemCount(prevCount => prevCount + 1);
    };

    const removeFromCart = () => {
        setItemCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <CartContext.Provider value={{ itemCount, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};