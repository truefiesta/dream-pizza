import React from "react";
import PropTypes from "prop-types";
import "./plus-minus-buttons.css";

const PlusMinusButtons = ({currentValue, minPossibleValue, onMinusClick, onPlusClick}) => {
  return (
    <div className="plus-minus-buttons">
      <button
        onClick={() => onMinusClick()}
        type="button"
        className="minus-button"
        disabled={currentValue <= minPossibleValue}
      />
      <span className="plus-minus-counter">{currentValue}</span>
      <button
        onClick={() => onPlusClick()}
        type="button"
        className="plus-button"
      />
    </div>
  );
};

PlusMinusButtons.propTypes = {
  currentValue: PropTypes.number.isRequired,
  minPossibleValue: PropTypes.number.isRequired,
  onMinusClick: PropTypes.func.isRequired,
  onPlusClick: PropTypes.func.isRequired
}

export default PlusMinusButtons;
