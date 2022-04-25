import React from "react";

const CartItem = ({ name, price, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h2>${price.toFixed(2)}</h2>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
