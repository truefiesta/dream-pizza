import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Sort from "../components/sort/sort.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Sort />
      </main>
      <Footer />
    </>
  );
};

export default Home;
