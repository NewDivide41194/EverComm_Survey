import React, { useState, useEffect } from "react";
import { ESInput } from "../../../tools/ES_Inputs.js";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config";
import { ESDropDownSample } from "../../../tools/ES_DropDownSample.js";

const AddNewSurvey = (props) => {
  const {
    err,
    surveyHeader,
    _handleSurveyNameChange,
    _handleNext,
    sectionOption,
    _handleSelectSection,
    amountOfSection,
    disabled,
  } = props;
  // console.log("---->", sectionOption);
  const selectedOption = sectionOption;

  useEffect(() => {
    document.getElementById("surveyName").focus();
  }, [])

  return (
    <div className="container">
      <div className="row p-3 justify-content-center">
        <form className="col-lg-4 centeredDiv">
          <i
            className="fas fa-file-alt fa-3x pb-2 w-100 text-center"
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
            {
              err.surveyHeaderErr === undefined ? null : (
                <div
                className="text-danger d-flex flex-row justify-content-end pb-2"
                style={{ marginTop:"-25px", fontSize:12}}
                >{`*${err.surveyHeaderErr}`}</div>
              )
            }
            <ESInput
              placeHolder={"Survey Name"}
              id={"surveyName"}
              value={surveyHeader}
              onChange={_handleSurveyNameChange}
            />
          </div>
          <div className="py-2">
            <label>Number of Survey Sections</label>
            <ESDropDownSample
              id={"surveySection"}
              value={amountOfSection || sectionOption[0]}
              options={sectionOption}
              _handleSelect={_handleSelectSection}
            />
          </div>
          <div className="py-2">
            <ESButton type={"submit"} text={"NEXT"} onClick={_handleNext} disabled={disabled} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewSurvey;
