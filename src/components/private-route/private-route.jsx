import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { AppRoute } from "../../const";

const isAccess = false;

const PrivateRoute = ({ exact, path, render }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          isAccess
          ? render()
          : <Redirect to={AppRoute.ERROR} />
        );
      }}
    />
  )
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
}

export default PrivateRoute;
