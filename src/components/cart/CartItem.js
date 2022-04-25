import React from "react";

const CartItem = ({ name, price, image, quantity }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h2>${price.toFixed(2)}</h2>
      <h2>
        <button>-</button>
        {quantity}
        <button>+</button>
      </h2>
    </div>
  );
};

export default CartItem;
