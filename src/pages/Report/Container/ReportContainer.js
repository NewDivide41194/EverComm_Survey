import React, { useEffect, useState } from "react";
import Report from "../component/Report";
import { ReportAnswers } from "../../../api/FetchReportAnswers";
import moment from "moment";

const ReportContainer = (props) => {
  const [reportData, setReportData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");
  const onDateChanges = (startdate, enddate) => {
    setStartDate(moment(startdate).format("YYYY-MM-DD"));
    setEndDate(moment(enddate).format("YYYY-MM-DD"));
  };
  const FetchReport = () => {
    ReportAnswers(
      { surveyHeaderId, startDate, endDate, token },
      (err, data) => {
        setReportData(data.payload);
      }
    );
  };
  console.log(props.history);
  

  return (
    <Report
      reportData={reportData}
      onDateChanges={onDateChanges}
      FetchReport={FetchReport}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

export default ReportContainer;
