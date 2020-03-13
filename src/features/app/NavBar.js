import React from "react";
import Logo from "../../assets/images/Logo.jpg";

const NavBar = () => {
  return (
    <div className="d-flex flex-row py-3 px-4 fixed-top bg-light">
      <img src={Logo} style={{ width: "150px", height: "30px" }} alt="logo" />
    </div>
  );
};

export default NavBar;
