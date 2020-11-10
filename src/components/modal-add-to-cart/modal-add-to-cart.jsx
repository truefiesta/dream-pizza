import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Operation as PizzasOperation } from "../../reducer/pizzas/pizzas.js";
import { selectCurrentPizza } from "../../reducer/pizzas/selectors.js";
import { capitalize } from "../../utils.js";
import { MIN_PIZZA_QUANTITY, PIZZA_OPTION, CRUST_TYPE, crustTypes, PIZZA_SIZE, pizzaSizes, InchesToSizeTitle } from "../../const.js";

import CardOptionsRow from "../card-options-row/card-options-row.jsx";
import PlusMinusButtons from "../plus-minus-buttons/plus-minus-buttons.jsx";

import "./modal-add-to-cart.css";

const ModalAddToCart = ({setClose}) => {
  const [crust, setCrust] = useState(CRUST_TYPE.THIN);
  const [size, setSize] = useState(PIZZA_SIZE.MEDIUM);
  const [quantity, setQuantity] = useState(MIN_PIZZA_QUANTITY);
  const dispatch = useDispatch();
  const currentPizza = useSelector(selectCurrentPizza);
  const { id, discountPercent, prices } = currentPizza;

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
    setClose(false);
  }

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

  return (
    <div className="card-modal">
      <h2 className="modal-title">{capitalize(name)}</h2>
      <div className="card-options-wrapper modal-card-options-wrapper">
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
      <div className="modal-price-block">
        <p className="card-price">
          <b className="card-price-current">$ {currentPrice}</b>
          {previousPriceMarkup}
        </p>
        <PlusMinusButtons
          currentValue={quantity}
          minPossibleValue={MIN_PIZZA_QUANTITY}
          onMinusClick={decrement}
          onPlusClick={increment}
          />
      </div>
      <div className="modal-total">
        <p>Total:</p>
        <p>$ {currentPrice * quantity}</p>
      </div>
      <button
        onClick={addToCartHandle}
        type="button"
        className="modal-add-to-cart dark-button"
      >
        Add to cart
      </button>
    </div>
  );
};

ModalAddToCart.propTypes = {
  setClose: PropTypes.func.isRequired
}

export default ModalAddToCart;
