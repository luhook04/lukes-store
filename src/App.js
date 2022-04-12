import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/store/Products";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/shop" element={Products} />
        <Route path="/cart" element={ShoppingCart} />
      </Routes>
    </Router>
  );
};

export default App;
