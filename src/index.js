import React from "react";
import ReactDOM from "react-dom";

import MockApi from "./api/mock/mock.js";
import pizzasData from "./api/mock/mock-data/pizzas.json";
import reviewsData from "./api/mock/mock-data/reviews.json";
import { Operation as PizzasOperation } from "./reducer/pizzas/pizzas.js";

import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reducer from "./reducer/reducer.js";
import thunkMiddleware from "redux-thunk";

import App from "./components/app/app.jsx";

// eslint-disable-next-line no-unused-vars
import index from "./styles/index.css";

const api = new MockApi(pizzasData.pizzas, reviewsData.reviews);

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument(api))
);

const store = createStore(reducer, composedEnhancer);
store.dispatch(PizzasOperation.loadAllPizzas());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
