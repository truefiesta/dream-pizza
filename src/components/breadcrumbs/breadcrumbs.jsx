import React from "react";
import "./breadcrumbs.css";

const Breadcrumbs = () => {
  return (
    <ul className="breadcrumbs-list">
      <li className="breadcrumbs-item">
        <a href="">Home</a>
      </li>
      <li className="breadcrumbs-item breadcrumbs-current">Menu</li>
    </ul>
  );
};

export default Breadcrumbs;
