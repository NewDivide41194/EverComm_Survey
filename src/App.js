import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { MediaQueryProvider } from "react-media-query-hoc";
import routes from "./routes";
import NavBar from "./features/app/NavBar";
import RegisterContainer from "./pages/register/container/registerContainer";
import LoginContainer from "./pages/login/container/LoginContainer";
import ErrorPage from "./pages/error/errorPage";
import Footer from "./features/app/Footer";
import "./App.css";
import LeftSideBar from "./features/app/LeftSideBar";

const App = () => {
  const Media = {
    mobile: "screen and  (max-width:571px)",
    tablet: "screen and (min-width:768px) and (max-width: 1024px)",
    desktop: "screen and (min-width:1025px) and (min-width: 1441px)",
  };

  return (
    <MediaQueryProvider queries={Media}>
      <div id="outer-container">
        <LeftSideBar />
        <div id="page-wrap" className="page-container">
          <NavBar />
          <div className="content-wrap">
            <Switch>
              <Route exact path="/" component={LoginContainer} />
              <Route path="/register" component={RegisterContainer} />
              {localStorage.getItem("authenticated") &&
              localStorage.getItem("userId") ? (
                Object.keys(routes.routes).map((v, k) => (
                  <Route
                    key={k}
                    path={`/${v}`}
                    component={routes.routes[v].component}
                  />
                ))
              ) : (
                <Redirect to={routes.default} />
              )}
              <Route
                path="*"
                component={() => <ErrorPage ErrorInfo={"Page Not Found!"} />}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </MediaQueryProvider>
  );
};

export default withRouter(App);
