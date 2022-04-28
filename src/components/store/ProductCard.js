import React from "react";

const ProductCard = ({ name, price, image, addItem }) => {
  return (
    <div className="product-container">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>${price.toFixed(2)}</h3>
      <button onClick={addItem}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
