import React, { useContext } from "react";
import Navbar from "./Navbar";
import Api from "./Api";
import { ShopContext } from "./context/shop-context";
import Product from "./Product";
import DisplayItem from "./display-item";
import { useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
function Add() {
  const { cartitems, total } = useContext(ShopContext);
  const totalamt = total();
  const navigate = useNavigate();
  function homepage() {
    navigate("/");
  }
  return (
    <>
      <Navbar />
      <div className="cart">
        <div>
          <h1>Cart Items</h1>
        </div>
        <div className="items">
          {Api.map((value) => {
            if (cartitems[value.id] !== 0) {
              return <DisplayItem data={value} />;
            }
          })}
        </div>

        {totalamt > 0 ? (
          <div className="checkout">
            <h2>Grand Total:${totalamt}</h2>
            <button onClick={homepage}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <h1>Your Cart is empty</h1>
        )}
      </div>
    </>
  );
}
export default Add;
