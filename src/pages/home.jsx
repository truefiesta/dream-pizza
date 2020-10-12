import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Sort from "../components/sort/sort.jsx";
import CardsList from "../components/cards-list/cards-list.jsx";
import ButtonFullMenu from "../components/button-full-menu/button-full-menu.jsx";
import PrevNextControls from "../components/prev-next-controls/prev-next-controls.jsx";
import Map from "../components/map/map.jsx";
import Hero from "../components/hero/hero.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-page">
        <h1 className="visually-hidden">Welcome to Dream Pizza</h1>
        <Hero />
        <div className="wrapper menu-container">
          {/* TABS ?  */}
          <ButtonFullMenu />
          <Sort />
          <div className="cards-list-wrapper">
            <h2 className="section-title">What’s new on our Menu</h2>
            <CardsList />
          </div>

          <PrevNextControls />
          {/* TABS ?  */}
        </div>
        <Map />
      </main>
      <Footer />
    </>
  );
};

export default Home;
