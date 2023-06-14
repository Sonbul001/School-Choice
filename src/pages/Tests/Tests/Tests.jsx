import React, { useState } from 'react';
import Swipeable from 'react-swipeable/dist/react-swipeable';

const ProductCarousel = () => {
  const [currentProduct, setCurrentProduct] = useState(1);

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentProduct((prevProduct) => prevProduct + 4);
    } else if (direction === 'right') {
      setCurrentProduct((prevProduct) => prevProduct - 4);
    }
  };

  // Static product data
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$15' },
    { id: 3, name: 'Product 3', price: '$20' },
    { id: 4, name: 'Product 4', price: '$25' },
    { id: 5, name: 'Product 5', price: '$30' },
    { id: 6, name: 'Product 6', price: '$35' },
    { id: 7, name: 'Product 7', price: '$40' },
    { id: 8, name: 'Product 8', price: '$45' },
    { id: 9, name: 'Product 9', price: '$50' },
    { id: 10, name: 'Product 10', price: '$55' },
  ];

  // Calculate the range of products to display
  const startIndex = currentProduct - 1;
  const endIndex = startIndex + 3;
  const visibleProducts = products.slice(startIndex, endIndex + 1);

  return (
    <Swipeable
      onSwipedLeft={() => handleSwipe('left')}
      onSwipedRight={() => handleSwipe('right')}
    >
      <div>
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </Swipeable>
  );
};

export default ProductCarousel;