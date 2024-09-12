// Header.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartModal from './Cart/CartModal';
import './Header.css';

const Header = () => {
    const { totalPrice } = useContext(CartContext);
    const [showCartModal, setShowCartModal] = useState(false);

    const handleOpenCart = () => {
        setShowCartModal(true);
    };

    const handleCloseCart = () => {
        setShowCartModal(false);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>La Havre Pizzeria</h1>
            </div>
            <nav>
                <Link to="/pizza">Pizza</Link>
                <Link to="/side-dishes">Side Dishes</Link>
                <Link to="/drinks">Drinks</Link>
                <Link to="/desserts">Desserts</Link>
            </nav>
            <div className="cart-info">
                <span onClick={handleOpenCart}>Coș: {totalPrice} lei</span>
            </div>
            <CartModal show={showCartModal} handleClose={handleCloseCart} />
        </header>
    );
};

export default Header;
