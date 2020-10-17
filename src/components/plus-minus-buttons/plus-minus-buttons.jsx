import React from "react";
import "./plus-minus-buttons.css";

const PlusMinusButtons = () => {
  return (
    <div className="plus-minus-buttons">
      <button type="button" className="minus-button" disabled></button>
      <span className="plus-minus-counter">0</span>
      <button type="button" className="plus-button"></button>
    </div>
  );
};

export default PlusMinusButtons;
