import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./card-options-row.css";

const CardOptionsRow = ({cardId, title, checkedOption, options, onOptionChange}) => {
  const optionsMarkup = options.map(option => {
    const id = option + cardId;
    return (
      <Fragment key={id}>
        <input
          id={id}
          className="visually-hidden card-input"
          type="radio"
          name={`${title}${cardId}`}
          value={option}
          checked={option === checkedOption}
          onChange={(evt) => {onOptionChange(evt.target.value)}}
        />
        <label className="card-label" htmlFor={id}>
          {option}
        </label>
      </Fragment>
    )
  })

  return (
    <div className="card-options-row">
      <p className="card-options-title">{title}</p>
      <p className="card-options">
        {optionsMarkup}
      </p>
    </div>
  );
};

CardOptionsRow.propTypes = {
  cardId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checkedOption: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOptionChange: PropTypes.func.isRequired
};

export default CardOptionsRow;
