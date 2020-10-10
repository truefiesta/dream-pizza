import React from "react";
import "./card.css";
import pizzaImg from "../../assets/img/pizza-small.jpg";

const Card = () => {
  return (
    <li className="card">
      <a className="card-image-container-link">
        <img
          src={pizzaImg}
          width="106"
          height="106"
          alt="Dream special pizza photo"
        />
      </a>
      <div className="card-details">
        <div className="card-details-top">
          <h3 className="card-title">
            <a className="card-title-link">Dream special</a>
          </h3>
          <p className="card-pizza-type">Meat</p>
          <div className="card-rating">
            <span style={{ width: "80%" }}></span>
            <span className="visually-hidden">Rating</span>
            <span className="card-rating-value">4.0</span>
          </div>
        </div>
        <p className="card-price">
          <small>Starts from</small>
          <br />$ 13
        </p>
      </div>
      <button className="card-button favorites-button card-not-added">
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
      <button className="card-button cart-button card-not-added">
        <span className="visually-hidden">Add to Cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 15.36"
          width="18"
          height="16"
        >
          <path
            className="card-fill"
            d="M5.59 9.87H15.9a.81.81 0 00.76-.66L18 3.16a.84.84 0 00-.77-1.05h-13z"
            fill="#b92f2f"
          />
          <path
            d="M16.24 3.69l-1 4.59H5.33L4.5 3.69h11.74m1-1.58h-13l1.35 7.76H15.9a.81.81 0 00.76-.66L18 3.16a.84.84 0 00-.77-1.05zM6.15 13.9a.79.79 0 110-1.58l8.43-.06a.79.79 0 01.79.79.8.8 0 01-.79.8l-8.43.05z"
            fill="#181818"
          />
          <path
            d="M6.15 12.88a.79.79 0 01-.77-.62L3 1.59H.79A.8.8 0 010 .79.8.8 0 01.79 0h2.86a.79.79 0 01.77.62l2.51 11.29a.79.79 0 01-.6.95z"
            fill="#181818"
          />
          <circle cx="6.15" cy="13.11" r="2.25" fill="#181818" />
          <circle cx="14.58" cy="13.11" r="2.25" fill="#181818" />
        </svg>
      </button>
    </li>
  );
};

export default Card;