import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "../../utils";

const FilterCheckbox = ({title, suffix, options, checkedOptions, onOptionsChange}) => {
  const optionsMarkup = options.map(option => {
    const id = `${option}-${suffix}`;

    return (
      <li key={option} className="filter-option filter-checkbox">
        <input
          className="visually-hidden filter-input-checkbox"
          type="checkbox"
          name={id}
          id={id}
          value={option}
          checked={checkedOptions.includes(option)}
          onChange={(evt) => onOptionsChange(evt.target.value)}
        />
        <label htmlFor={id}>{capitalize(option)}</label>
      </li>
    )
  })

  return (
    <section className="filters-group">
      <h3 className="filters-group-title">{capitalize(title)}</h3>
      <ul>
        {optionsMarkup}
      </ul>
    </section>
  );
};

FilterCheckbox.propTypes = {
  title: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  checkedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOptionsChange: PropTypes.func.isRequired
}

export default FilterCheckbox;
