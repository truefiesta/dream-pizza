import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Operation as PizzasOperation } from "../../reducer/pizzas/pizzas.js";

import { capitalize, convertStarRatingToWidthPercent } from "../../utils.js";
import { MIN_PIZZA_QUANTITY, PIZZA_OPTION, CRUST_TYPE, crustTypes, PIZZA_SIZE, pizzaSizes, InchesToSizeTitle, FavoritesClass } from "../../const.js";

import CardOptionsRow from "../card-options-row/card-options-row.jsx";
import FavoritesButton from "../favorites-button/favorites-button.jsx";
import PlusMinusButtons from "../plus-minus-buttons/plus-minus-buttons.jsx";
import "./card-details.css";

const CardDetails = ({ pizza }) => {
  const [crust, setCrust] = useState(CRUST_TYPE.THIN);
  const [size, setSize] = useState(PIZZA_SIZE.MEDIUM);
  const [quantity, setQuantity] = useState(MIN_PIZZA_QUANTITY)
  const dispatch = useDispatch();

  const { id, image, name, type, rating, kcal, ingredients, prices, discountPercent, isNew, isTop } = pizza;
  const discountLabelMarkup = discountPercent > 0 ? <div className="pizza-details-mark pizza-details-mark-sale">-{discountPercent}%</div> : ``;

  let previousPrice, currentPrice, previousPriceMarkup;
  if (discountPercent > 0) {
    previousPrice = prices[crust][InchesToSizeTitle[size]];
    currentPrice = (previousPrice - (previousPrice * discountPercent / 100)).toFixed(0);
    previousPriceMarkup = (
      <span className="pizza-details-price-previous">
        <span className="pizza-details-price-previous-number">$ {previousPrice}</span>
        <span className="pizza-details-price-previous-line"></span>
      </span>
    );
  } else {
    currentPrice = prices[crust][InchesToSizeTitle[size]];
    previousPriceMarkup = '';
  }

  const increment = () => {
    setQuantity(prev => prev + 1);
  }

  const decrement = () => {
    setQuantity(prev => prev - 1);
  }

  const createPizzaCartObject = () => {
    return {
      pizzaId: id,
      crust,
      size,
      quantity,
      pricePerOne: currentPrice
    }
  };

  const addToCartHandle = () => {
    dispatch(PizzasOperation.addToCart(createPizzaCartObject()))
    setQuantity(MIN_PIZZA_QUANTITY);
  }

  return (
    <section className="pizza-details">
      {isNew && <div className="pizza-details-mark pizza-details-mark-new">New</div>}
      {isTop && <div className="pizza-details-mark pizza-details-mark-top">Top</div>}
      {discountLabelMarkup}
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
              style={{ width: convertStarRatingToWidthPercent(rating) }}
            ></span>
          </div>
          <span className="pizza-details-rating-star"></span>
          <span className="visually-hidden">Rating</span>
          <span className="pizza-details-rating-value">{rating} <span className="pizza-details-rating-full-value">/ 5.0 <a href="#reviews">(365 reviews)</a></span></span>
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
        <div className="card-options-wrapper">
          <CardOptionsRow
            cardId={id}
            title={PIZZA_OPTION.CRUST}
            checkedOption={crust}
            options={crustTypes}
            onOptionChange={(crust) => {setCrust(crust)}}
          />
          <CardOptionsRow
            cardId={id}
            title={PIZZA_OPTION.SIZE}
            checkedOption={size}
            options={pizzaSizes}
            onOptionChange={(size) => {setSize(size)}}
          />
        </div>
        <p className="card-options-chosen-note">{capitalize(crust)} crust, {size} inches size</p>
        <div className="price-plus-minus-container">
          <p className="pizza-details-price">
            <b className="pizza-details-price-current">$ {currentPrice}</b>
            {previousPriceMarkup}
          </p>
          <PlusMinusButtons
            currentValue={quantity}
            minPossibleValue={MIN_PIZZA_QUANTITY}
            onMinusClick={decrement}
            onPlusClick={increment}
          />
        </div>
        <div className="add-to-cart-favorite-container">
          <button
            onClick={addToCartHandle}
            type="button"
            className="pizza-details-add-to-cart"
          >
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
