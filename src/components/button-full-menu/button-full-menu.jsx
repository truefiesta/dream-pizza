import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const.js";
import "./button-full-menu.css";

const ButtonFullMenu = () => {
  return (
    <Link className="button button-full-menu" to={AppRoute.MENU}>
      See full menu
    </Link>
  );
};

export default ButtonFullMenu;
