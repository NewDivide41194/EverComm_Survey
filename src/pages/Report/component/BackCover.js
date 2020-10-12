import React from "react";
import * as Colors from "../../../config/Color.config";
import moment from "moment";
import Logo from "../../../assets/images/Logo.png";

const BackCover = (props) => {
  const { reportData, viewType, media } = props;

  return (
    <div
      className="container"
      style={{
        width: "8.27in",
        height: "14in",
        backgroundColor: "",
      }}
    >
      <div className="text-left">
        <img
          src={Logo}
          className="mt-3 ml-4"
          style={{
            height: "30px",
          }}
          alt="logo"
        />
      </div>

      <div
        style={{ paddingTop: "550px" }}
      >
        <h1
          className="text-center border-bottom pb-2"
          style={{
            color: Colors.PrimaryColor,           
          }}
        >
          End Of {reportData.survey_name} Report
        </h1>
      
          <h4 className="text-center text-secondary">Overall Report</h4>
      </div>
    </div>
  );
};
export default BackCover;
