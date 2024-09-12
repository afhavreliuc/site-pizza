// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from "./context/CartContext"
import Pizza from './components/Pizza';
import SideDishes from './components/SideDishes';
import Drinks from './components/Drinks';
import Desserts from './components/Desserts';
import Header from './components/HF/Header';
import Footer from './components/HF/Footer'; // Importăm footer-ul


function App() {
  return (
      <CartProvider>
          <Router>
              <Header />
              <div className="content">
                  <Routes>
                      <Route path="/pizza" element={<Pizza />} />
                      <Route path="/side-dishes" element={<SideDishes />} />
                      <Route path="/drinks" element={<Drinks />} />
                      <Route path="/desserts" element={<Desserts />} />
                  </Routes>
              </div>
              <Footer />
          </Router>
      </CartProvider>
  );
}

export default App;
