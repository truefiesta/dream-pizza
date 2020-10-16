import React from "react";
import Card from "../card/card.jsx";
import "./cards-list.css";

const CardsList = () => {
  return (
    <ul className="cards-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
};

export default CardsList;
