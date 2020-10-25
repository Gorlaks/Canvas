import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";

import localStorageApi from "../initialize/api/localStorageApi";
import { RoutePath } from "../utils/constants";

/**
 * @description The main component for check authorization
 * and pass if user is authorized or redirect to auth page if not.
 * @returns Route or Redirect.
*/
const ProtectedRoute = (props: {
  Component: FC,
  exact: boolean,
  path: string,
}) => {
  const { Component, exact, path } = props;
  const userAuthData = localStorageApi.getLocalData("userAuthData", {});
  const isAuthorized = Boolean(userAuthData.id);

  return isAuthorized ?
    <Route
      exact={exact}
      path={path}
      component={Component}
    />
    : <Redirect to={RoutePath.AUTH_PATH} />
}

export default ProtectedRoute;