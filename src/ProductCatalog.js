// src/ProductCatalog.js

import React from 'react';

const products = [
  { id: 1, name: 'Кружка с котом', price: '500', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Кружка с собакой', price: '600', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Кружка с единорогом', price: '700', imageUrl: 'https://via.placeholder.com/150' },
];

const ProductCatalog = ({ addToCart }) => {
  return (
    <div className="product-catalog">
      <h2>Каталог Кружек</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Цена: {product.price} ₽</p>
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;