import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/store/Products";
import ShoppingCart from "./components/ShoppingCart";
import Header from "./components/Header";

const App = () => {
  const [ cost, setCost ] = useState(0);
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

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products store={store} />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;
