import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/Logo.jpg";
import { withRouter } from "react-router-dom";
import withMedia from "react-media-query-hoc/dist/with-media";

const NavBar = props => {
  const [userData, setUserData] = useState([]);
  const {media}=props
  // console.log(
  //   userData === null || userData.length == 0 ? null : userData[0].email
  // );
  console.log(props.location.pathname);
  
  useEffect(() => {
    setUserData(
      localStorage.getItem("userData") === null
        ? null
        : JSON.parse(localStorage.getItem("userData"))
    );
  }, []);
  const _handleSignOut = () => {
    props.history.push("/login");
    localStorage.removeItem("userData")
    window.location.reload()
  };

  const _handleAccount=()=> {
    props.history.push("/user/account")
    window.location.reload()
  };

  const _handleMenu=()=>{
    props.history.push("/Menu")

  }

  return (
    <div className="d-flex flex-row flex-wrap py-3 px-4 sticky-top bg-light justify-content-between">
      <img src={Logo} style={{ height: "30px" }} alt="logo" />
      <div className='dropdown'>
        {props.location.pathname!=="/login" && props.location.pathname!=="/register" && <button
          className="btn dropdown-toggle"
          style={{ boxShadow: "none" }}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {userData === null || userData.length == 0 ? null : (
            <span>{userData[0].email}</span>
          )}
        </button>}
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button className="dropdown-item" onClick={_handleAccount}>
            Account Setting
          </button>
          <button className="dropdown-item" onClick={_handleMenu}>
            Back to Menu
          </button>
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={_handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(withMedia(NavBar));
