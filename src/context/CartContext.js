// CartContext.js
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setTotalPrice(totalPrice + product.price);
    };

    const clearCart = () => {
        setCartItems([]);
        setTotalPrice(0);
    };

    return (
        <CartContext.Provider value={{ cartItems, totalPrice, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
