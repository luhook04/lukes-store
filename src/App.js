import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/store/Products";
import Header from "./components/Header";
import ShoppingCart from "./components/cart/ShoppingCart";

const App = () => {
  const [ cart, setCart ] = useState([]);
  const [ store, setStore ] = useState([]);

  useEffect(() => {
    fetchStore();
  }, []);

  const fetchStore = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = await response.json();
    setStore(data);
  };

  const addItem = (e) => {
    const item = {
      image : e.target.parentNode.children[0].src,
      name  : e.target.parentNode.children[1].textContent,
      price : e.target.parentNode.children[2].textContent.replace("$", "")
    };

    setCart((prevCart) => [ ...prevCart, item ]);
  };

  return (
    <Router basename="/">
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Products store={store} addItem={addItem} />}
        />
        <Route path="/cart" element={<ShoppingCart cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
