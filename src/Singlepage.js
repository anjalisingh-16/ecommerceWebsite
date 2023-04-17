import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "./Api";
import Navbar from "./Navbar";
import { ShopContext } from "./context/shop-context";
const Singlepage = () => {
  const { id } = useParams();
  const { cartitems, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();
  console.log(id);
  function Alertbox() {
    alert(
      "Your item has been successfully added to cart.You may view your cart"
    );
  }
  return (
    <>
      <Navbar />
      <div className="prod-container">
        <div className="prod-image">
          <img src={Api[id - 1].image} />
        </div>
        <div className="right-container">
          <h1 className="proname">{Api[id - 1].proname}</h1>
          <div className="modelname">{Api[id - 1].modelname}</div>
          <div className="madeby">{Api[id - 1].madeby}</div>

          <div className="info">{Api[id - 1].info}</div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to products
          </button>
          <button
            onClick={() => {
              addToCart(id);
              Alertbox();
            }}
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              navigate("/Add");
            }}
          >
            View Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Singlepage;
