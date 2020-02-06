import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import api from "./services/api";

import Form from "./pages/Form";
import List from "./pages/List";

export default function Routes() {
  async function addUser(data) {
    await api.post("/users", data);
  }

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={props => <Form {...props} onSubmit={addUser} />}
        />
        <Route path="/list" component={List} />
        <Route />
      </Switch>
    </Router>
  );
}
