import React from "react";
import PropTypes from "prop-types";
import "./prev-next-controls.css";

const PrevNextControls = ({currentPage, itemsNumber, maxItemsPerPage, onPrevClick, onNextClick}) => {
  const lastPage = Math.ceil(itemsNumber / maxItemsPerPage);
  let isFirstPage = currentPage === 1;
  let isLastPage = currentPage === lastPage;

  return (
    <ul className="controls-list">
      <li>
        <button
          onClick={() => {onPrevClick(currentPage - 1)}}
          className="controls-button prev-button"
          type="button"
          disabled={isFirstPage}
        >
          <span className="visually-hidden">Go to previous items</span>
        </button>
      </li>
      <li>
        <button
          onClick={() => {onNextClick(currentPage + 1)}}
          className="controls-button next-button"
          type="button"
          disabled={isLastPage}
        >
          <span className="visually-hidden">Go to next items</span>
        </button>
      </li>
    </ul>
  );
};

PrevNextControls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsNumber: PropTypes.number.isRequired,
  maxItemsPerPage: PropTypes.number.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired
};

export default PrevNextControls;
