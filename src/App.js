// App.js
import React from 'react';
import { CartProvider } from "./context/CartContext"
import Pizza from './components/Pizza';
import SideDishes from './components/SideDishes';
import Drinks from './components/Drinks';
import Desserts from './components/Desserts';
import Cart from './components/Cart';

function App() {
    return (
        <CartProvider>
            <div>
                <h1>La Havre - Pizzeria</h1>
                <div className="menu">
                    <Pizza />
                    <SideDishes />
                    <Drinks />
                    <Desserts />
                </div>
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;
