import React from "react";
import * as Colors from "../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../helper/reportHelper";
import moment from "moment";
import Logo from "../../../assets/images/Logo.png";

const Cover = (props) => {
  const { reportData, startDate, endDate, viewType, media } = props;

  return (

    <div className="container"
      style={{
        border: "0.1px solid #cecece",
        width: "8.27in",
        height: "15.66in",
        // paddingLeft: "0.5in",
        // paddingTop: "0.2in",
        // paddingRight: "0.5in",
        // paddingBottom: "0.3in",
        backgroundColor: ""
      }} >


<div className="text-left" style={{width:""}}>
        <img
        src={Logo}
        style={{
          height: "30px",
          // cursor: "pointer",
        }}
        alt="logo"
      />
        </div>
      {/* <div className="row justify-content-between border-bottom">
        <div className="" style={{ fontSize: media.mobile ? "15px" : "15px" }}>Cooling System</div>
        <div className="text-right " style={{ width: "50%" }}>
          <img
            src={Logo}
            style={{
              height: "18px",
              // cursor: "pointer",
            }}
            alt="logo"
          />
        </div>
      </div> */}
      {/* <div className="row border-bottom ">
        <h5 style={{ color: Colors.PrimaryColor, fontSize: media.mobile ? "20px" : "25px" }}>
          Basic Information</h5>

    </div> */}
      {
        reportData && reportData.length ? (
          reportData.map((v, k) => (
            <div className="container-row mt-4" key={k} style={{paddingTop:"550px"}}>
              <h1 className="text-center " style={{ color: Colors.PrimaryColor }}>
                Report for {v.survey_name}
              </h1>
              {/* <div className="text-center font-weight-bold"><p>Answered By {viewType}</p></div> */}
              {startDate ? (
                <h4 className="text-center text-secondary">
                  From {moment(startDate).format("YYYY-MMM-DD")} to{" "}
                  {moment(endDate).format("YYYY-MMM-DD")}
                </h4>
              ) : (
                  <h4 className="text-center text-secondary">Overall Report</h4>
                )}
            </div>
          )))
          : null
      }
    </div>

  );
};
export default Cover;
