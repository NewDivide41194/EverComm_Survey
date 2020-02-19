import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <Switch>
      {Object.keys(routes.routes).map((v, k) => (
        <Route key={k} path={`/${v}`} component={routes.routes[v].component} />
      ))}
      <Redirect to={routes.default} />
    </Switch>
  );
};

export default withRouter(App);
