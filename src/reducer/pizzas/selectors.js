import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.PIZZAS;

export const selectPizzas = state => state[NAME_SPACE].pizzas;

export const selectFavorites = state => state[NAME_SPACE].favoritePizzas;

export const selectPizzaById = (pizzaId) => (state) => {
  return selectPizzas(state)
    .find(pizza => pizza.id === pizzaId);
};
