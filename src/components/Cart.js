// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, totalPrice, clearCart } = useContext(CartContext);

    return (
        <div>
            <h2>Coșul tău</h2>
            {cartItems.length === 0 ? (
                <p>Nu ai adăugat nimic în coș.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.price} lei
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: {totalPrice} lei</h3>
            <button onClick={clearCart}>Golește coșul</button>
        </div>
    );
};

export default Cart;
