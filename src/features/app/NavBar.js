import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/Logo.jpg";
import { withRouter } from "react-router-dom";

const NavBar = props => {
  const [userData, setUserData] = useState([]);

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
  console.log(userData);
  return (
    <div className="d-flex flex-row py-3 px-4 sticky-top bg-light justify-content-between">
      <img src={Logo} style={{ width: "150px", height: "30px" }} alt="logo" />
      <div class="dropdown">
        {props.location.pathname!=="/login"&&<button
          class="btn dropdown-toggle"
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
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button class="dropdown-item">
            Account Setting
          </button>
          <div className="dropdown-divider"></div>
          <button class="dropdown-item" onClick={_handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
