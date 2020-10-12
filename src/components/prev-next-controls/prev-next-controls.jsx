import React from "react";
import "./prev-next-controls.css";

const PrevNextControls = () => {
  return (
    <ul className="controls-list home-page-controls-list">
      <li>
        <button className="controls-button prev-button" type="button">
          <span className="visually-hidden">Go to previous items</span>
        </button>
      </li>
      <li>
        <button className="controls-button next-button" type="button">
          <span className="visually-hidden">Go to next items</span>
        </button>
      </li>
    </ul>
  );
};

export default PrevNextControls;
