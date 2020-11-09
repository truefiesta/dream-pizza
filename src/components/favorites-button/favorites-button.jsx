import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "../../reducer/pizzas/selectors.js";
import { Operation as PizzasOperation } from "../../reducer/pizzas/pizzas.js";

const FavoritesButton = ({pizzaId, className}) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  let text, toggleFillClassName;
  if (favorites.includes(pizzaId)) {
    text = `To Favorites`;
    toggleFillClassName = ``;
  } else {
    text = 'In Favorites';
    toggleFillClassName = `card-not-added`;
  }

  return (
    <button onClick={() => {dispatch(PizzasOperation.changeFavorites(pizzaId))}} type="button" className={`${className} ${toggleFillClassName}`}>
      <span className="visually-hidden">{text}</span>
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
  );
};

FavoritesButton.propTypes = {
  pizzaId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default FavoritesButton;
