import React from "react";
import * as Colors from "../../../config/Color.config";
import moment from "moment";
import Logo from "../../../assets/images/Logo.png";

const Cover = (props) => {
  const { reportData, startDate, endDate, viewType, media } = props;

  return (
    <div
      className="container"
      style={{
        width: "8.27in",
        height: "15.66in",
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
              className="container-row mt-4"
              key={k}
              style={{ paddingTop: "550px" }}
            >
              <h1
                className="text-center "
                style={{ color: Colors.PrimaryColor }}
              >
                Report for {v.survey_name}
              </h1>
              {startDate ? (
                <h4 className="text-center text-secondary">
                  From {moment(startDate).format("YYYY-MMM-DD")} to{" "}
                  {moment(endDate).format("YYYY-MMM-DD")}
                </h4>
              ) : (
                <h4 className="text-center text-secondary">Overall Report</h4>
              )}
            </div>
          ))
        : null}
    </div>
  );
};
export default Cover;
