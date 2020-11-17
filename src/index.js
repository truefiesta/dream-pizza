import React from "react";
import ReactDOM from "react-dom";

import MockApi from "./api/mock/mock.js";
import pizzasData from "./api/mock/mock-data/pizzas.json";
import reviewsData from "./api/mock/mock-data/reviews.json";
import locationsData from "./api/mock/mock-data/locations.json";
import { Operation as PizzasOperation } from "./reducer/pizzas/pizzas.js";
import { Operation as LocationsOperation } from "./reducer/locations/locations.js";

import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import history from "./history.js";
import reducer from "./reducer/reducer.js";
import thunkMiddleware from "redux-thunk";

import App from "./components/app/app.jsx";

// eslint-disable-next-line no-unused-vars
import index from "./styles/index.css";

const storage = window.localStorage;

const api = new MockApi(storage, pizzasData.pizzas, reviewsData.reviews, locationsData.locations);

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument(api))
);

const store = createStore(reducer, composedEnhancer);
store.dispatch(PizzasOperation.loadAllPizzas());
store.dispatch(LocationsOperation.loadLocations());
store.dispatch(PizzasOperation.loadFavorites());
store.dispatch(PizzasOperation.loadCart());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
