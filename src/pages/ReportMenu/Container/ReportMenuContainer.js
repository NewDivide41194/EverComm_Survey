import React, { useState, useEffect } from "react";
import ReportMenu from "../Components/ReportMenu";
import { FetchReportMenu } from "../../../api/FetchReportAnswers";
import moment from "moment";

const ReportMenuContainer = (props) => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [startDate, setStartDate] = useState(null);
  const [surveyId, setSurveyId] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [isClearable, setisClearable] = useState(false);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isDisable, setIsDisable] = useState(true);
  const [viewType, setViewType] = useState("all");
  const StartDate = startDate && moment(startDate._d).format("YYYY-MM-DD");
  const EndDate = endDate && moment(endDate._d).format("YYYY-MM-DD");

  const _handleReport = () => {
     window.open(startDate === null && endDate === null ? '/report/totalReport' : `/report/?startDate=${StartDate}&endDate=${EndDate}`)
  };
  useEffect(() => {
    surveyId && setIsDisable(false);
    FetchReportMenu(
      { userId, StartDate, EndDate, viewType, token },
      (err, data) => {
        setMenuData(data.payload);
        localStorage.setItem("viewType", viewType);
      }
    );
  }, [surveyId, startDate, endDate, viewType]);
  console.log("view type..", viewType);

  const SurveyNameOptions =
    menuData &&
    menuData.map((v, k) => ({
      value: v.survey_header_id,
      label: v.survey_name,
      isDisabled: v.amount_of_survey <= 0,
    }));
  console.log("------>", SurveyNameOptions);

  const _handleSelectChange = (e) => {
    setViewType(e.target.value);
    localStorage.setItem("viewType", e.target.value);
  };

  const _handleSelectSurvey = (SurveyHeaderId, e) => {
    if (e !== null) {
      localStorage.setItem("SurveyHeaderId", e.value);
      setSurveyId(e.value);
    } else {
      setIsDisable(true);
      setSurveyId(null);
      setStartDate(null);
      setEndDate(null);
    }
  };

  const _handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    startDate !== null && setSurveyId(setSurveyId);
  };
  const _handleFocusedInput = (focusedInput) => {
    setFocusedInput(focusedInput);
  };
  const _handleClearable = () => {
    setisClearable(!isClearable);
  };

  return (
    <ReportMenu
      isDisable={isDisable}
      ReportDetailData={menuData}
      startDate={startDate}
      endDate={endDate}
      SurveyNameOptions={SurveyNameOptions}
      focusedInput={focusedInput}
      surveyId={surveyId}
      isClearable={isClearable}
      viewType={viewType}
      _handleSelectChange={_handleSelectChange}
      _handleClearable={_handleClearable}
      _handleSelectSurvey={_handleSelectSurvey}
      _handleDatesChange={_handleDatesChange}
      _handleFocusedInput={_handleFocusedInput}
      _handleReport={_handleReport}
    />
  );
};

export default ReportMenuContainer;
