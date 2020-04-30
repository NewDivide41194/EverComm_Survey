import React, { useEffect, useState } from "react";
import ReportMenu from "../Components/ReportMenu";
import { ReportAnswers } from "../../../api/FetchReportAnswers";

const ReportMenuContainer = () => {
  const [reportData, setReportData] = useState([]);
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");
  useEffect(() => {
    ReportAnswers({ surveyHeaderId, token }, (err, data) => {
      setReportData(data);
    });
  }, []);
  console.log(reportData);

  return <ReportMenu ReportData={reportData} />;
};

export default ReportMenuContainer;
