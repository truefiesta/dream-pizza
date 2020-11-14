import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectPizzas } from "../reducer/pizzas/selectors.js";
import { getItemsForPageNumber, filterPizzas } from "../utils.js";
import { typesOptions, ingredientOptions, tagOptions, FilterByType, AppRoute, AppRouteTitle } from "../const.js";

import Filters from "../components/filters/filters.jsx"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardsList from "../components/cards-list/cards-list.jsx";
import PrevNextControls from "../components/prev-next-controls/prev-next-controls.jsx";

const MAX_ITEMS_TO_SHOW_IN_MENU = 6;

const Menu = () => {
  const pizzas = useSelector(selectPizzas);
  const maxPrices = pizzas.map(pizza => pizza.prices.thick.large);
  const minPrices = pizzas.map(pizza => {
    let initialPrice = pizza.prices.thin.small;
    let currentPrice;
    if(pizza.discountPercent > 0) {
      currentPrice = (initialPrice - (initialPrice * pizza.discountPercent / 100)).toFixed(0);
    } else {
      currentPrice = initialPrice;
    }

    return currentPrice;
  });
  const maxPrice = Math.max(...maxPrices);
  const minPrice = Math.min(...minPrices);
  const [type, setType] = useState(FilterByType.ANY_TYPE);
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(maxPrice);
  const [tags, setTags] = useState([]);

  const [page, setPage] = useState(1);

  const filteredPizzas = filterPizzas(pizzas, type, ingredients, price, tags);
  const pizzasNumber = filteredPizzas.length;

  let pizzasToShow = getItemsForPageNumber(page, MAX_ITEMS_TO_SHOW_IN_MENU, filteredPizzas);

  const resetHandle = () => {
    setType(FilterByType.ANY_TYPE);
    setIngredients([]);
    setPrice(maxPrice);
    setTags([]);
    setPage(1);
  }

  const breadcrumbItems = [
    {
      title: AppRouteTitle[AppRoute.MENU],
      url: AppRoute.MENU,
    }
  ];

  return (
    <main className="menu-page">
      <div className="wrapper">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="main-title">Dream Pizza Menu</h1>
        <div className="menu-filters-container">
          <section className="filters-section">
            <h2 className="section-title visually-hidden">Filter our menu</h2>
            <Filters
              typeFilterOptions={typesOptions}
              ingredientFilterOptions={ingredientOptions}
              tagFilterOptions={tagOptions}
              currentType={type}
              currentIngredients={ingredients}
              currentTags={tags}
              currentPrice={price}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onTypeFilterChange={(type) => {setType(type); setPage(1)}}
              onIngredientFilterChange={
                (value) => {
                  let newIngredients = ingredients.slice();
                  const valueIndex = ingredients.indexOf(value);
                  if (valueIndex !== -1) {
                    newIngredients = [...ingredients.slice(0, valueIndex), ...ingredients.slice(valueIndex + 1)];
                  } else {
                    newIngredients.push(value);
                  }
                  setIngredients(newIngredients);
                  setPage(1);
                }
              }
              onTagFilterChange={
                (value) => {
                  let newTags = tags.slice();
                  const valueIndex = tags.indexOf(value);
                  if (valueIndex !== -1) {
                    newTags = [...tags.slice(0, valueIndex), ...tags.slice(valueIndex + 1)];
                  } else {
                    newTags.push(value);
                  }
                  setTags(newTags);
                  setPage(1);
                }
              }
              onPriceChange={(price) => {setPrice(price); setPage(1)}}
              onReset={resetHandle}
            />
          </section>
          <section className="menu-section">
            <h2 className="visually-hidden">
              Our meals according to your current filters
            </h2>
            {pizzasToShow.length === 0 ?
              <p className="page-text">Sorry, no pizzas found according to your current search filters.</p> :
              <CardsList
                pizzas={pizzasToShow}
              />
            }
            {
              pizzasNumber > MAX_ITEMS_TO_SHOW_IN_MENU &&
              <PrevNextControls
                currentPage={page}
                itemsNumber={pizzasNumber}
                maxItemsPerPage={MAX_ITEMS_TO_SHOW_IN_MENU}
                onPrevClick={(page) => {setPage(page)}}
                onNextClick={(page) => {setPage(page)}}
              />
            }
          </section>
        </div>
      </div>
    </main>
  );
};

export default Menu;
