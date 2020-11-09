import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "../../utils.js";

import CardOptions from "../card-options/card-options.jsx";
import PlusMinusButtons from "../plus-minus-buttons/plus-minus-buttons.jsx";
import "./card-details.css";

const CardDetails = ({ pizza }) => {
  console.log(pizza);
  const { image, name, type, kcal, ingredients } = pizza;

  return (
    <section className="pizza-details">
      <div className="pizza-details-mark pizza-details-mark-new">New</div>
      <div className="pizza-details-mark pizza-details-mark-top">Top</div>
      <div className="pizza-details-mark pizza-details-mark-sale">-25%</div>
      <div className="pizza-photo">
        <img src={image} width="106" height="106" alt="pizza photo" />
      </div>
      <div className="pizza-details-info-container">
      <div className="pizza-details-top">
        <h2 className="pizza-details-title">{capitalize(name)}</h2>
        <p className="pizza-details-type">{capitalize(type)}</p>
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
          <p className="pizza-details-kcal">{kcal} kcal</p>
          <button type="button" className="pizza-toggle-ingredients">
            See ingredients
          </button>
        </div>
        <div className="pizza-details-ingredients">
          <p>
            <span className="pizza-ingredients-title">Sauce:</span>
            <span className="pizza-ingredients">{ingredients.sauces.join(', ')}</span>
          </p>
          <p>
            <span className="pizza-ingredients-title">Main ingredients:</span>
            <span className="pizza-ingredients">{ingredients.mainIngredients.join(', ')}</span>
          </p>
          <p>
            <span className="pizza-ingredients-title">Toppings:</span>
            <span className="pizza-ingredients">{ingredients.toppings.join(', ')}</span>
          </p>
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
          <FavoritesButton
            pizzaId={id}
            className={FavoritesClass.DETAILS}
          />
        </div>
      </div>
      </div>
    </section>
  );
};

CardDetails.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    kcal: PropTypes.number.isRequired,
    ingredients: PropTypes.shape({
      sauces: PropTypes.array,
      mainIngredients: PropTypes.array,
      toppings: PropTypes.array
    }),
    prices: PropTypes.shape({
      thin: PropTypes.shape({
        small: PropTypes.number.isRequired,
        medium: PropTypes.number.isRequired,
        large: PropTypes.number.isRequired,
      }),
      thick: PropTypes.shape({
        small: PropTypes.number.isRequired,
        medium: PropTypes.number.isRequired,
        large: PropTypes.number.isRequired,
      })
    }),
    discountPercent: PropTypes.number,
    isNew: PropTypes.bool.isRequired,
    isTop: PropTypes.bool.isRequired
  })
}

export default CardDetails;
