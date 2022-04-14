import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ store, addItem }) => {
  const products = store.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.title}
        price={product.price}
        image={product.image}
        addItem={addItem}
      />
    );
  });

  return <div className="grid">{products}</div>;
};

export default Products;
