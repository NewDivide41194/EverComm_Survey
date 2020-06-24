import React, { useEffect, useState, useRef } from "react";
import Report from "../component/Report";
import { UserReportAnswers } from "../../../api/FetchReportAnswers";
import ReactToPrint from "react-to-print";
import { ESButton } from "../../../tools/ES_Button";
import Cover from "../component/Cover";

const ReportContainer = (props) => {
  const [reportData, setReportData] = useState([]);
  // const [dateReportData,setDateReportData]=useState([])
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const startDate = urlParams.get("startDate");
  const endDate = urlParams.get("endDate");
  const userId = localStorage.getItem("userId");
  const viewType = localStorage.getItem("viewType");
  const userLevel = parseInt(localStorage.getItem("userLevel"));
  useEffect(() => {
    UserReportAnswers(
      { userId, surveyHeaderId, startDate, endDate, viewType, token },
      (err, data) => {
        setReportData(data.payload);
      }
    );
  }, []);
  console.log("Report Data---->", reportData);
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <div className="col-sm-1 p-2">
            <ESButton
              text={"Print"}
              small
              leftIcon={<i className="fa fa-print pr-2" />}
            />
          </div>
        )}
        content={() => componentRef.current}
        // ref={el => (this.componentRef = el)}
        pageStyle="{ size: A4 portrait;}"
      />
      <div ref={componentRef} componentRef={componentRef}>
      <Cover
          reportData={reportData}
          startDate={startDate}
          endDate={endDate}
          viewType={userLevel === 2 ? null : viewType}
        />
        <Report
          reportData={reportData}
          startDate={startDate}
          endDate={endDate}
          viewType={userLevel === 2 ? null : viewType}
        />
      </div>
    </div>
  );
};

export default ReportContainer;
