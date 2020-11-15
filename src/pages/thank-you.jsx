import React, { useEffect } from "react";
import { ActionCreator as PaymentActionCreator } from "../reducer/payment/payment.js";
import { Operation as PizzasOperation } from "../reducer/pizzas/pizzas.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppRoute } from "../const.js";

const ThankYouPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PizzasOperation.cleanCart());

    return function () {
      dispatch(PaymentActionCreator.changeAccess(false));
    };
  });

  return (
    <main className="menu-page">
      <div className="wrapper">
        <h1 className="main-title">Thank you! Your order is processing.</h1>
        <Link to={AppRoute.HOME} className="page-link">Go to main page</Link>
      </div>
    </main>
  );
};

export default ThankYouPage;
