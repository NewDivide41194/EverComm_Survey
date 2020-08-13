import React from "react";
import Logo from "../../assets/images/Logo.png";
import { withRouter } from "react-router-dom";
import withMedia from "react-media-query-hoc/dist/with-media";
import Auth from "../../security/auth";

const NavBar = (props) => {
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const userLevel = localStorage.getItem("userLevel");

  const { media } = props;
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const _handleSignOut = () => {
    Auth.signout(() => {
      props.history.push("/");
    });
    localStorage.clear();

    window.location.reload();
  };

  const _handleAccount = () => {
    props.history.push("/user/account");
    window.location.reload();
  };

  const _handleMenu = () => {
    if (userId) {
      props.history.push(`/Menu/${userId}`);
    } else {
      props.history.push("/");
    }
  };
  const _handlesurveyMenu = () => {
    props.history.push(`/surveyMenu/${userId}`);
  };
  const _handleReportMenu = () => {
    props.history.push(`/reportMenu/${userId}`);
  };
  const Nav = () => {
    return (
      <div
        style={{ zIndex: 98, background: "white" }}
        className="d-flex flex-row flex-wrap py-2 px-4 sticky-top justify-content-between"
      >
        {/* <img
        src={Logo}
        style={{
          height: "30px",
          cursor: "pointer",
        }}
        alt="logo"
        onClick={_handleMenu}
      /> */}
        <div></div>
        <div className="dropdown">
          {props.location.pathname !== "/" &&
            props.location.pathname !== "/register" && (
              <button
                className="btn dropdown-toggle"
                style={{ boxShadow: "none" }}
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {email && <span>{email}</span>}{" "}
              </button>
            )}
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item" onClick={_handleAccount}>
              <i className="fas fa-user-cog pr-2 text-secondary" />
              Account Setting
            </button>
            <button className="dropdown-item" onClick={_handlesurveyMenu}>
              <i className="fa fa-list-ul pr-2 text-secondary" />
              Survey Menu
            </button>
            <button className="dropdown-item" onClick={_handleReportMenu}>
              <i className="fa fa-chart-line pr-2 text-secondary" />
              Report Menu
            </button>
            <div className="dropdown-divider"></div>
            <div className="dropdown-item text-light bg-dark">
              {/* <i className="text-light far fa-user-circle pr-2 text-secondary" /> */}
              {userLevel}
            </div>
            <button className="dropdown-item" onClick={_handleSignOut}>
              <i className="fa fa-reply pr-2 text-secondary" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  };
  return props.location.pathname === "/report/totalReport" ? null : props
      .location.pathname === `/report/` ? null : props.location.pathname ===
    "/" ? null : props.location.pathname === "/register" ? null : (
    <Nav />
  );
};

export default withRouter(withMedia(NavBar));
