import React from "react";
import PlusMinusButtons from "../plus-minus-buttons/plus-minus-buttons.jsx";

import "./card-cart.css";
import smallPizza from "../../assets/img/pizza-small.jpg";

const CardCart = () => {
  return (
    <li className="card-cart-item">
      <button className="card-cart-remove" type="button">Remove</button>
      <div className="card-cart-img">
        <img src={smallPizza} width="58" height="58" alt="Photo of Pepperoni pizza" />
      </div>
      <div className="card-cart-details">
        <div className="card-cart-top">
          <p className="card-cart-type">Traditional</p>
          <h2 className="card-cart-title">Pepperoni</h2>
          <p className="card-cart-description">
            14”, thin crust, marinara sauce,
            pepperoni, mozzarella, fresh basil
          </p>
        </div>
        <div className="card-cart-bottom">
          <PlusMinusButtons />
          <b className="card-cart-price">$ 26</b>
        </div>
      </div>
    </li>
  );
};

export default CardCart;
