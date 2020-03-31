import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { MediaQueryProvider } from "react-media-query-hoc";
import routes from "./routes";
import NavBar from "./features/app/NavBar";
import UserLogin from "./pages/login/components/AdminLogin";

const App = () => {
  const Media = {
    mobile: "screen and  (max-width:571px)",
    tablet: "screen and (min-width:768px) and (max-width: 1024px)",
    desktop: "screen and (min-width:1025px) and (min-width: 1441px)"
  };

  
  return (
    <MediaQueryProvider queries={Media}>
      <NavBar/>
      <Switch>
        {/* <Route exact path="/login" component={LoginContainer} /> */}
        <Route exact path="/admin/login" component={UserLogin} />

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
