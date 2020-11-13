import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { AppRoute, AppRouteTitle } from "../../const.js";
import "./breadcrumbs.css";

const Breadcrumbs = ({items}) => {
  const itemsMarkup = items.map(item => {
    return (
        <li
          key={item.title}
          className="breadcrumbs-item"
        >
          <NavLink exact to={item.url} activeClassName="breadcrumbs-current">{item.title}</NavLink>
        </li>
      );
  });

  return (
    <ul className="breadcrumbs-list">
      <li className="breadcrumbs-item">
        <NavLink exact to={AppRoute.HOME}>{AppRouteTitle[AppRoute.HOME]}</NavLink>
      </li>
      {itemsMarkup}
    </ul>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Breadcrumbs;
