import NameSpace from "../name-space.js";
import { createSelector } from "reselect";

const NAME_SPACE = NameSpace.PIZZAS;

export const selectPizzas = state => state[NAME_SPACE].pizzas;

export const selectFavorites = state => state[NAME_SPACE].favoritePizzas;

export const selectAllInCart = state => state[NAME_SPACE].pizzasInCart;

export const selectCurrentPizza = state => state[NAME_SPACE].currentPizza;

export const selectPizzaReviews = state => state[NAME_SPACE].pizzaReviews;

export const selectPizzaById = (pizzaId) => (state) => {
  return selectPizzas(state)
    .find(pizza => pizza.id === pizzaId);
};

export const selectPizzasInCartQuantity = createSelector(
  selectAllInCart,
  (pizzasInCart) => pizzasInCart.reduce((acc, pizza) => {
    return acc + pizza.quantity
  }, 0)
);
