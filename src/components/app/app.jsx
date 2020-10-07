import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";

import Home from "../../pages/home.jsx";
import Menu from "../../pages/menu.jsx";
import Pizza from "../../pages/pizza.jsx";
import Favorites from "../../pages/favorites.jsx";
import Cart from "../../pages/cart.jsx";
import PizzaCreator from "../../pages/pizza-creator.jsx";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/pizza">
        <Pizza />
      </Route>
      <Route path="/pizza-creator">
        <PizzaCreator />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default App;
