
import MockApi from "../../api/mock/mock.js";
import pizzasTestData from "../../api/test-data/pizzas.test.json";
import reviewsTestData from "../../api/test-data/reviews.test.json";

import { createPizza } from "../../adapters/adapters.js";
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

  it(`changeFavorites returns correct type and payload`, () => {
    const pizzaId = 'pizza-6';

    expect(ActionCreator.changeFavorites(pizzaId)).toEqual({
      type: ActionType.CHANGE_FAVORITES,
      payload: pizzaId
    });
  });
});

describe(`Operations`, () => {
  let apiMock;
  beforeEach(() => {
    apiMock = new MockApi(pizzasTestData.pizzas, reviewsTestData.reviews);
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
});