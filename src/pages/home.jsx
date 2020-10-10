import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Sort from "../components/sort/sort.jsx";
import CardsList from "../components/cards-list/cards-list.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <h1 className="visually-hidden">Welcome to Dream Pizza</h1>
          {/* TABS ?  */}
          <Sort />
          <h2 className="section-title">What’s new on our Menu</h2>
          <CardsList />
          {/* TABS ?  */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
