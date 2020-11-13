import MockApi from "../../api/mock/mock.js";
import pizzasTestData from "../../api/test-data/pizzas.test.json";
import reviewsTestData from "../../api/test-data/reviews.test.json";
import locationsTestData from "../../api/test-data/locations.test.json";

import { reducer, ActionCreator, ActionType, Operation, initialState } from "./locations.js";

describe(`Action creators`, () => {
  it(`setLocations returns correct type and payload`, () => {
    const locations = [{id: "restaurant-1"}, {id: "restaurant-2"}];

    expect(ActionCreator.setLocations(locations)).toEqual({
      type: ActionType.SET_LOCATIONS,
      payload: locations
    });
  });
});

describe(`Operations`, () => {
  let apiMock;
  beforeEach(() => {
    apiMock = new MockApi(pizzasTestData.pizzas, reviewsTestData.reviews, locationsTestData.locations);
  });

  it(`loadLocations should make a correct API call`, async () => {
    const dispatch = jest.fn();
    const getState = () => {};
    const loadLocations = Operation.loadLocations();
    const locations = locationsTestData.locations;

    expect.assertions(2);
    await loadLocations(dispatch, getState, apiMock);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1,
      ActionCreator.setLocations(locations)
    );
  });
});

describe(`Redicer`, () => {
  it(`without additinal parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe(`action setLocations`, () => {
    it(`sets locations`, () => {
      const newLocations = [{id: "restaurant-2"}];
      const newState = reducer(undefined, ActionCreator.setLocations(newLocations));
      const expectedState = Object.assign({}, initialState, {locations: newLocations});
      expect(newState).toEqual(expectedState);
    })
  });
});
