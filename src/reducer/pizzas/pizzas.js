import { createPizza } from "../../adapters/adapters.js";
import { selectFavorites } from "./selectors.js";

const initialState = {
  pizzas: [],
  favoritePizzas: [],
  pizzasInCart: [],
  currentPizza: {},
}

const ActionType = {
  SET_ALL_PIZZAS: `SET_ALL_PIZZAS`,
  SET_FAVORITES: `SET_FAVORITES`,
  SET_CART: `SET_CART`,
  SET_CURRENT_PIZZA: `SET_CURRENT_PIZZA`
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
  setCart: (pizzas) => ({
    type: ActionType.SET_CART,
    payload: pizzas
  }),
  setCurrentPizza: (pizza) => ({
    type: ActionType.SET_CURRENT_PIZZA,
    payload: pizza
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
  loadCart: () => (dispatch, getState, api) => {
    return api.getCartItems()
      .then(response => {
        dispatch(ActionCreator.setCart(response));
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
  },
  addToCart: (pizzaCartObj) => (dispatch, getState, api) => {
    const { pizzaId, crust, size, quantity, pricePerOne } = pizzaCartObj;
    return api.addToCart(pizzaId, crust, size, quantity, pricePerOne)
      .then(response => {
        dispatch(ActionCreator.setCart(response))
      })
  },
  removeFromCart: (cartObjId) => (dispatch, getSta, api) => {
    return api.removeFromCart(cartObjId)
      .then(response => {
        dispatch(ActionCreator.setCart(response))
      })
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
    case ActionType.SET_CART:
      return Object.assign({}, state, {
        pizzasInCart: action.payload
      });
    case ActionType.SET_CURRENT_PIZZA:
      return Object.assign({}, state, {
        currentPizza: action.payload
      })
  }

  return state;
};

export { initialState, ActionType, ActionCreator, Operation, reducer }
