// Pizza.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Pizza.css';

const Pizza = () => {
    const { addToCart } = useContext(CartContext);

    const pizzaList = [
        { id: 10, name: 'Margherita', price: 25 },
        { id: 11, name: 'Pepperoni', price: 30 },
        { id: 12, name: 'Quattro Stagioni', price: 35 }
    ];

    return (
        <div className="pizza-page">
            <h2>Pizzas</h2>
            <ul>
                {pizzaList.map(pizza => (
                    <li key={pizza.id}>
                        {pizza.name} - {pizza.price} lei
                        <button onClick={() => addToCart(pizza)}>Cumpără</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pizza;
