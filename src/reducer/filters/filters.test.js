import { reducer, ActionCreator, ActionType, initialState } from "./filters.js";
import { Tag } from "../../const.js";

describe(`Action creators`, () => {
  it(`changeTag returns correct type and payload`, () => {
    const tag = Tag.NEW;
    expect(ActionCreator.changeTag(tag)).toEqual({
      type: ActionType.CHANGE_TAG,
      payload: tag
    });
  });
});

describe(`Reducer`, () => {
  it(`without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe(`action changeTag`, () => {
    it(`sets new tag`, () => {
      const newTag = Tag.TOP;
      const newState = reducer(undefined, ActionCreator.changeTag(newTag));
      const expectedState = Object.assign({}, initialState, {currentTag: newTag});
      expect(newState).toEqual(expectedState);
    });
  });
});
