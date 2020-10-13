import React from "react";
import AddNewSurvey from "./createNewSurvey.js";
import AddSurveySectinsForm from "./AddSurveySections";

const Survey = (props) => {
  const {
    page,
    err,
    value,
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
    disabled,
    surveySections
  } = props;

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
      surveySections={surveySections}
      value={value}
    />
  );
};

export default Survey;
