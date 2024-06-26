import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "../assets/styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
