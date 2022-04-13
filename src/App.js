import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/store/Products";
import ShoppingCart from "./components/ShoppingCart";
import Header from "./components/Header";

const App = () => {
  useEffect(() => {
    fetchStore();
  }, []);

  //const [ cost, setCost ] = useState(0);
  //const [ cart, setCart ] = useState([]);

  const fetchStore = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products?limit=5"
    );
    console.dir(response.json());
  };

  return <div />;

  // return (
  //   <Router>
  //     <Header />
  //     <Routes>
  //       <Route path="/" element={Home} />
  //       <Route path="/shop" element={Products} />
  //       <Route path="/cart" element={ShoppingCart} />
  //     </Routes>
  //   </Router>
  // );
};

export default App;
