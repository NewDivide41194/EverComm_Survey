import React, { useEffect, useState } from "react";
import Report from "../component/Report";
import {
  ReportAnswers,
  UserReportAnswers,
} from "../../../api/FetchReportAnswers";

const ReportContainer = (props) => {
  const [reportData, setReportData] = useState([]);
  // const [dateReportData,setDateReportData]=useState([])
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const startDate = urlParams.get("startDate");
  const endDate = urlParams.get("endDate");
  const userLevel = localStorage.getItem("userLevel");
  const userId = localStorage.getItem("userId");
  const viewType = localStorage.getItem("viewType");
  useEffect(() => {
    UserReportAnswers(
      { userId, surveyHeaderId, startDate, endDate, viewType, token },
      (err, data) => {
        setReportData(data.payload);
      }
    );
  }, []);

  return (
    <Report reportData={reportData} startDate={startDate} endDate={endDate} />
  );
};

export default ReportContainer;
