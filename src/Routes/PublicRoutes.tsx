import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useCookies } from "react-cookie";

import Home from "../Pages/Home";
import People from "../Pages/People";
import Login from "../Pages/Login";
import CreatePerson from "../Pages/CreatePerson";
import Loading from "../Components/Loading";
import { PrivateRoute } from "./PrivateRoute";

const PublicRoutes = () => {
  // true / false
  // Login screen -> {email,password} -> servidor -> JWT -> front guarda el token en cookies.auth
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [checkingUser, setCheckingUser] = useState<boolean>(true);
  const [cookies] = useCookies(["auth"]) || null;

  useEffect(() => {
    // useIsTokenValid
    cookies.auth ? setIsLoggedIn(true) : setIsLoggedIn(false);
    setCheckingUser(false);
  }, []);

  if (checkingUser) return <Loading />;

  return (
    <Router>
      {/* navbar */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/personas" component={People} />
        <Route path="/login" component={Login} />
        <PrivateRoute
          path="/personas/alta"
          isLoggedIn={isLoggedIn}
          component={CreatePerson}
        />
        <Redirect to="/personas" />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
