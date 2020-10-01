import React, { useState, useEffect } from "react";
import ReportMenu from "../Components/ReportMenu";
import { FetchReportMenu } from "../../../api/FetchReportAnswers";

const ReportMenuContainer = (props) => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [surveyId, setSurveyId] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [isClearable, setisClearable] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [viewType, setViewType] = useState("one");
  const [countryName, setCountry] = useState(null);

  const _handleReport = () => {
    window.open("/report/totalReport");
  };
  useEffect(() => {
    surveyId && countryName && setIsDisable(false);

    FetchReportMenu({ userId, viewType, token }, (err, data) => {
      const surveySection = data.payload.filter(
        (v) => v.survey_header_id === 10
      )[0].survey_section;
      surveySection.splice(0, 1);

      setMenuData(data.payload);
      localStorage.setItem("viewType", viewType);
    });
  }, [surveyId, viewType]);

  const SurveyNameOptions = 
    menuData &&
    menuData.map((v, k) => ({
      value: v.survey_header_id,
      label: v.survey_name,
      isDisabled:
        (v.amount_of_survey.length <= 0 && v.amount_of_country.length <= 0) ||
        (viewType === "all" && v.amount_of_survey.length <= 0),
    }));

  const CountryOptions =
    menuData.length > 1
      ? menuData &&
        menuData[1] &&
        menuData[1].amount_of_country.map((v) => ({
          value: v.country_id,
          label: v.country_name,
        }))
      : menuData &&
        menuData[0] &&
        menuData[0].amount_of_country.map((v) => ({
          value: v.country_id,
          label: v.country_name,
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

  const _handleSelectCountry = (SurveyHeaderId, e) => {
    localStorage.setItem("countryName", e.label);
    setCountry(e.value);
    setIsDisable(false);
    localStorage.setItem("countryId", e.value);
  };

  const _handleClearable = () => {
    setisClearable(!isClearable);
  };

  return (
    <ReportMenu
      isDisable={isDisable}
      ReportDetailData={menuData}
      SurveyNameOptions={SurveyNameOptions}
      countryName={countryName}
      CountryOptions={CountryOptions}
      surveyId={surveyId}
      isClearable={isClearable}
      viewType={viewType}
      _handleSelectChange={_handleSelectChange}
      _handleClearable={_handleClearable}
      _handleSelectSurvey={_handleSelectSurvey}
      _handleSelectCountry={_handleSelectCountry}
      _handleReport={_handleReport}
    />
  );
};

export default ReportMenuContainer;
