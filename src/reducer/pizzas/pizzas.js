import { createPizza, createPizzaCartItem, createReview } from "../../adapters/adapters.js";
import { selectFavorites } from "./selectors.js";

const initialState = {
  pizzas: [],
  favoritePizzas: [],
  pizzasInCart: [],
  currentPizza: {},
  pizzaReviews: []
}

const ActionType = {
  SET_ALL_PIZZAS: `SET_ALL_PIZZAS`,
  SET_FAVORITES: `SET_FAVORITES`,
  SET_CART: `SET_CART`,
  SET_CURRENT_PIZZA: `SET_CURRENT_PIZZA`,
  SET_PIZZA_REVIEWS: `SET_PIZZA_REVIEWS`
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
  }),
  setPizzaReviews: (reviews) => ({
    type: ActionType.SET_PIZZA_REVIEWS,
    payload: reviews
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
        const cartItemsServer = response;
        const cartItemsClient = cartItemsServer.map(item => createPizzaCartItem(item));

        dispatch(ActionCreator.setCart(cartItemsClient));
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
        const cartItemsServer = response;
        const cartItemsClient = cartItemsServer.map(item => createPizzaCartItem(item));

        dispatch(ActionCreator.setCart(cartItemsClient))
      })
  },
  removeFromCart: (cartObjId) => (dispatch, getState, api) => {
    return api.removeFromCart(cartObjId)
      .then(response => {
        const cartItemsServer = response;
        const cartItemsClient = cartItemsServer.map(item => createPizzaCartItem(item));

        dispatch(ActionCreator.setCart(cartItemsClient))
      })
  },
  cleanCart: () => (dispatch, getState, api) => {
    return api.cleanCart()
      .then(response => {
        dispatch(ActionCreator.setCart(response))
      })
  },
  increaseItemQuantityInCart: (cartObjId) => (dispatch, getState, api) => {
    return api.increaseItemQuantity(cartObjId)
      .then(response => {
        const cartItemsServer = response;
        const cartItemsClient = cartItemsServer.map(item => createPizzaCartItem(item));

        dispatch(ActionCreator.setCart(cartItemsClient))
      })
  },
  decreaseItemQuantityInCart: (cartObjId) => (dispatch, getState, api) => {
    return api.decreaseItemQuantity(cartObjId)
      .then(response => {
        const cartItemsServer = response;
        const cartItemsClient = cartItemsServer.map(item => createPizzaCartItem(item));

        dispatch(ActionCreator.setCart(cartItemsClient))
      })
  },
  loadPizzaReviews: (pizzaId) => (dispatch, getState, api) => {
    return api.getPizzaReviews(pizzaId)
      .then(response => {
        const reviewsServer = response;
        const reviewsClient = reviewsServer.map(review => createReview(review));

        dispatch(ActionCreator.setPizzaReviews(reviewsClient))
      })
  },
  addPizzaReview: (review) => (dispatch, getState, api) => {
    const formattedReview = {
      "user": {
        "id": review.user.id,
        "name": review.user.name,
        "avatar": review.user.avatar,
      },
      "rating": review.rating,
      "date": review.date,
      "pizza_id": review.pizzaId,
      "text": review.text
    };

    return api.addPizzaReview(formattedReview)
      .then(response => {
        const reviewsServer = response;
        const reviewsClient = reviewsServer.map(review => createReview(review));

        dispatch(ActionCreator.setPizzaReviews(reviewsClient))
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
      });
    case ActionType.SET_PIZZA_REVIEWS:
      return Object.assign({}, state, {
        pizzaReviews: action.payload
      })
  }

  return state;
};

export { initialState, ActionType, ActionCreator, Operation, reducer }
