// src/Cart.js

import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name} - {item.price} ₽</span>
                <button onClick={() => removeFromCart(item)}>Удалить</button>
              </li>
            ))}
          </ul>
          <h3>Итого: {totalPrice} ₽</h3>
          <Link to="/checkout">
            <button>Перейти к оформлению заказа</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;