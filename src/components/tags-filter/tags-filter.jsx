import React from "react";
import "./tags-filter.css";

const TagsFilter = () => {
  return (
    <>
      <ul className="tags-list">
        <li className="tags-list-item active-item">
          <button className="button tags-list-button" type="button">
            New Pizzas
          </button>
        </li>
        <li className="tags-list-item">
          <button className="button tags-list-button" type="button">
            Top Rated
          </button>
        </li>
        <li className="tags-list-item">
          <button className="button tags-list-button" type="button">
            Discounts
          </button>
        </li>
      </ul>
    </>
  );
};

export default TagsFilter;
