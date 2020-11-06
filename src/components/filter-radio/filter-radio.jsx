import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "../../utils";

const FilterRadio = ({title, suffix, options, checkedOption, onOptionChange}) => {
  const optionsMarkup = options.map(option => {
    const id = `${option}-${suffix}`;

    return (
      <li key={id} className="filter-option filter-radio">
        <input
          className="visually-hidden filter-input-radio"
          type="radio"
          name={`pizza-${suffix}`}
          value={option}
          id={id}
          checked={checkedOption === option}
          onChange={(evt) => {onOptionChange(evt.target.value)}}
        />
        <label htmlFor={id}>{capitalize(option)}</label>
      </li>
    );
  });

  return (
    <section className="filters-group">
      <h3 className="filters-group-title">{capitalize(title)}</h3>
      <ul>
        {optionsMarkup}
      </ul>
    </section>
  );
};

FilterRadio.propTypes = {
  title: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  checkedOption: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired
}

export default FilterRadio;
