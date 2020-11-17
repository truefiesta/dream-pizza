import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectPizzas, selectFavorites } from "../reducer/pizzas/selectors.js";
import { getItemsForPageNumber } from "../utils.js";
import { AppRoute, AppRouteTitle } from "../const.js";

import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardsList from "../components/cards-list/cards-list.jsx";
import PrevNextControls from "../components/prev-next-controls/prev-next-controls.jsx";

const MAX_FAVORITES_PER_PAGE = 3;

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const pizzas = useSelector(selectPizzas);
  const [page, setPage] = useState(1);
  let favoritePizzas = [];
  const favoritesNumber = favorites.length;
  const noFavorites = favoritesNumber === 0;
  if (!noFavorites) {
    favoritePizzas = favorites.map(favoriteId => pizzas.find(pizza => pizza.id === favoriteId));
  }

  let favoritesToShow = getItemsForPageNumber(page, MAX_FAVORITES_PER_PAGE, favoritePizzas);

  const breadcrumbItems = [
    {
      title: AppRouteTitle[AppRoute.FAVORITES],
      url: AppRoute.FAVORITES,
    }
  ];

  if (favoritePizzas.length > 0 && favoritePizzas.length <= MAX_FAVORITES_PER_PAGE && page !== 1) {
    setPage(1);
  }

  return (
    <main className="favorites-page">
      <div className="wrapper">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="main-title">Favorites</h1>
        <div className="content">
          <section className="favorites-list-section">
            <div className="favorites-top-row">
              <h2 className="section-title">{noFavorites ? `You don't have any favorites yet`: `From our menu`}</h2>
              { favoritePizzas.length > MAX_FAVORITES_PER_PAGE &&
                <PrevNextControls
                  currentPage={page}
                  itemsNumber={favoritesNumber}
                  maxItemsPerPage={MAX_FAVORITES_PER_PAGE}
                  onPrevClick={(page) => {setPage(page)}}
                  onNextClick={(page) => {setPage(page)}}
                />
              }
            </div>
            <CardsList pizzas={favoritesToShow} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Favorites;
