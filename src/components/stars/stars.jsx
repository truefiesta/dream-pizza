import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Stars = ({options, selectedOption, onSelectedOptionChange, isBlocked}) => {
  const reversedOptions = options.slice().reverse();
  return (
    <div className="review-form-rating">
      {reversedOptions.map((option, index, options) => {
        const id = options.length - index;

        return (
        <Fragment key={option}>
          <input
            id={`star-${id}`}
            name="review-rating"
            type="radio"
            className="review-form-rating-input visually-hidden"
            value={id}
            checked={selectedOption === id}
            onChange={(evt) => onSelectedOptionChange(parseInt(evt.target.value, 10))}
            disabled={isBlocked}
          />
          <label
            title={option}
            htmlFor={`star-${id}`}
            className="review-form-rating-label"
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 0l2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0z" />
            </svg>
          </label>
        </Fragment>)
      })}
    </div>
  );
};

Stars.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.number.isRequired,
  onSelectedOptionChange: PropTypes.func.isRequired,
  isBlocked: PropTypes.bool.isRequired
}

export default Stars;
