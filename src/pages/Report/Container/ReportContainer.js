import React, { useEffect, useState } from "react";
import Report from "../component/Report";
import { ReportAnswers,ReportDateAnswers } from "../../../api/FetchReportAnswers";

const ReportContainer = (props) => {
  const [reportData, setReportData] = useState([]);
  const [dateReportData,setDateReportData]=useState([])
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
    ReportDateAnswers(
      { surveyHeaderId, startDate, endDate, token },
      (err, data) => {
        setDateReportData(data.payload);
      }
    );
  },[]) 
  
  console.log(urlParams.get("startDate"));
  console.log(dateReportData);
  
  return (
    <Report
      reportData={reportData}
      dateReportData={dateReportData}
      startDate={startDate}
      endDate={endDate}

    />
  );
};

export default ReportContainer;
