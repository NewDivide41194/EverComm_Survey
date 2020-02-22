import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import routes from "./routes";
import LoginContainer from "./pages/login/container/LoginContainer";
import NavBar from "./features/app/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={LoginContainer} />

        {Object.keys(routes.routes).map((v, k) => (
          <Route
            key={k}
            path={`/${v}`}
            component={routes.routes[v].component}
          />
        ))}

        <Redirect to={routes.default} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
