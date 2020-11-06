import React, { useState } from "react";
import FilterRadio from "../filter-radio/filter-radio.jsx";
import FilterCheckbox from "../filter-checkbox/filter-checkbox.jsx";
import Slider from "../slider/slider.jsx";

import "./filters.css";

const FILTER_TYPE_TITLE = `pizza type`;
const FILTER_BY_TYPE_SUFFIX = `type`;
const FilterByType = {
  ANY_TYPE: `any`,
  TRADITIONAL: `traditional`,
  VEGETARIAN: `vegetarian`
};
const types = Object.values(FilterByType);

const FILTER_INGREDIENTS_TITLE = `ingredients`;
const FILTER_BY_INGREDIENTS_SUFFIX = `pizza`;
const FilterByIngredients = {
  SEAFOOD: `seafood`,
  CHICKEN: `chicken`,
  MEAT: `meat`
};
const ingredientOptions = Object.values(FilterByIngredients);

const Filters = () => {
  const [type, setType] = useState(FilterByType.ANY_TYPE);
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(25);

  return (
    <form className="filters" method="GET" action="">
      <FilterRadio
        title={FILTER_TYPE_TITLE}
        suffix={FILTER_BY_TYPE_SUFFIX}
        options={types}
        checkedOption={type}
        onOptionChange={(type) => setType(type)}
      />
      <FilterCheckbox
        title={FILTER_INGREDIENTS_TITLE}
        suffix={FILTER_BY_INGREDIENTS_SUFFIX}
        options={ingredientOptions}
        checkedOptions={ingredients}
        onOptionsChange={
          (value) => {
            let newIngredients = ingredients.slice();
            const valueIndex = ingredients.indexOf(value);
            if (valueIndex !== -1) {
              newIngredients = [...ingredients.slice(0, valueIndex), ...ingredients.slice(valueIndex + 1)];
            } else {
              newIngredients.push(value);
            }
            setIngredients(newIngredients);
          }
        }
      />
      <Slider
        initialValue={price}
        maxValue={25}
        onChange={(price) => setPrice(price)}
      />
      <section className="filters-group">
        <h3 className="filters-group-title">Tags</h3>
        <ul className="filter-tags-list">
          <li className="filter-tags-item">
            <input
              className="visually-hidden filter-tag-checkbox"
              type="checkbox"
              name="tag-new"
              id="tag-new"
            />
            <label htmlFor="tag-new">New</label>
          </li>
          <li className="filter-tags-item">
            <input
              className="visually-hidden filter-tag-checkbox"
              type="checkbox"
              name="tag-top"
              id="tag-top"
            />
            <label htmlFor="tag-top">Top</label>
          </li>
          <li className="filter-tags-item">
            <input
              className="visually-hidden filter-tag-checkbox"
              type="checkbox"
              name="tag-discount"
              id="tag-discount"
              checked
            />
            <label htmlFor="tag-discount">Discount</label>
          </li>
        </ul>
      </section>
      <button className="dark-button filters-reset" type="reset">
        Reset filters
      </button>
    </form>
  );
};

export default Filters;
