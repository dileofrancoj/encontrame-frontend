import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import People from "../Pages/People";
import Login from "../Pages/Login";

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/personas" component={People} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
