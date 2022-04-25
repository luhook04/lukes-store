import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the store!</h2>
      <Link to="/shop">
        <button>Shop Now!</button>
      </Link>
    </div>
  );
};

export default Home;
