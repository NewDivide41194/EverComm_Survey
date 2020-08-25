import React, { useState, useEffect } from "react";
import ReportMenu from "../Components/ReportMenu";
import { FetchReportMenu } from "../../../api/FetchReportAnswers";
import moment from "moment";

const ReportMenuContainer = (props) => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [surveyId, setSurveyId] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [isClearable, setisClearable] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [viewType, setViewType] = useState("all");

  const _handleReport = () => {
    window.open("/report/totalReport");
  };
  useEffect(() => {
    surveyId && setIsDisable(false);
    FetchReportMenu({ userId, viewType, token }, (err, data) => {
      setMenuData(data.payload);
      localStorage.setItem("viewType", viewType);
    });
  }, [surveyId, viewType]);

  const SurveyNameOptions =
    menuData &&
    menuData.map((v, k) => ({
      value: v.survey_header_id,
      label: v.survey_name,
      isDisabled: v.amount_of_survey <= 0,
    }));

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
    }
  };

  const _handleClearable = () => {
    setisClearable(!isClearable);
  };

  return (
    <ReportMenu
      isDisable={isDisable}
      ReportDetailData={menuData}
      SurveyNameOptions={SurveyNameOptions}
      surveyId={surveyId}
      isClearable={isClearable}
      viewType={viewType}
      _handleSelectChange={_handleSelectChange}
      _handleClearable={_handleClearable}
      _handleSelectSurvey={_handleSelectSurvey}
      _handleReport={_handleReport}
    />
  );
};

export default ReportMenuContainer;
