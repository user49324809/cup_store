// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Магазин Кружек</h1>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/reviews">Отзывы</Link></li>
          <li><Link to="/cart">Корзина</Link></li>
          <li><Link to="/checkout">Оформление Заказа</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;