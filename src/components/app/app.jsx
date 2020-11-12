import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { selectPizzas } from "../../reducer/pizzas/selectors";
import { AppRoute } from "../../const.js";
import "./app.css";

import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Home from "../../pages/home.jsx";
import Menu from "../../pages/menu.jsx";
import Pizza from "../../pages/pizza.jsx";
import Favorites from "../../pages/favorites.jsx";
import Cart from "../../pages/cart.jsx";
import PageNotFound from "../../pages/page-not-found.jsx";

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
          <Route exact path={AppRoute.HOME} component={Home} />
          <Route path={AppRoute.MENU} component={Menu} />
          <Route path={AppRoute.PIZZA} component={Pizza} />
          <Route path={AppRoute.FAVORITES} component={Favorites} />
          <Route path={AppRoute.CART} component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      <Footer />
    </>
  );
};

export default App;
