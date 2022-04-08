import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register/index";
const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />

      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default AppRoutes;
