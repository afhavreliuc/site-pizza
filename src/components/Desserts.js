// Desserts.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "./Desserts.css"

const Desserts = () => {
    const { addToCart } = useContext(CartContext);

    const dessertsList = [
        { id: 1, name: 'Tiramisu', price: 20 },
        { id: 2, name: 'Cheesecake', price: 22 }
    ];

    return (
        <div className='desserts-page'>
            <h2>Deserturi</h2>
            <ul>
                {dessertsList.map(dessert => (
                    <li key={dessert.id}>
                        {dessert.name} - {dessert.price} lei
                        <button onClick={() => addToCart(dessert)}>Cumpără</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Desserts;
