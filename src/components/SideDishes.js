// SideDishes.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const SideDishes = () => {
    const { addToCart } = useContext(CartContext);

    const sidesList = [
        { id: 1, name: 'Cartofi prăjiți', price: 10 },
        { id: 2, name: 'Salată Caesar', price: 15 }
    ];

    return (
        <div>
            <h2>Side Dishes</h2>
            <ul>
                {sidesList.map(side => (
                    <li key={side.id}>
                        {side.name} - {side.price} lei
                        <button onClick={() => addToCart(side)}>Cumpără</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideDishes;
