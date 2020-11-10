import React from "react";
import PropTypes from "prop-types";
import "./cart-total.css";

const CartTotal = ({cart}) => {
  let total = 0
  if (cart.length > 0) {
    total = cart.reduce((acc, pizza) => acc += pizza.quantity * pizza.pricePerOne, 0);
  }

  return (
    <section className="cart-total">
      <h2 className="cart-total-title">Total price</h2>
      <p className="cart-total-sum">$ {total}</p>
      <a className="cart-total-button" href="">Pay now</a>
    </section>
  );
};

CartTotal.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    pricePerOne: PropTypes.number.isRequired
  })).isRequired
}

export default CartTotal;
