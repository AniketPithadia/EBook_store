import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { RoutePaths } from "../utils/enum";

const Login = lazy(() => import("../pages/login/index"));

const Register = lazy(() => import("../pages/register/index"));

const NotFound = lazy(() => import("../pages/Notfound/index"));

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RoutePaths.Login} component={Login} />
      <Route exact path={RoutePaths.Register} component={Register} />
      <Route exact path={RoutePaths.NotFound} component={NotFound} />
    </Switch>
  );
};
export default AppRoutes;
