import React, { useState } from "react";
import AddNewSurvey from "./CreateNewSurvey";
import AddSurveySectinsForm from "./AddSurveySections";

const Survey = (props) => {
  const {page,_handleBack,_handleNext, sectionOption,noOfSurvey,_handleSelectSection}=props
  const userId = localStorage.getItem("userId");

  return page === 0 ? (
    <AddNewSurvey _handleNext={_handleNext} sectionOption={sectionOption} _handleSelectSection={_handleSelectSection} />
  ) : (
    <AddSurveySectinsForm  _handleBack={_handleBack} noOfSurvey={noOfSurvey}/>
  );
};

export default Survey;
