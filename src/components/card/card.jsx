import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { capitalize, convertStarRatingToWidthPercent } from '../../utils.js';
import CardOptionsRow from "../card-options-row/card-options-row.jsx";
import FavoritesButton from "../favorites-button/favorites-button.jsx";
import "./card.css";
import newPizza from "../../assets/img/new-pizza.jpg";

const PIZZA_OPTION = {
  CRUST: `crust`,
  SIZE: `size`
}

const CRUST_TYPE = {
  THICK: `thick`,
  THIN: `thin`,
};

const crustTypes = Object.values(CRUST_TYPE);

const PIZZA_SIZE = {
  SMALL: `13`,
  MEDIUM: `14`,
  LARGE: `15`,
}

const InchesToSizeTitle = {
  "13": `small`,
  "14": `medium`,
  "15": `large`,
}

const pizzaSizes = Object.values(PIZZA_SIZE);

const Card = ({ newCard, pizza }) => {
  const [crust, setCrust] = useState(CRUST_TYPE.THIN);
  const [size, setSize] = useState(PIZZA_SIZE.MEDIUM);

  const {id, image, name, type, rating, kcal, ingredients, prices, discountPercent, isNew, isTop} = pizza;
  const allIngredients = [...ingredients.sauces, ...ingredients.mainIngredients, ...ingredients.toppings].join(', ');

  let previousPrice, currentPrice, previousPriceMarkup;
  if (discountPercent > 0) {
    previousPrice = prices[crust][InchesToSizeTitle[size]];
    currentPrice = (previousPrice - (previousPrice * discountPercent / 100)).toFixed(0);
    previousPriceMarkup = (
      <span className="card-price-previous">
        <span className="card-price-previous-number">$ {previousPrice}</span>
        <span className="card-price-previous-line"></span>
      </span>
    );
  } else {
    currentPrice = prices[crust][InchesToSizeTitle[size]];
    previousPriceMarkup = '';
  }


  const discountLabel = discountPercent > 0 ? <div className="card-mark mark-sale">{`-${discountPercent}%`}</div> : '';
  const newLabel = isNew ? <div className="card-mark mark-new">New</div> : '';
  const topLabel = isTop ? <div className="card-mark mark-top">Top</div> : '';

  return (
    <>
      {newCard ? (
        <li className="card">
          <a className="card-image-container-link">
            <img src={newPizza} width="106" height="106" alt="no image" />
          </a>
          <div className="card-details">
            <div className="card-details-top">
              <h3 className="card-title">
                <a className="card-title-link">Create your pizza</a>
              </h3>
              <p className="card-pizza-type">Pizza of your dreams</p>
              <div className="card-rating rating">
                <div className="rating-stars"></div>
                <span className="visually-hidden">Rating</span>
                <span className="card-rating-value">0.0</span>
              </div>
              <p className="card-pizza-kcal">0 kcal</p>
            </div>
            <div className="card-details-bottom">
              <p>
                Choose any ingredients from our catalog and we’ll bake the pizza
                for you.
              </p>
            </div>
            <a className="dark-button card-details-new-button" href="">
              Start creating
            </a>
          </div>
        </li>
      ) : (
        <li className="card">
          {newLabel}
          {topLabel}
          {discountLabel}
          <Link to={`/pizza/${id}`} className="card-image-container-link">
            <img
              src={image}
              width="106"
              height="106"
              alt={`${name} pizza photo`}
            />
          </Link>
          <div className="card-details">
            <div className="card-details-top">
              <h3 className="card-title">
                <Link to={`/pizza/${id}`} className="card-title-link">{name}</Link>
              </h3>
              <p className="card-pizza-type">{type}</p>
              <div className="card-rating rating">
                <div className="rating-stars">
                  <span
                    className="rating-stars-active"
                    style={{ width: `${convertStarRatingToWidthPercent(rating)}%` }}
                  ></span>
                </div>
                <span className="rating-favorites"></span>
                <span className="visually-hidden">Rating</span>
                <span className="card-rating-value">{`${rating.toFixed(1)} / 5.0`}</span>
              </div>
              <p className="card-pizza-kcal">{kcal} kcal</p>
              <p className="ingredients-favorites">
                {capitalize(allIngredients)}
              </p>
            </div>
            <div className="card-details-bottom">
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
            </div>
            <p className="card-price">
              <small className="card-price-note">Starts from</small>
              <b className="card-price-current">$ {currentPrice}</b>
              {previousPriceMarkup}
            </p>
          </div>
          <FavoritesButton
            pizzaId={id}
            className={FavoritesClass.BASIC}
          />
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
      )}
    </>
  );
};

Card.propTypes = {
  newCard: PropTypes.bool.isRequired,
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
};

export default Card;
