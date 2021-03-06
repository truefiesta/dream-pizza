import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";
import "./cards-list.css";

const CardsList = ({ pizzas }) => {
  const renderedPizzas = pizzas.map(pizza => {
    return <Card key={pizza.id} pizza={pizza} />
  })

  return (
    <ul className="cards-list">
      {renderedPizzas}
    </ul>
  );
};

CardsList.propTypes = {
  pizzas: PropTypes.array.isRequired
};

export default CardsList;
