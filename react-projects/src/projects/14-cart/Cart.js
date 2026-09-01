import React from "react";
import { useGlobalContext } from "./context";

//components
import Navbar from "../14-cart/Navbar";
import CartContainer from "../14-cart/CartContainer";
// items

const Cart = () => {
  const {loading} = useGlobalContext()
  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default Cart;
