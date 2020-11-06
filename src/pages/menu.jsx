import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectPizzas } from "../reducer/pizzas/selectors.js";
import { getItemsForPageNumber } from "../utils.js";

import Filters from "../components/filters/filters.jsx"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardsList from "../components/cards-list/cards-list.jsx";
import PrevNextControls from "../components/prev-next-controls/prev-next-controls.jsx";

const MAX_ITEMS_TO_SHOW_IN_MENU = 6;

const Menu = () => {
  const pizzas = useSelector(selectPizzas);
  const [page, setPage] = useState(1);
  const pizzasNumber = pizzas.length;
  let pizzasToShow = getItemsForPageNumber(page, MAX_ITEMS_TO_SHOW_IN_MENU, pizzas);

  return (
    <main className="menu-page">
      <div className="wrapper">
        <Breadcrumbs />
        <h1 className="main-title">Dream Pizza Menu</h1>
        <div className="menu-filters-container">
          <section className="filters-section">
            <h2 className="section-title visually-hidden">Filter our menu</h2>
            <Filters />
          </section>
          <section className="menu-section">
            <h2 className="visually-hidden">
              Our meals according to your current filters
            </h2>
            <CardsList
              pizzas={pizzasToShow}
            />
            <PrevNextControls
              currentPage={page}
              itemsNumber={pizzasNumber}
              maxItemsPerPage={MAX_ITEMS_TO_SHOW_IN_MENU}
              onPrevClick={(page) => {setPage(page)}}
              onNextClick={(page) => {setPage(page)}}
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Menu;
