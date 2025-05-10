import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProductCatalog from './ProductCatalog';
import Cart from './Cart';
import Checkout from './Checkout';
import Reviews from './Reviews';  // Corrected import
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(item => item.id !== productToRemove.id));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductCatalog addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
