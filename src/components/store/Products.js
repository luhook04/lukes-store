import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ addItem, store }) => {
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

  return <div className="product-grid">{products}</div>;
};

export default Products;
