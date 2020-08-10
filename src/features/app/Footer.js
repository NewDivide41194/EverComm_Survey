import React from "react";
import { withRouter } from "react-router-dom";
import withMedia from "react-media-query-hoc/dist/with-media";
import * as Colors from "../../config/Color.config";

const Footer = (props) => {
  const Foot = () => {
    return (
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
        className="py-1 text-center text-dark w-100 page-footer"
      >
        Powered by
        <strong>
          <i> EverComm</i>
        </strong>
      </footer>
    );
  };
  return (
    props.location.pathname === "/report/totalReport" ? null : props
      .location.pathname === `/report/` ? null : (
    <Foot />
    )
  );
};

export default withRouter(withMedia(Footer));
