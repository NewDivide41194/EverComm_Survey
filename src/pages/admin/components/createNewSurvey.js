import React, { useState } from "react";
import { ESInput } from "../../../tools/ES_Inputs.js";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config";
import { ESDropDown } from "../../../tools/ES_DropDown.js";

const AddNewSurvey = (props) => {
  const { surveyName,handleSurveyNameChange,_handleNext,sectionOption,_handleSelectSection } = props;
  
  return (
    <div className="container">
      <div className="row p-3 justify-content-center">
        <div className="col-lg-4 centeredDiv">
          <i
            class="fas fa-file-alt fa-3x pb-2 w-100 text-center"
            style={{ color: Colors.Gray }}
          ></i>
          <h4
            className="w-100 font-weight-bold text-center"
            style={{ color: Colors.PrimaryColor }}
          >
            {"Create New Survey"}
          </h4>
          <div className="py-2">
            <label>Survey Title</label>
            <ESInput placeHolder={"Survey Name"} id={"surveyName"} value={surveyName} onChange={handleSurveyNameChange}/>
          </div>
          <div className="py-2">
            <label>Number of Survey Sections</label>
            <ESDropDown id={"surveySection"} options={sectionOption} _handleSelect={_handleSelectSection}/>
          </div>
          <div className="py-2">

          <ESButton text={"NEXT"} onClick={_handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewSurvey;
