import React from "react";
import Header from "../components/header/header.jsx";
import CardDetails from "../components/card-details/card-details.jsx";
import Footer from "../components/footer/footer.jsx";

const Pizza = () => {
  return (
    <>
      <Header />
      <main className="pizza-page">
        <div className="wrapper">
          <h1 className="visually-hidden">Pizza page</h1>
          <CardDetails />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pizza;
