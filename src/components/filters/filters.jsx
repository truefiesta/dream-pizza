import React from "react";
import PropTypes from "prop-types";
import FilterRadio from "../filter-radio/filter-radio.jsx";
import FilterCheckbox from "../filter-checkbox/filter-checkbox.jsx";
import FilterCheckboxTags from "../filter-checkbox-tags/filter-checkbox-tags.jsx";
import Slider from "../slider/slider.jsx";
import "./filters.css";

const FILTER_TYPE_TITLE = `pizza type`;
const FILTER_BY_TYPE_SUFFIX = `type`;
const FILTER_INGREDIENTS_TITLE = `ingredients`;
const FILTER_BY_INGREDIENTS_SUFFIX = `pizza`;

const Filters = ({
    typeFilterOptions, ingredientFilterOptions, tagFilterOptions,
    currentType, currentIngredients, currentTags, currentPrice, minPrice, maxPrice,
    onTypeFilterChange, onIngredientFilterChange, onTagFilterChange, onPriceChange,
    onReset
  }) => {

  return (
    <form className="filters">
      <FilterRadio
        title={FILTER_TYPE_TITLE}
        suffix={FILTER_BY_TYPE_SUFFIX}
        options={typeFilterOptions}
        checkedOption={currentType}
        onOptionChange={onTypeFilterChange}
      />
      <FilterCheckbox
        title={FILTER_INGREDIENTS_TITLE}
        suffix={FILTER_BY_INGREDIENTS_SUFFIX}
        options={ingredientFilterOptions}
        checkedOptions={currentIngredients}
        onOptionsChange={onIngredientFilterChange}
      />
      <Slider
        initialValue={currentPrice}
        minValue={minPrice}
        maxValue={maxPrice}
        onChange={onPriceChange}
      />
      <FilterCheckboxTags
        checkedOptions={currentTags}
        options={tagFilterOptions}
        onOptionChange={onTagFilterChange}
      />
      <button
        onClick={onReset}
        className="dark-button filters-reset"
        type="reset"
      >
        Reset filters
      </button>
    </form>
  );
};

Filters.propTypes = {
  typeFilterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredientFilterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  tagFilterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentType: PropTypes.string.isRequired,
  currentIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  onTypeFilterChange: PropTypes.func.isRequired,
  onIngredientFilterChange: PropTypes.func.isRequired,
  onTagFilterChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default Filters;
