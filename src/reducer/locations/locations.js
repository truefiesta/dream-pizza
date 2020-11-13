const initialState = {
  locations: []
};

const ActionType = {
  SET_LOCATIONS: `SET_LOCATIONS`
};

const ActionCreator = {
  setLocations: (locations) => ({
    type: ActionType.SET_LOCATIONS,
    payload: locations
  })
};

const Operation = {
  loadLocations: () => (dispatch, getState, api) => {
    return api.getLocations()
      .then(response => dispatch(ActionCreator.setLocations(response)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOCATIONS:
      return Object.assign({}, state, {
        locations: action.payload
      })
  }

  return state;
};

export { reducer, ActionType, ActionCreator, Operation, initialState};
