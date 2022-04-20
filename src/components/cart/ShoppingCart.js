import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({ cart }) => {
  if (cart.length !== 0) {
    const items = cart.map((item, index) => {
      return (
        <CartItem
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      );
    });

    return <div className="cart-grid">{items}</div>;
  }
  else {
    return <h2>Your cart is currently empty</h2>;
  }
};

export default ShoppingCart;
