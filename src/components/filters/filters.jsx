import React from "react";

import "./filters.css";

const Filters = () => {
  return (
    <form className="filters" method="GET" action="">
      <section className="filters-group">
        <h3 className="filters-group-title">Pizza type</h3>
        <ul>
          <li className="filter-option filter-radio">
            <input
              className="visually-hidden filter-input-radio"
              type="radio"
              name="pizza-type"
              value="any-type"
              id="any-type"
              checked
            />
            <label htmlFor="any-type">Any type</label>
          </li>
          <li className="filter-option filter-radio">
            <input
              className="visually-hidden filter-input-radio"
              type="radio"
              name="pizza-type"
              value="traditional-type"
              id="traditional-type"
            />
            <label htmlFor="traditional-type">Traditional</label>
          </li>
          <li className="filter-option filter-radio">
            <input
              className="visually-hidden filter-input-radio"
              type="radio"
              name="pizza-type"
              value="vegetarian-type"
              id="vegetarian-type"
            />
            <label htmlFor="vegetarian-type">Vegetarian</label>
          </li>
        </ul>
      </section>
      <section className="filters-group">
        <h3 className="filters-group-title">Ingredients</h3>
        <ul>
          <li className="filter-option filter-checkbox">
            <input
              className="visually-hidden filter-input-checkbox"
              type="checkbox"
              name="seafood-pizza"
              id="seafood-pizza"
              checked
            />
            <label htmlFor="seafood-pizza">Seafood</label>
          </li>
          <li className="filter-option filter-checkbox">
            <input
              className="visually-hidden filter-input-checkbox"
              type="checkbox"
              name="chicken-pizza"
              id="chicken-pizza"
            />
            <label htmlFor="chicken-pizza">Chicken</label>
          </li>
          <li className="filter-option filter-checkbox">
            <input
              className="visually-hidden filter-input-checkbox"
              type="checkbox"
              name="meat-pizza"
              id="meat-pizza"
            />
            <label htmlFor="meat-pizza">Meat</label>
          </li>
        </ul>
      </section>
      <section className="filters-group">
        <h3 className="filters-group-title">Price</h3>
      </section>
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
