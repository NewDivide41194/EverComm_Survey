import React, { useState } from "react";
import AddNewSurvey from "./CreateNewSurvey";
import AddSurveySectinsForm from "./AddSurveySections";

const Survey = (props) => {
  const {
    page,
    err,
    _handleBack,
    _handleNext,
    _handleSubmit,
    sectionOption,
    noOfSurvey,
    _handleSelectSection,
    surveyHeader,
    _handleSurveyNameChange,
    _handleSectionChange,
    amountOfSection,
    disabled
  } = props;
  const userId = localStorage.getItem("userId");

  return page === 0 ? (
    <AddNewSurvey
      err={err}
      _handleNext={_handleNext}
      sectionOption={sectionOption}
      _handleSurveyNameChange={_handleSurveyNameChange}
      _handleSelectSection={_handleSelectSection}
      surveyHeader={surveyHeader}
      amountOfSection={amountOfSection}
      disabled={disabled}
    />
  ) : (
    <AddSurveySectinsForm
      _handleBack={_handleBack}
      noOfSurvey={noOfSurvey}
      _handleSectionChange={_handleSectionChange}
      _handleSubmit={_handleSubmit}

    />
  );
};

export default Survey;
