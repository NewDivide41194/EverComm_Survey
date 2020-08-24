import React from "react";
import { withRouter } from "react-router-dom";
import withMedia from "react-media-query-hoc/dist/with-media";
import * as Colors from "../../config/Color.config";
import Logo from "../../assets/images/Logo.png";
import "../../App.css";

const Footer = (props) => {
  const Foot = () => {
    return (
      <div className="main-footer">
        <footer
          style={{
            left: 0,
            bottom: 0,
            // background: Colors.SecondaryColor,
            marginTop:
              props.location.pathname === "/"
                ? "-30px"
                : props.location.pathname === "/register"
                ? "-30px"
                : null,
            zIndex: 999,
            fontSize: 14,
            opacity: 0.7,
          }}
          className="py-1 text-center text-secondary w-100 page-footer font-weight-bold"
        >
          Powered by
          <img
            src={Logo}
            style={{ height: "20px", marginTop: "-13px", paddingLeft:5 }}
            alt="logo"
          />
        </footer>
      </div>
    );
  };
  return props.location.pathname === "/report/totalReport" ? null : props
      .location.pathname === `/report/` ? null : (
    <Foot />
  );
};

export default withRouter(withMedia(Footer));
