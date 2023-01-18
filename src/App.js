import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/store/Products';
import Header from './components/Header';
import ShoppingCart from './components/cart/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchStore = async () => {
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const data = await response.json();
      setStore(data);
    };
    fetchStore();
  }, []);

  const addItem = (e) => {
    const alreadyInCart = cart
      .map((cartItem) => cartItem.name)
      .includes(e.target.parentNode.children[1].textContent);

    if (!alreadyInCart) {
      const item = {
        image: e.target.parentNode.children[0].src,
        name: e.target.parentNode.children[1].textContent,
        price: Number(
          e.target.parentNode.children[2].textContent.replace('$', '')
        ),
        quantity: 1,
      };
      setCart((prevCart) => [...prevCart, item]);
    } else if (alreadyInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === e.target.parentNode.children[1].textContent
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    }
  };

  const incrementItem = (e) => {
    const itemName = e.target.parentNode.parentNode.children[1].textContent;
    setCart(
      cart.map((cartItem) =>
        cartItem.name === itemName
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decrementItem = (e) => {
    const itemName = e.target.parentNode.parentNode.children[1].textContent;
    console.log(itemName);

    const newCart = cart
      .filter((item) => item.name !== itemName || item.quantity > 1)
      .map((cartItem) =>
        cartItem.name === itemName
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    setCart(newCart);
  };

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Products store={store} addItem={addItem} />}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cart={cart}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
