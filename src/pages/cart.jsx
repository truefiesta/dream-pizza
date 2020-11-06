import React from "react";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardCart from "../components/card-cart/card-cart.jsx";
import CartTotal from "../components/cart-total/cart-total.jsx";

const Cart = () => {
  return (
    <main className="cart-page">
      <div className="wrapper">
        <Breadcrumbs />
        <h1 className="main-title">My order</h1>
        <div className="cart-container">
          <ul className="cart-list">
            <CardCart />
            <CardCart />
          </ul>
          <CartTotal />
        </div>
      </div>
    </main>
  )
};

export default Cart;
