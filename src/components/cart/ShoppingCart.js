import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({ cart }) => {
  let total = 0;

  if (cart.length !== 0) {
    const items = cart.map((item, index) => {
      total += item.price * item.quantity;
      return (
        <CartItem
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      );
    });

    return (
      <div>
        <h3>Total: ${total.toFixed(2)}</h3>
        <div className="cart-grid">{items}</div>
      </div>
    );
  }
  else {
    return <h2>Your cart is currently empty</h2>;
  }
};

export default ShoppingCart;
