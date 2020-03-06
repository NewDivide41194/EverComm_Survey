import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { MediaQueryProvider } from "react-media-query-hoc";
import routes from "./routes";
import LoginContainer from "./pages/login/container/LoginContainer";
import NavBar from "./features/app/NavBar";

const App = () => {
  const Media = {
    mobile: "screen and  (max-width:571px)",
    tablet: "screen and (min-width:768px) and (max-width: 1024px)",
    desktop: "screen and (min-width:1025px) and (min-width: 1441px)"
  };
  return (
    <MediaQueryProvider queries={Media}>
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
    </MediaQueryProvider>
  );
};

export default withRouter(App);
