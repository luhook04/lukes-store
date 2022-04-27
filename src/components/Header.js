import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Products</Link>
        <Link to="/cart">
          &#128722;<span>1</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
