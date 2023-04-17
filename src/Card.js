import React, { useContext } from "react";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "./context/shop-context";
import { useNavigate } from "react-router-dom";
function Card(props) {
  const { id, image, name, price } = props.data;
  const { addToCart, cartitems } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="sub-container">
        <div className="image-block">
          <img
            className="image-focus"
            src={image}
            onClick={() => {
              navigate("/mobile/" + id);
            }}
          />
        </div>
        <div className="description">
          <h3>{name}</h3>
          <h3>${price}</h3>
          <button className="addtocartbtn" onClick={() => addToCart(id)}>
            Add <ShoppingCart />
            {cartitems[id] > 0 && <>({cartitems[id]})</>}
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
