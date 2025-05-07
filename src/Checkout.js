// src/Checkout.js

import React from 'react';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);

  const handleCheckout = () => {
    // Здесь вы можете добавить логику оформления заказа.
    alert('Заказ оформлен!');
  };

  return (
    <div className="checkout">
      <h2>Оформление заказа</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста. Добавьте товары для оформления заказа.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name} - {item.price} ₽</span>
              </li>
            ))}
          </ul>
          <h3>Итого: {totalPrice} ₽</h3>
          <button onClick={handleCheckout}>Подтвердить заказ</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;