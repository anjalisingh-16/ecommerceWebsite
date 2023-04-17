import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
function Navbar() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <ul className="navbar">
              <li>
                <div className="nav-content  shopnm" to={"/contact"}>
                  Phone Planet
                </div>
              </li>
              <li>
                <Link className="nav-content prod" to={"/products"}>
                  Products
                </Link>
              </li>
              <li>
                <Link className="nav-content" to={"/add"}>
                  <ShoppingCart size={32} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
