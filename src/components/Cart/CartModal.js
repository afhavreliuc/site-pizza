// CartModal.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartModal.css';

const CartModal = ({ show, handleClose }) => {
    const { cart, incrementQuantity, decrementQuantity, clearCart ,totalPrice } = useContext(CartContext);

    if (!show) {
        return null; // Nu afișează nimic dacă modalul nu este activ
    }

    const handlePay = () => {
        if(totalPrice)
            alert('Felicitări! Comanda dvs. a fost plasată cu succes!');
        else
            alert('Inca nu ati ales ceva sa cumparati!')
        clearCart(); // Resetăm coșul
        handleClose()
    };

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
                <div className="cart-modal">
                    <button className="pay-button" onClick={handlePay}>
                        Plătiți
                    </button>
                    <button className="close-button" onClick={handleClose}>
                        Închide
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
