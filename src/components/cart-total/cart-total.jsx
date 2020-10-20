import React from "react";
import "./cart-total.css";

const CartTotal = () => {
  return (
    <section className="cart-total">
      <h2 className="cart-total-title">Total price</h2>
      <p className="cart-total-sum">$ 39</p>
      <a className="cart-total-button" href="">Pay now</a>
    </section>
  );
};

export default CartTotal;
