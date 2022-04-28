import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  let amount = 0;
  cart.map((item) => {
    amount += item.quantity;
    return amount;
  });

  return (
    <div className="header">
      <h1>Luke's Store</h1>
      <nav>
        <Link to="/lukes-store">Home</Link>
        <Link to="/shop">Products</Link>
        <Link className="cart-icon" to="/cart">
          &#128717;<span className="badge" data-testid="amount">
            {amount}
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
