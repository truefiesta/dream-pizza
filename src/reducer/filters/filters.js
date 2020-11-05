import { Tag } from "../../components/tags-filter/tags-filter.jsx";

const initialState = {
  currentTag: Tag.NEW
};

const ActionType = {
  CHANGE_TAG: `CHANGE_TAG`
};

const ActionCreator = {
  changeTag: (tag) => ({
    type: ActionType.CHANGE_TAG,
    payload: tag
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TAG:
      return Object.assign({}, state, {
        currentTag: action.payload,
      });
  }

  return state;
};

export { reducer, ActionType, ActionCreator, initialState };
