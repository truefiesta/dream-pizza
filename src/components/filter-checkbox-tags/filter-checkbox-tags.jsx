import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "../../utils.js";

const FilterCheckboxTags = ({checkedOptions, options, onOptionChange}) => {
  const tagsMarkup = options.map(option => {
    return (
      <li key={option} className="filter-tags-item">
        <input
          className="visually-hidden filter-tag-checkbox"
          type="checkbox"
          name={`tag-${option}`}
          id={`tag-${option}`}
          value={option}
          checked={checkedOptions.includes(option)}
          onChange={(evt) => onOptionChange(evt.target.value)}
        />
        <label htmlFor={`tag-${option}`}>{capitalize(option)}</label>
      </li>
    );
  });

  return (
    <section className="filters-group">
      <h3 className="filters-group-title">Tags</h3>
      <ul className="filter-tags-list">
        {tagsMarkup}
      </ul>
    </section>
  );
};

FilterCheckboxTags.propTypes = {
  checkedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOptionChange: PropTypes.func.isRequired
}

export default FilterCheckboxTags;
