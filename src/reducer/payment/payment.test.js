import { reducer, ActionCreator, ActionType, initialState } from "./payment.js";

describe(`Action creators`, () => {
  it(`changeAccess returns correct type and payload`, () => {
    const isAccess = true;
    expect(ActionCreator.changeAccess(isAccess)).toEqual({
      type: ActionType.CHANGE_ACCESS,
      payload: isAccess
    });
  });
});

describe(`Reducer`, () => {
  it(`without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe(`action changeAccess`, () => {
    it(`sets isAccess`, () => {
      const isAccess = false;
      const newState = reducer(undefined, ActionCreator.changeAccess(isAccess));
      const expectedState = Object.assign({}, initialState, {isAccess: isAccess});
      expect(newState).toEqual(expectedState);
    });
  });
});
