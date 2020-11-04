import { createPizza } from "../../adapters/adapters.js";
import { selectFavorites } from "./selectors.js";

const initialState = {
  pizzas: [],
  favoritePizzas: [],
}

const ActionType = {
  SET_ALL_PIZZAS: `SET_ALL_PIZZAS`,
  SET_FAVORITES: `SET_FAVORITES`,
  CHANGE_FAVORITES: `CHANGE_FAVORITES`
}

const ActionCreator = {
  setAllPizzas: (pizzas) => ({
    type: ActionType.SET_ALL_PIZZAS,
    payload: pizzas
  }),
  setFavorites: (pizzaIds) => ({
    type: ActionType.SET_FAVORITES,
    payload: pizzaIds
  }),
  changeFavorites: (pizzaId) => ({
    type: ActionType.CHANGE_FAVORITES,
    payload: pizzaId
  })
}

const Operation = {
  loadAllPizzas: () => (dispatch, getState, api) => {
    return api.getAllPizzas()
      .then(response => {
        const pizzasServer = response;
        const pizzasClient = pizzasServer.map(pizza => createPizza(pizza));

        dispatch(ActionCreator.setAllPizzas(pizzasClient));
      });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.getFavorites()
      .then(response => {
        dispatch(ActionCreator.setFavorites(response));
      })
  },
  changeFavorites: (pizzaId) => (dispatch, getState, api) => {
    const favorites = selectFavorites(getState()).slice();
    const pizzaIdIndex = favorites.indexOf(pizzaId);
    if (pizzaIdIndex !== -1) {
      return api.removeFromFavorites(pizzaId)
        .then(response => {
          dispatch(ActionCreator.setFavorites(response))
        })
    } else {
      return api.addToFavorites(pizzaId)
        .then(response => {
          dispatch(ActionCreator.setFavorites(response))
        })
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ALL_PIZZAS:
      return Object.assign({}, state, {
        pizzas: action.payload
      });
    case ActionType.SET_FAVORITES:
      return Object.assign({}, state, {
        favoritePizzas: action.payload
      });
  }

  return state;
};

export { initialState, ActionType, ActionCreator, Operation, reducer }
