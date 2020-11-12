import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../const.js";

const PageNotFound = () => {
  return (
    <main className="not-found-page">
      <div className="wrapper">
        <h1 className="page-title">404</h1>
        <p className="page-text">Page not found</p>
        <Link to={AppRoute.HOME} className="page-link">Go to main page</Link>
      </div>
    </main>
  );
};

export default PageNotFound;
