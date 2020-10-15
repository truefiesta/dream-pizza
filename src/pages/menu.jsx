import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Filters from "../components/filters/filters.jsx";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardsList from "../components/cards-list/cards-list.jsx";
import PrevNextControls from "../components/prev-next-controls/prev-next-controls.jsx";

const Menu = () => {
  return (
    <>
      <Header />
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
              <CardsList />
              <PrevNextControls />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
