// CartModal.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartModal.css';

const CartModal = ({ show, handleClose }) => {
    const { cart, incrementQuantity, decrementQuantity, totalPrice } = useContext(CartContext);

    if (!show) {
        return null; // Nu afișează nimic dacă modalul nu este activ
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Coșul tău</h2>
                {cart.length === 0 ? (
                    <p>Coșul este gol!</p>
                ) : (
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <span>{item.name} - {item.price} lei x {item.quantity}</span>
                                <div>
                                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="total-price">
                    <strong>Total: {totalPrice} lei</strong>
                </div>
                <button onClick={handleClose} className="close-modal">Închide</button>
            </div>
        </div>
    );
};

export default CartModal;
