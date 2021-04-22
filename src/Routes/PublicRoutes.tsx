import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import People from "../Pages/People";
import CreatePerson from "../Pages/CreatePerson";
import { PersonProvider } from "../contexts/person";

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/personas/alta" component={() => <PersonProvider><CreatePerson /></PersonProvider>} />
        <Route path="/personas" component={People} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
