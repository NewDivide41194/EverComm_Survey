import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
// import MyLink from "../../tools/myLink";
// import * as RoutePath from "../../../../config/routeConfig";
import * as Colors from "../../config/Color.config";
import { Link } from "react-router-dom";
import { EverCommLink } from "../../tools/ES_Text";
import { RouteName } from "../../routes";
// import * as Fonts from '../../../../config/fontConfig'


const RightSideBar = () => {
  const userLevel=localStorage.getItem("userLevel")
  const eMail=localStorage.getItem("email")

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "25px",
      height: "25px",
      left: "20px",
      top: "10px",
    },
    bmBurgerBars: {
      background: Colors.PrimaryColor,
      //   boxShadow: "1px 1px 1px gray"
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
      //   fill: "#373a47"
    },
    bmItemList: {
      color: Colors.SecondaryColor,
      padding: "0.8em",
      border: "none",
      boxShadow: "none"
    },
    bmItem: {
      display: "inline-block",
      outline: "none"
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

  const StateChange = (e) => {
    setMenuOpen(e.isOpen);
  };
  const userId = localStorage.getItem("userId");
  return (
    <Menu
      styles={styles}
      left
      isOpen={MenuOpen}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      onStateChange={(e) => StateChange(e)}

    >
      <div className='d-flex flex-column w-100 text-center h-100'>
        <i className='fa fa-user-circle fa-3x w-100 pb-2' />
        <div>{eMail}
        <hr className='bg-light my-2' />
        <div className='pb-4'>{userLevel}</div></div>

        <ul id="accordion" style={{ listStyle: "none" }} className='w-100 text-left' >
          <li id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className='d-flex flex-row justify-content-between'>
            <div ><EverCommLink to={`/surveyMenu/${userId}`} text={"HOME"} /></div>
            <div><i className="fa fa-caret-down" /></div>
          </li>
          <ul style={{ listStyle: "none",listStyleType:"square" }} id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion" >
            <li><EverCommLink to={`/surveyMenu/${userId}`} text={"SURVEY LIST"} /></li>
            <li><EverCommLink to={`/reportMenu/${userId}`} text={"REPORTING"} /></li>
          </ul>

          <li>
            <EverCommLink to={`/user/account`} text={"USER MANAGEMENT"} />

          </li>

          <li>
            <EverCommLink to={`/menu/${userId}`} text={"MY ACCOUNT"} />
          </li>


        </ul>
        <div className="mt-auto">
          <hr className='bg-light' />
          <i className="fa fa-sign-out-alt pr-2" />
          <EverCommLink to={`/menu/${userId}`} text={"Log Out"} />
        </div>
      </div>
      
    </Menu>
  );
};

export default RightSideBar;