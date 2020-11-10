import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Operation as PizzasOperation } from "../../reducer/pizzas/pizzas.js";
import { selectPizzaById } from "../../reducer/pizzas/selectors.js";
import { MIN_PIZZA_QUANTITY } from "../../const.js";
import { capitalize } from "../../utils.js";

import PlusMinusButtons from "../plus-minus-buttons/plus-minus-buttons.jsx";

import "./card-cart.css";

const CardCart = ({ cartObj }) => {
  const [quantity, setQuantity] = useState(cartObj.quantity);
  const pizzaById = useSelector(selectPizzaById(cartObj.pizzaId));
  const dispatch = useDispatch();

  const { id, crust, size, pricePerOne } = cartObj;
  const { image, type, name, ingredients } = pizzaById;

  const allIngredients = [...ingredients.sauces, ...ingredients.mainIngredients, ...ingredients.toppings].join(', ');


  const increment = () => {
    setQuantity(prev => prev + 1);
    dispatch(PizzasOperation.increaseItemQuantityInCart(id));
  }

  const decrement = () => {
    setQuantity(prev => prev - 1);
    dispatch(PizzasOperation.decreaseItemQuantityInCart(id));
  }

  return (
    <li className="card-cart-item">
      <button
        onClick={() => dispatch(PizzasOperation.removeFromCart(id))}
        className="card-cart-remove"
        type="button">
          Remove
      </button>
      <div className="card-cart-img">
        <img src={image} width="58" height="58" alt="Photo of Pepperoni pizza" />
      </div>
      <div className="card-cart-details">
        <div className="card-cart-top">
          <p className="card-cart-type">{capitalize(type)}</p>
          <h2 className="card-cart-title">{capitalize(name)}</h2>
          <p className="card-cart-description">
            {size} inches, {crust} crust, {allIngredients}
          </p>
        </div>
        <div className="card-cart-bottom">
          <PlusMinusButtons
            currentValue={quantity}
            minPossibleValue={MIN_PIZZA_QUANTITY}
            onMinusClick={decrement}
            onPlusClick={increment}
          />
          <b className="card-cart-price">$ {pricePerOne}</b>
        </div>
      </div>
    </li>
  );
};

CardCart.propTypes = {
  cartObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    pizzaId: PropTypes.string.isRequired,
    crust: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    pricePerOne: PropTypes.number.isRequired
  }).isRequired
}

export default CardCart;
