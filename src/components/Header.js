// Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const { totalPrice } = useContext(CartContext);

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
                <span>Coș: {totalPrice} lei</span>
            </div>
        </header>
    );
};

export default Header;
