import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../const.js";

const ThankYouPage = () => {
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
