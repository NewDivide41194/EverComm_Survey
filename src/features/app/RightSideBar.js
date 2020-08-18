import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import * as Colors from "../../config/Color.config";
import { withRouter } from "react-router-dom";
import { EverCommLink } from "../../tools/ES_Text";
import auth from "../../security/auth";
import { Report_Menu } from "../../api/url";

const userId = localStorage.getItem("userId");

const userLevel = parseInt(localStorage.getItem("userLevel"));
const userLevelName =
  userLevel === 1 ? "ADMIN" : userLevel === 2 ? "USER" : "DISTRIBUTOR";
const eMail = localStorage.getItem("email");

const RightSideBar = (props) => {
  const accountSettingPath = `/user/editAccount/${userId}`;
  const changePasswordPath = `/user/account/changePassword/${userId}`;
  const mainMenuPath = `/menu/${userId}`;
  const surveyMenuPath = `/surveyMenu/${userId}`;
  const reportMenuPath = `/reportMenu/${userId}`;
  const URL = window.location.pathname;

  console.log("URL", URL);

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "25px",
      height: "25px",
      left: "20px",
      top: "10px",
    },
    bmBurgerBars: {
      background:
        " linear-gradient(43deg, rgba(59,139,190,1) 0%, rgba(68,180,203,1) 100%) ", // boxShadow: "1px 1px 1px gray"
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
      fontSize: "14px",
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
            <HomeLink
              userId={userId}
              URL={URL}
              reportMenuPath={reportMenuPath}
              surveyMenuPath={surveyMenuPath}
            />
            <AdminLink userLevel={userLevel} />
            <AccountLink
              userId={userId}
              URL={URL}
              accountSettingPath={accountSettingPath}
              changePasswordPath={changePasswordPath}
            />
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

const HomeLink = (props) => {
  const { surveyMenuPath, reportMenuPath,URL } = props;
  return (
    <div className="pb-2">
      <li
        id="headingOne"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="false"
        aria-controls="collapseOne"
        className="d-flex flex-row justify-content-between"
        style={{cursor:"pointer"}}
      >
        <div>
          HOME
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
        className={`collapse ${
          URL === surveyMenuPath || URL === reportMenuPath ? "show" : null
        }`}
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <li>
          <EverCommLink
            pathName={surveyMenuPath}
            to={surveyMenuPath}
            text={"SURVEY LIST"}
          />
        </li>
        <li>
          <EverCommLink
            pathName={reportMenuPath}
            to={reportMenuPath}
            text={"REPORTING"}
          />
        </li>
      </ul>
    </div>
  );
};

const AdminLink = (props) => {
  return (
    props.userLevel === 1 && (
      <div >
        <li className="pb-2">
          <EverCommLink
            pathName={`/dashobard`}
            to={`/dashboard`}
            text={"DASHBOARD"}
          />
        </li>

        <li className="pb-2">
          <EverCommLink
            pathName={`/user/accountManagement/${userId}`}
            to={`/user/accountManagement/${userId}`}
            text={"USER MANAGEMENT"}
          />
        </li>
      </div>
    )
  );
};

const AccountLink = (props) => {
  const { accountSettingPath, changePasswordPath ,URL} = props;
  return (
    <div>
      <li
        id="headingTwo"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
        className="d-flex flex-row justify-content-between"
        style={{cursor:"pointer"}}
      >
        <div>
          ACCOUNT
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
        id="collapseTwo"
        className={`collapse ${
          URL === accountSettingPath || URL === changePasswordPath
            ? "show"
            : null
        }`}
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <li>
          <EverCommLink
            pathName={accountSettingPath}
            to={accountSettingPath}
            text={"Account Setting"}
          />
        </li>
        <li>
          <EverCommLink
            pathName={changePasswordPath}
            to={changePasswordPath}
            text={"Change Password"}
          />
        </li>
      </ul>
    </div>
  );
};
