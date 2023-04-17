import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Api from "./Api";
function Product() {
  return (
    <>
      <Navbar />
      <div className="heading">Our Products</div>
      <div className="container">
        {Api.map((value) => {
          return (
            // <Card image={value.image} txt={value.name} price={value.price} />
            <Card data={value} />
          );
        })}
      </div>
    </>
  );
}

export default Product;
