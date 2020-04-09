import React from "react";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import {MediaQueryProvider} from "react-media-query-hoc";
import routes from "./routes";
import NavBar from "./features/app/NavBar";
import RegisterContainer from "./pages/register/container/registerContainer";
import LoginContainer from "./pages/login/container/LoginContainer";
import ErrorPage from "./pages/error/errorPage";

const App = props => {
    const Media = {
        mobile: "screen and  (max-width:571px)",
        tablet: "screen and (min-width:768px) and (max-width: 1024px)",
        desktop: "screen and (min-width:1025px) and (min-width: 1441px)"
    };

    const userData=JSON.parse(localStorage.getItem("userData"))
console.log("------>",userData);

    return (
        <MediaQueryProvider queries={Media}>
            <NavBar/>
            <Switch> {/* <Route exact path="/login" component={LoginContainer} /> */}
                <Route exact path="/"
                    component={LoginContainer}/>
                <Route path="/register"
                    component={RegisterContainer}/> {
                localStorage.getItem("authenticated") && localStorage.getItem("userData") ? Object.keys(routes.routes).map((v, k) => (
                    <Route key={k}
                        path={
                            `/${v}`
                        }
                        component={
                            routes.routes[v].component
                        }/>
                )) : <Redirect to={
                        routes.default
                    }/>
            }
                <Route path="*"
                    component={
                        () =>< ErrorPage ErrorInfo = {
                            "Page Not Found!"
                        } />
                    }/>

            </Switch>
        </MediaQueryProvider>
    );
};

export default withRouter(App);
