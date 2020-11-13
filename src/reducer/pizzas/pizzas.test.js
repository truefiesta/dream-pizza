
import MockApi from "../../api/mock/mock.js";
import pizzasTestData from "../../api/test-data/pizzas.test.json";
import reviewsTestData from "../../api/test-data/reviews.test.json";
import locationsTestData from "../../api/test-data/locations.test.json";

import { createPizza, createReview } from "../../adapters/adapters.js";
import { reducer, ActionCreator, ActionType, Operation, initialState } from "./pizzas.js";
import NameSpace from "../name-space.js";

describe(`Action creators`, () => {
  it(`setAllPizzas returns correct type and payload`, () => {
    const pizzas = [{id: 'pizza-1'}, {id: 'pizza-2'}, {id: 'pizza-3'}];

    expect(ActionCreator.setAllPizzas(pizzas)).toEqual({
      type: ActionType.SET_ALL_PIZZAS,
      payload: pizzas
    });
  });

  it(`setFavorites returns correct type and payload`, () => {
    const pizzaIds = ['pizza-1', 'pizza-2', 'pizza-3'];

    expect(ActionCreator.setFavorites(pizzaIds)).toEqual({
      type: ActionType.SET_FAVORITES,
      payload: pizzaIds
    });
  });

  it(`setCart returns correct type and payload`, () => {
    const pizzas = [{id: 'pizza-1'}, {id: 'pizza-2'}, {id: 'pizza-3'}];

    expect(ActionCreator.setCart(pizzas)).toEqual({
      type: ActionType.SET_CART,
      payload: pizzas
    })
  });

  it(`setCurrentPizza returns correct type and payload`, () => {
    const pizza = {id: 'pizza-3'};

    expect(ActionCreator.setCurrentPizza(pizza)).toEqual({
      type: ActionType.SET_CURRENT_PIZZA,
      payload: pizza
    })
  });

  it(`setPizzaReviews returns correct type and payload`, () => {
    const reviews = [{id: 'review-1'}, {id: 'review-3'}];

    expect(ActionCreator.setPizzaReviews(reviews)).toEqual({
      type: ActionType.SET_PIZZA_REVIEWS,
      payload: reviews
    })
  });
});

describe(`Operations`, () => {
  let apiMock;
  beforeEach(() => {
    apiMock = new MockApi(pizzasTestData.pizzas, reviewsTestData.reviews, locationsTestData.locations);
  });

  it(`loadAllPizzas should make a correct API call`, async () => {
    const dispatch = jest.fn();
    const getState = () => {};
    const loadAllPizzas = Operation.loadAllPizzas();
    const pizzasInClientFormat = pizzasTestData.pizzas.map(pizza => createPizza(pizza));

    expect.assertions(2);
    await loadAllPizzas(dispatch, getState, apiMock);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setAllPizzas(pizzasInClientFormat)
    );
  });

  it(`loadFavorites should make a correct API call`, async () => {
    const dispatch = jest.fn();
    const getState = () => {};
    const loadFavorites = Operation.loadFavorites();
    const favorites = [];

    expect.assertions(2);
    await loadFavorites(dispatch, getState, apiMock);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setFavorites(favorites)
    );
  });

  it(`changeFavorites should make a correct API call on adding a pizza to favorites`, async () => {
    const id1 = 'pizza-1';
    const id2 = 'pizza-2';
    const id3 = 'pizza-3';
    apiMock.addToFavorites(id1);
    apiMock.addToFavorites(id2);
    apiMock.addToFavorites(id3);

    const dispatch = jest.fn();
    const getState = () =>({
      [NameSpace.PIZZAS]: {
        favoritePizzas: [id1, id2, id3]
      }
    });
    const pizzaId = 'pizza-5';
    const changeFavorites = Operation.changeFavorites(pizzaId);

    expect.assertions(2);
    await changeFavorites(dispatch, getState, apiMock);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setFavorites([id1, id2, id3, pizzaId])
    );
  });

  it(`changeFavorites should make a correct API call on removing a pizza from favorites`, async () => {
    const id1 = 'pizza-1';
    const id2 = 'pizza-2';
    const pizzaId = 'pizza-5';
    const id3 = 'pizza-3';
    apiMock.addToFavorites(id1);
    apiMock.addToFavorites(id2);
    apiMock.addToFavorites(pizzaId);
    apiMock.addToFavorites(id3);

    const dispatch = jest.fn();
    const getState = () =>({
      [NameSpace.PIZZAS]: {
        favoritePizzas: [id1, id2, pizzaId, id3]
      }
    });
    const changeFavorites = Operation.changeFavorites(pizzaId);

    expect.assertions(2);
    await changeFavorites(dispatch, getState, apiMock);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setFavorites([id1, id2, id3])
    );
  });

  it(`addToCart should make a correct api call on adding pizza to the cart`, async () => {
    const pizzaId = 'pizza-1';
    const crust = 'thick';
    const size = '13';
    const quantity = 1;
    const pricePerOne = 11;

    const cartItem = {
      pizzaId, crust, size, quantity, pricePerOne
    };

    const dispatch = jest.fn();
    const getState = () => {};
    const addToCart = Operation.addToCart(cartItem);

    expect.assertions(2);
    await addToCart(dispatch, getState, apiMock);
    await addToCart(dispatch, getState, apiMock);
    expect(dispatch).toHaveBeenCalledTimes(2);

    const expectedCartItem = Object.assign({}, cartItem, {id: expect.any(String), quantity: 2})
    expect(dispatch).toHaveBeenNthCalledWith(2,
      ActionCreator.setCart([expectedCartItem])
    );
  });

  it(`removeFromCart should make a correct api call on removing pizza from the cart`, async () => {
    const pizzaId = 'pizza-1';
    const crust = 'thick';
    const size = '13';
    const quantity = 1;
    const pricePerOne = 11;

    const cartItem = {
      pizzaId, crust, size, quantity, pricePerOne
    };

    const dispatch = jest.fn();
    const getState = () => {};
    const addToCart = Operation.addToCart(cartItem);

    expect.assertions(3);
    await addToCart(dispatch, getState, apiMock);
    expect(dispatch).toHaveBeenCalledTimes(1);
    const expectedCartItem = Object.assign({}, cartItem, {id: expect.any(String)})
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setCart([expectedCartItem])
    );

    const cart = apiMock.getTestCartItems();
    const addedPizzaCartId = cart[0].id;
    const removeFromCart = Operation.removeFromCart(addedPizzaCartId);
    await removeFromCart(dispatch, getState, apiMock);
    expect(dispatch).toHaveBeenNthCalledWith(2,
      ActionCreator.setCart([])
    );
  });

  it(`increaseItemQuantityInCart should make a correct api call on increasing item quantity in the cart`, async () => {
    const pizzaId = 'pizza-1';
    const crust = 'thick';
    const size = '13';
    const quantity = 1;
    const pricePerOne = 11;

    const cartItem = {
      pizzaId, crust, size, quantity, pricePerOne
    };

    const dispatch = jest.fn();
    const getState = () => {};
    const addToCart = Operation.addToCart(cartItem);

    expect.assertions(2);
    await addToCart(dispatch, getState, apiMock);
    const expectedCartItem = Object.assign({}, cartItem, {id: expect.any(String)})
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setCart([expectedCartItem])
    );
    const cart = apiMock.getTestCartItems();
    const addedPizzaCartId = cart[0].id;

    const increaseItemQuantityInCart = Operation.increaseItemQuantityInCart(addedPizzaCartId);
    await increaseItemQuantityInCart(dispatch, getState, apiMock);
    const cartItemWithIncreasedQuantity = Object.assign({}, expectedCartItem, {quantity: 2});
    expect(dispatch).toHaveBeenNthCalledWith(2,
      ActionCreator.setCart([cartItemWithIncreasedQuantity])
    );
  });

  it(`decreaseItemQuantityInCart should make a correct api call on decreasing item quantity in the cart`, async () => {
    const pizzaId = 'pizza-1';
    const crust = 'thick';
    const size = '13';
    const quantity = 4;
    const pricePerOne = 11;

    const cartItem = {
      pizzaId, crust, size, quantity, pricePerOne
    };

    const dispatch = jest.fn();
    const getState = () => {};
    const addToCart = Operation.addToCart(cartItem);

    expect.assertions(2);
    await addToCart(dispatch, getState, apiMock);
    const expectedCartItem = Object.assign({}, cartItem, {id: expect.any(String)})
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setCart([expectedCartItem])
    );
    const cart = apiMock.getTestCartItems();
    const addedPizzaCartId = cart[0].id;

    const decreaseItemQuantityInCart = Operation.decreaseItemQuantityInCart(addedPizzaCartId);
    await decreaseItemQuantityInCart(dispatch, getState, apiMock);
    const cartItemWithIncreasedQuantity = Object.assign({}, expectedCartItem, {quantity: 3});
    expect(dispatch).toHaveBeenNthCalledWith(2,
      ActionCreator.setCart([cartItemWithIncreasedQuantity])
    );
  });

  it(`loadPizzaReviews should make a correct api call on loading pizza reviews`, async () => {
    const pizzaId = 'pizza-1';
    const dispatch = jest.fn();
    const getState = () => {};
    const loadPizzaReviews = Operation.loadPizzaReviews(pizzaId);

    const reviewsInClientFormat = reviewsTestData.reviews.map(review => createReview(review));
    const pizzaIdReviews = reviewsInClientFormat.filter(review => review.pizzaId === pizzaId);

    expect.assertions(2);
    await loadPizzaReviews(dispatch, getState, apiMock);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setPizzaReviews(pizzaIdReviews)
    );
  });

  it(`addPizzaReview should make a correct api call on adding new pizza review`, async () => {
    const newReview = {
      user: {
        id: 'user-1234',
        name: "Eva",
        avatar: "img/avatar-1235.jpg"
      },
      rating: 5.0,
      date: "02-06-2015 11:00:23",
      pizzaId: "pizza-1",
      text: "review #12345"
    };
    const initialPizzaIdReviewsNumber = apiMock.getTestPizzaReviews(newReview.pizzaId).length;

    const dispatch = jest.fn();
    const getState = () => {};
    const addPizzaReview = Operation.addPizzaReview(newReview);

    expect.assertions(3);
    await addPizzaReview(dispatch, getState, apiMock);

    const pizzaIdReviews = apiMock.getTestPizzaReviews(newReview.pizzaId);
    const pizzaIdFormattedReviews = pizzaIdReviews.map(review => createReview(review));
    expect(pizzaIdReviews.length).toEqual(initialPizzaIdReviewsNumber + 1);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setPizzaReviews(pizzaIdFormattedReviews)
    );
  })
});

describe(`Reducer`, () => {
  it(`without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe(`action setAllPizzas`, () => {
    it(`sets new pizzas`, () => {
      const newPizzas = [{id: 'pizza-1'}, {id: 'pizza-5'}];
      const newState = reducer(undefined, ActionCreator.setAllPizzas(newPizzas));
      const expectedState = Object.assign({}, initialState, {pizzas: newPizzas});
      expect(newState).toEqual(expectedState);
    });
  });

  describe(`action setFavorites`, () => {
    it(`sets favorite pizzas`, () => {
      const newFavorites = ['pizza-1', 'pizza-2', 'pizza-10'];
      const newState = reducer(undefined, ActionCreator.setFavorites(newFavorites));
      const expectedState = Object.assign({}, initialState, {favoritePizzas: newFavorites});
      expect(newState).toEqual(expectedState);
    });
  });

   describe(`action setCart`, () => {
    it(`sets pizzas in the cart`, () => {
      const newCart = [{id: 'pizza-1'}, {id: 'pizza-2'}];
      const newState = reducer(undefined, ActionCreator.setCart(newCart));
      const expectedState = Object.assign({}, initialState, {pizzasInCart: newCart});
      expect(newState).toEqual(expectedState);
    });
  });

  describe(`action setCurrentPizza`, () => {
    it(`sets current pizza`, () => {
      const newPizza = [{id: 'pizza-1'}, {id: 'pizza-2'}];
      const newState = reducer(undefined, ActionCreator.setCurrentPizza(newPizza));
      const expectedState = Object.assign({}, initialState, {currentPizza: newPizza});
      expect(newState).toEqual(expectedState);
    });
  });

  describe(`action setPizzaReviews`, () => {
    it(`sets current pizza reviews`, () => {
      const newReviews = [{id: 'review-1'}, {id: 'review-2'}];
      const newState = reducer(undefined, ActionCreator.setPizzaReviews(newReviews));
      const expectedState = Object.assign({}, initialState, {pizzaReviews: newReviews});
      expect(newState).toEqual(expectedState);
    });
  });
});
