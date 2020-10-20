import React from "react";
import CardOptions from "../card-options/card-options.jsx";
import PlusMinusButtons from "../plus-minus-buttons/plus-minus-buttons.jsx";
import "./card-details.css";
import pizzaImg from "../../assets/img/pizza-small.jpg";

const CardDetails = () => {
  return (
    <section className="pizza-details">
      <div className="pizza-details-mark pizza-details-mark-new">New</div>
      <div className="pizza-details-mark pizza-details-mark-top">Top</div>
      <div className="pizza-details-mark pizza-details-mark-sale">-25%</div>
      <div className="pizza-photo">
        <img src={pizzaImg} width="106" height="106" alt="pizza photo" />
      </div>
      <div className="pizza-details-info-container">
      <div className="pizza-details-top">
        <h2 className="pizza-details-title">Dream special</h2>
        <p className="pizza-details-type">Meat</p>
        <div className="pizza-details-rating">
          <div className="pizza-details-rating-stars">
            <span
              className="pizza-details-rating-stars-active"
              style={{ width: "80%" }}
            ></span>
          </div>
          <span className="pizza-details-rating-star"></span>
          <span className="visually-hidden">Rating</span>
          <span className="pizza-details-rating-value">4.0 <span className="pizza-details-rating-full-value">/ 5 <a href="#reviews">(365 reviews)</a></span></span>
        </div>
        <div className="pizza-details-nutritional-info-container">
          <p className="pizza-details-kcal">270 kcal</p>
          <button type="button" className="pizza-toggle-ingredients">
            See ingredients
          </button>
        </div>
      </div>
      <div className="pizza-details-bottom">
        <CardOptions />
        <div className="price-plus-minus-container">
          <p className="pizza-details-price">
            <b className="pizza-details-price-current">$ 11</b>
            <span className="pizza-details-price-previous">
              <span className="pizza-details-price-previous-number">$ 13</span>
              <span className="pizza-details-price-previous-line"></span>
            </span>
          </p>
          <PlusMinusButtons />
        </div>
        <div className="add-to-cart-favorite-container">
          <button type="button" className="pizza-details-add-to-cart">
            Add to cart
          </button>
          <button className="pizza-details-favorites-button pizza-details-card-not-added">
            <span className="visually-hidden">Add to Favorites</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 15.66"
              width="18"
              height="16"
            >
              <path
                className="card-fill"
                d="M16.35 5.26C16.35 7.74 10.6 12.1 9 14c-1.6-1.9-7.35-6.26-7.35-8.74C1.65 2.05 5.81 0 9 3.48c3.19-3.48 7.35-1.43 7.35 1.78z"
                fill="#b92f2f"
              />
              <path
                d="M16.42 1.51A5.39 5.39 0 0012.66 0 6.23 6.23 0 009 1.26 6.19 6.19 0 005.34 0a5.35 5.35 0 00-3.75 1.51A5.15 5.15 0 000 5.26C0 7.55 2.34 9.92 5.66 13c.86.81 1.67 1.57 2.07 2.05a1.66 1.66 0 001.27.61h.05a1.65 1.65 0 001.22-.59c.4-.48 1.22-1.24 2.08-2.05C15.66 9.92 18 7.55 18 5.26a5.18 5.18 0 00-1.58-3.75zm-3.76.14zM9 14c-1.6-1.9-7.35-6.26-7.35-8.74a3.63 3.63 0 013.69-3.61A5 5 0 019 3.48a5 5 0 013.66-1.83 3.63 3.63 0 013.69 3.61C16.35 7.74 10.6 12.1 9 14z"
                fill="#181818"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CardDetails;
