import React, { useContext } from "react";
// import Api from "./Api";
import { ShopContext } from "./context/shop-context";
import { BsFillTrashFill } from "react-icons/bs";
// import { DotsThreeOutlineVertical } from "phosphor-react";
const DisplayItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartitems, addToCart, remove, updatechange, total } = useContext(
    ShopContext
  );
  return (
    <>
      <div className="Item">
        <div className="img">
          <img src={image} />
        </div>
        <div className="descrip">
          <div className="prodname">{name}</div>
          <div className="price">${cartitems[id] * price}</div>
          <div className="count">
            <button onClick={() => addToCart(id)}>+</button>
            <input
              value={cartitems[id]}
              onChange={(e) => updatechange(Number(e.target.value), id)}
            />
            <button onClick={() => remove(id)}>-</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DisplayItem;
