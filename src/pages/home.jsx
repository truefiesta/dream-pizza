import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentTag, selectPizzasWithTag } from "../reducer/filters/selectors.js";
import { ActionCreator as FiltersActionCreator } from "../reducer/filters/filters.js";
import { getItemsForPageNumber } from "../utils.js";

import TagsFilter from "../components/tags-filter/tags-filter.jsx";
import CardsList from "../components/cards-list/cards-list.jsx";
import ButtonFullMenu from "../components/button-full-menu/button-full-menu.jsx";
import PrevNextControls from "../components/prev-next-controls/prev-next-controls.jsx";
import Map from "../components/map/map.jsx";
import Hero from "../components/hero/hero.jsx";

const MAX_ITEMS_TO_SHOW = 4;

const Home = () => {
  const currentTag = useSelector(selectCurrentTag);
  const pizzas = useSelector(selectPizzasWithTag);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const pizzasNumber = pizzas.length;
  let pizzasToShow = getItemsForPageNumber(page, MAX_ITEMS_TO_SHOW, pizzas);

  return (
    <main className="home-page">
      <h1 className="visually-hidden">Welcome to Dream Pizza</h1>
      <Hero />
      <div className="wrapper menu-container">
        <ButtonFullMenu />
        <TagsFilter
          currentTag={currentTag}
          onTagChange={(tag) => {dispatch(FiltersActionCreator.changeTag(tag))}}
        />
        <div className="cards-list-wrapper">
          <h2 className="section-title">{currentTag} on our Menu</h2>
          <CardsList pizzas={pizzasToShow} />
        </div>
        <PrevNextControls
          currentPage={page}
          itemsNumber={pizzasNumber}
          maxItemsPerPage={MAX_ITEMS_TO_SHOW}
          onPrevClick={(page) => {setPage(page)}}
          onNextClick={(page) => {setPage(page)}}
        />
      </div>
      <Map />
    </main>
  );
};

export default Home;
