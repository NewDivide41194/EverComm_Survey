import React, { useEffect, useState } from 'react';
import Report from '../component/Report'
import { ReportAnswers } from "../../../api/FetchReportAnswers";

const ReportContainer=()=>{
    const [reportData, setReportData] = useState([]);
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");
  useEffect(() => {
    ReportAnswers({ surveyHeaderId, token }, (err, data) => {
      setReportData(data.payload);
    });
  }, []);
  console.log(reportData);
    return(
        <Report reportData={reportData}/>
    )
}

export default ReportContainer;

