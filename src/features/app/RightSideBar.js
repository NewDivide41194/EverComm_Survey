import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import * as Colors from "../../config/Color.config";
import { withRouter } from "react-router-dom";
import { EverCommLink } from "../../tools/ES_Text";
import auth from "../../security/auth";

const RightSideBar = (props) => {
  const userLevel = parseInt(localStorage.getItem("userLevel"));
  const userLevelName =
    userLevel === 1 ? "ADMIN" : userLevel === 2 ? "USER" : "DISTRIBUTOR";
  const eMail = localStorage.getItem("email");

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "25px",
      height: "25px",
      left: "20px",
      top: "10px",
    },
    bmBurgerBars: {
      background:" linear-gradient(43deg, rgba(59,139,190,1) 0%, rgba(68,180,203,1) 100%) "     // boxShadow: "1px 1px 1px gray"
    },
    bmBurgerBarsHover: {
      background: Colors.SecondaryColor,
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: Colors.SecondaryColor,
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: 0,
    },
    bmMenu: {
      background: Colors.PrimaryColor,
      padding: "2.5em .5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      // fill: "#373a47"
    },
    bmItemList: {
      color: Colors.SecondaryColor,
      padding: "0.8em",
      border: "none",
      boxShadow: "none",
    },
    bmItem: {
      display: "inline-block",
      outline: "none",
    },
    bmOverlay: {
      background: "rgb(0, 0, 0,0)",
      zIndex: 5,
    },
  };
  const [MenuOpen, setMenuOpen] = useState(false);

  const CloseMenu = () => {
    setMenuOpen(!MenuOpen);
    console.log(MenuOpen);
  };

  const _handleSignOut = () => {
    auth.signout(() => {
      props.history.push("/");
    });
    localStorage.clear();

    window.location.reload();
  };

  const StateChange = (e) => {
    setMenuOpen(e.isOpen);
  };
  const userId = localStorage.getItem("userId");
  const LeftSideBar = () => {
    return (
      <Menu
        styles={styles}
        left
        isOpen={MenuOpen}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        onStateChange={(e) => StateChange(e)}
      >
        <div className="d-flex flex-column w-100 text-center h-100">
          <i className="fa fa-user-circle fa-3x w-100 pb-2" />
          <div className="pb-4">
            {eMail}
            <hr className="bg-light my-2" /> {userLevelName}
          </div>

          <ul
            id="accordion"
            style={{ listStyle: "none" }}
            className="w-100 text-left"
          >
            <li
              id="headingOne"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              className="d-flex flex-row justify-content-between"
            >
              <div>
                <EverCommLink to={`/surveyMenu/${userId}`} text={"HOME"} />
              </div>
              <div>
                <i className="fa fa-caret-down" />
              </div>
            </li>
            <ul
              style={{
                listStyle: "none",
                listStyleType: "square",
              }}
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <li>
                <EverCommLink
                  pathName={`/surveyMenu/${userId}`}
                  to={`/surveyMenu/${userId}`}
                  text={"SURVEY LIST"}
                />
              </li>
              <li>
                <EverCommLink
                  pathName={`/reportMenu/${userId}`}
                  to={`/reportMenu/${userId}`}
                  text={"REPORTING"}
                />
              </li>
            </ul>
            {userLevel !== 2 && (
              <div>
                <li>
                  <EverCommLink
                    pathName={`/dashobard`}
                    to={`/dashboard`}
                    text={"DASHBOARD"}
                  />
                </li>

                <li>
                  <EverCommLink
                    pathName={`/user/accountManagement`}
                    to={`/user/accountManagement`}
                    text={"USER MANAGEMENT"}
                  />
                </li>
              </div>
            )}

            <li>
              <EverCommLink to={`/user/account/${userId}`} text={"MY ACCOUNT"} />
            </li>
          </ul>
          <div className="mt-auto" onClick={_handleSignOut}>
            <hr className="bg-light" />
            <i className="fa fa-sign-out-alt pr-2" />
            <EverCommLink to={`#`} text={"Log Out"} />
          </div>
        </div>
      </Menu>
    );
  };
  return props.location.pathname === "/report/totalReport" ? null : props
      .location.pathname === `/report/` ? null : props.location.pathname ===
    "/" ? null : props.location.pathname === "/register" ? null : (
    <LeftSideBar />
  );
};

export default withRouter(RightSideBar);
