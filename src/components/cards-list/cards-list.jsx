import React from "react";
import Card from "../card/card.jsx";
import "./cards-list.css";

const CardsList = () => {
  return (
    <ul className="cards-list">
      <Card newCard={true} />
      <Card newCard={false} />
      <Card newCard={false} />
      <Card newCard={false} />
      <Card newCard={false} />
    </ul>
  );
};

export default CardsList;
