import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="welcome-message">Welcome to the store!</h2>
      <Link className="store-link" to="/shop">
        <button className="store-btn">Shop Now!</button>
      </Link>
    </div>
  );
};

export default Home;
