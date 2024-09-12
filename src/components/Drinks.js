// Drinks.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Drinks = () => {
    const { addToCart } = useContext(CartContext);

    const drinksList = [
        { id: 1, name: 'Cola', price: 8 },
        { id: 2, name: 'Fanta', price: 8 },
        { id: 3, name: 'Apă', price: 5 }
    ];

    return (
        <div>
            <h2>Băuturi</h2>
            <ul>
                {drinksList.map(drink => (
                    <li key={drink.id}>
                        {drink.name} - {drink.price} lei
                        <button onClick={() => addToCart(drink)}>Cumpără</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Drinks;
