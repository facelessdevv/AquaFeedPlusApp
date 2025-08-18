import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Alert } from 'react-native';
import { Product } from '../data/productData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    totalPrice: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const loadCart = async () => {
            const savedCart = await AsyncStorage.getItem('cartItems');
            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            }
        };
        loadCart();
    }, []);

    useEffect(() => {
        const saveCart = async () => {
            await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
        };
        saveCart();
    }, [cartItems]);

    const addToCart = (product: Product, quantity: number) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity }];
        });
        Alert.alert("موفقیت", `تعداد ${quantity} کیلوگرم از "${product.name}" به سبد خرید اضافه شد.`);
    };

    const removeFromCart = (productId: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const increaseQuantity = (productId: string) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId: string) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
            )
        );
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
    const itemCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, itemCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};