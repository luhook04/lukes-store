import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  let amount = 0;
  cart.map((item) => {
    amount += item.quantity;
    return amount;
  });

  return (
    <div>
      <h1>Store{amount}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Products</Link>
        <Link to="/cart">
          &#128722;<span>{amount}</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
