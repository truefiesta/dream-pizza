import React from "react";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardsList from "../components/cards-list/cards-list.jsx";
import PrevNextControls from "../components/prev-next-controls/prev-next-controls.jsx";

const Favorites = () => {
  return (
    <main className="favorites-page">
      <div className="wrapper">
        <Breadcrumbs />
        <h1 className="main-title">Favorites</h1>
        <div className="content">
          <section className="favorites-list-section">
            <div className="favorites-top-row">
              <h2 className="section-title">From our menu</h2>
              <PrevNextControls />
            </div>
            <CardsList />
          </section>
          <section className="favorites-list-section">
            <div className="favorites-top-row">
              <h2 className="section-title">Created by me</h2>
              <PrevNextControls />
            </div>
            <CardsList />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Favorites;
