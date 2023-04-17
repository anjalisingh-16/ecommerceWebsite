import React from "react";
import Product from "./Product";
import { ShopContextProvider } from "./context/shop-context";
import Add from "./Add";
import Singlepage from "./Singlepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Routing = () => {
  return (
    <>
      <div>
        <ShopContextProvider>
          <Router>
            <Routes>
              <Route path={"/mobile/:id"} element={<Singlepage />} />
              <Route path={"/"} element={<Product />} />
              <Route path={"/products"} element={<Product />} />
              <Route path={"/add"} element={<Add />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
};
export default Routing;
