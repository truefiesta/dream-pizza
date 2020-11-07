import React from "react";
import PropTypes from "prop-types";
import { Tag } from "../../const.js";
import "./tags-filter.css";

const TagFilterTitle = {
  [Tag.NEW]: `New pizzas`,
  [Tag.TOP]: `Top rated`,
  [Tag.DISCOUNT]: `Discounts`
};

const tags = Object.values(Tag);

const TagsFilter = ({currentTag, onTagChange}) => {
  const renderTagItems = tags.map(tag => {
    const activeClassName = currentTag === tag ? `active-item` : ``;

    return (
      <li key={tag} className={`tags-list-item ${activeClassName}`}>
        <button
          onClick={(evt) => {onTagChange(evt.target.value)}}
          className="button tags-list-button"
          type="button"
          value={tag}
        >
          {TagFilterTitle[tag]}
        </button>
      </li>
    );
  });

  return (
    <>
      <ul className="tags-list">
        {renderTagItems}
      </ul>
    </>
  );
};

TagsFilter.propTypes = {
  currentTag: PropTypes.string.isRequired,
  onTagChange: PropTypes.func.isRequired
}

export default TagsFilter;
