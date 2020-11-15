const initialState = {
  isAccess: false
};

const ActionType = {
  CHANGE_ACCESS: `CHANGE_ACCESS`
};

const ActionCreator = {
  changeAccess: (isAccess) => ({
    type: ActionType.CHANGE_ACCESS,
    payload: isAccess
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACCESS:
      return Object.assign({}, state, {
        isAccess: action.payload
      });
  }

  return state;
};

export { reducer, ActionType, ActionCreator, initialState};
