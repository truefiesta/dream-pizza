import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./app.css";

import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Home from "../../pages/home.jsx";
import Menu from "../../pages/menu.jsx";
import Pizza from "../../pages/pizza.jsx";
import Favorites from "../../pages/favorites.jsx";
import Cart from "../../pages/cart.jsx";
import PizzaCreator from "../../pages/pizza-creator.jsx";
import { selectPizzas } from "../../reducer/pizzas/selectors";

const App = () => {
  const pizzas = useSelector(selectPizzas);
  if (pizzas.length === 0) {
    // TODO: add loader
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default App;
