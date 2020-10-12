import React from "react";
import * as Colors from "../../../config/Color.config";
import moment from "moment";
import Logo from "../../../assets/images/Logo.png";

const Cover = (props) => {
  const { reportData, buildingName} = props;

  return (
    <div
      className="container"
      style={{
        width: "8.27in",
        height: "15in",
      }}
    >
      <img
        src={Logo}
        className="mt-3 ml-4"
        style={{
          height: "30px",
          // cursor: "pointer",
        }}
        alt="logo"
      />
      {reportData && reportData.length
        ? reportData.map((v, k) => (
            <div
              key={k}
              style={{ paddingTop: "550px" }}
            >
              <h1
                className="text-center border-bottom pb-2"
                style={{ color: Colors.PrimaryColor }}
              >
                Report for {v.survey_name}
              </h1>              
                <h4 className="text-center text-secondary">Overall Report</h4>
                <h5 className="text-center text-secondary">Building: {buildingName}</h5>
            </div>
          ))
        : null}
    </div>
  );
};
export default Cover;
