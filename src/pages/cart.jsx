import React from "react";
import Header from "../components/header/header.jsx";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardCart from "../components/card-cart/card-cart.jsx";
import CartTotal from "../components/cart-total/cart-total.jsx";
import Footer from "../components/footer/footer.jsx";

const Cart = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
};

export default Cart;
