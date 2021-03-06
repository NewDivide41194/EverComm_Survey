import React from "react";
import Loader from "../assets/images/loading.gif";
import * as Colors from "../config/Color.config"

const ESLoading = () => {
  return (
    <div
      className="w-100 text-center position-absolute"
      style={{
        background: "rgba(0,0,0,0.3)",
        height: "100%",
        paddingTop: "50vh",
        zIndex: 3000,
        top: 0,
        color:Colors.SecondaryColor
      }}
    >
      <img src={Loader} style={{ width: 70 }} alt="loading" />
      <div className="w-100">Loading...</div>
    </div>
  );
};

export default ESLoading;
