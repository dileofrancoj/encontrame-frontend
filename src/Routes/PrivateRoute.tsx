import React from "react";
import { Route, Redirect } from "react-router-dom";

interface iPrivateRoute {
  isLoggedIn: boolean;
  component: React.FC;
  path: string;
}

export const PrivateRoute = ({
  isLoggedIn,
  component: Component,
  path,
  ...rest
}: iPrivateRoute): any => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isLoggedIn ? (
          <Component {...props} path={path} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
