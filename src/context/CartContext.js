// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log(product)
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.name === product.name);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const incrementQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};
