import React from "react";
import "./sort.css";

const Sort = () => {
  return (
    <>
      <ul className="sort-list">
        <li className="sort-list-item active-item">
          <button className="button sort-list-button" type="button">
            New Pizzas
          </button>
        </li>
        <li className="sort-list-item">
          <button className="button sort-list-button" type="button">
            Top Rated
          </button>
        </li>
        <li className="sort-list-item">
          <button className="button sort-list-button" type="button">
            Discounts
          </button>
        </li>
      </ul>
    </>
  );
};

export default Sort;
