import React, { useEffect, useState } from "react";
import Report from "../component/Report";
import { UserReportAnswers } from "../../../api/FetchReportAnswers";

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
  const userLevel=parseInt(localStorage.getItem("userLevel"))
  useEffect(() => {
    UserReportAnswers(
      { userId, surveyHeaderId, startDate, endDate, viewType, token },
      (err, data) => {
        setReportData(data.payload);
      }
    );
  }, []);
console.log("Report Data---->",reportData);

  return (
    <Report
      reportData={reportData}
      startDate={startDate}
      endDate={endDate}
      viewType={userLevel===2?null: viewType}
    />
  );
};

export default ReportContainer;
