import React, { useEffect, useState } from "react";
import Report from "../component/Report";
import { ReportAnswers } from "../../../api/FetchReportAnswers";

const ReportContainer = (props) => {
  const [reportData, setReportData] = useState([]);
  
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const startDate=urlParams.get("startDate")
  const endDate=urlParams.get("endDate")

  useEffect(()=>{
    ReportAnswers(
      { surveyHeaderId, startDate, endDate, token },
      (err, data) => {
        setReportData(data.payload);
      }
    );
  },[]) 
  
  console.log(urlParams.get("startDate"));
  
  return (
    <Report
      reportData={reportData}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

export default ReportContainer;
