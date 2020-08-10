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
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "25px",
      height: "25px",
      left: "20px",
      top: "10px"
    },
    bmBurgerBars: {
      background: Colors.PrimaryColor,
    //   boxShadow: "1px 1px 1px gray"
    },
    bmBurgerBarsHover: {
      background: Colors.SecondaryColor
    },
    bmCrossButton: {
      height: "24px",
      width: "24px"
    },
    bmCross: {
      background: Colors.SecondaryColor
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: 0
    },
    bmMenu: {
      background: Colors.PrimaryColor,
      padding: "2.5em .5em 0",
      fontSize: "1.15em"
    },
    bmMorphShape: {
    //   fill: "#373a47"
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em"
    },
    bmItem: {
      display: "inline-block"
    },
    bmOverlay: {
      background: "rgb(0, 0, 0,0)",
      zIndex: 5
    }
  };
  const [MenuOpen,setMenuOpen]=useState(false)

  const CloseMenu = ()=> {
    setMenuOpen(!MenuOpen)
    console.log(MenuOpen);
  };

  const StateChange=(e)=>{setMenuOpen(e.isOpen)}
const userId=localStorage.getItem("userId")
  return (
    <Menu
      styles={styles}
      left
      isOpen={MenuOpen}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}      
      onStateChange={(e) => StateChange(e)}
    >
        <EverCommLink to={`/menu/${userId}`} text={"HOME"}/>
        <EverCommLink to={`/surveyMenu/${userId}`} text={"SURVEY LIST"}/>
        <EverCommLink to={`/reportMenu/${userId}`} text={"REPORTING"}/>

        <EverCommLink to={`/user/account`} text={"USER MANAGEMENT"}/>
        <EverCommLink to={`menu/${userId}`} text={"MY ACCOUNT"}/>


        

          {/* <MyLink
            to={"/"}
            className="text-center pb-2"
            style={{
              fontSize: 25,
              fontStyle: "bold",
              fontFamily: Fonts.titleText,              

            }}
            onClick={()=>CloseMenu()}
            id={"Home"}
            text={"E.M.D Footwears"}
            noEffect
          />
      <MyLink
        to={`/${RoutePath.Men}`}
        className="pl-3 py-3"
        id={"Men"}
        onClick={()=>CloseMenu()}

        style={{ fontSize: 15 }}
        text={"MEN"}
      />
      <MyLink
        to={`/${RoutePath.Women}`}
        className="pl-3 py-3"
        id={"Women"}
        onClick={()=>CloseMenu()}

        style={{ fontSize: 15 }}
        text={"WOMEN"}
      />
      <MyLink
        to={`/${RoutePath.PermanentCollection}`}
        className="pl-3 py-3"
        id={"Collection"}
        onClick={()=>CloseMenu()}

        style={{ fontSize: 15 }}
        text={"PARMANENT COLLECTION"}
      />
      <MyLink
        to={`/${RoutePath.Contact}`}
        className="px-3 py-3"
        id={"Contact"}
        onClick={()=>CloseMenu()}

        style={{ fontSize: 15 }}
        text={"CONTACT US"}
      /> */}
    </Menu>
  );
};

export default RightSideBar;