import React from "react";
import PropTypes from "prop-types";
import { ActionCreator as PaymentActionCreator } from "../../reducer/payment/payment.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const.js";
import "./cart-total.css";

const CartTotal = ({cart}) => {
  const dispatch = useDispatch();

  let total = 0
  if (cart.length > 0) {
    total = cart.reduce((acc, pizza) => acc += pizza.quantity * pizza.pricePerOne, 0);
  }

  return (
    <section className="cart-total">
      <h2 className="cart-total-title">Total price</h2>
      <p className="cart-total-sum">$ {total}</p>
      {total > 0
        ? <Link to={AppRoute.THANK_YOU} className="cart-total-button" onClick={() => {dispatch(PaymentActionCreator.changeAccess(true))}}>Pay now</Link>
        : <a className="cart-total-button-disabled">Pay now</a>
      }

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
