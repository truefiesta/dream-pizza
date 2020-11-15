import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsAccess } from "../../reducer/payment/selectors.js";
import { Route, Redirect } from "react-router-dom";
import { AppRoute } from "../../const";

const PrivateRoute = ({ exact, path, render }) => {
  const isAccess = useSelector(selectIsAccess);

  return (
    <Route
      isAccess={isAccess}
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
