import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import routes from "./routes";
import LoginContainer from "./pages/login/container/LoginContainer";
import NavBar from "./features/app/NavBar";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginContainer} />

      {Object.keys(routes.routes).map((v, k) => (
        <div key={k}>
          <NavBar />
          <Route path={`/${v}`} component={routes.routes[v].component} />
        </div>
      ))}

      <Redirect to={routes.default} />
    </Switch>
  );
};

export default withRouter(App);
