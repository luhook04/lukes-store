import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>${price.toFixed(2)}</h3>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductCard;
