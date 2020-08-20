import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { ESInput } from "../../../tools/ES_Inputs";
import * as Colors from "../../../config/Color.config";

const AddSurveySectinsForm = (props) => {
  const {
    _handleDeviceChange,
    isDisabled,
    _handleSubmit,
    deviceData,
    noOfSurvey,
    _handleBack,
  } = props;

  const deviceOption = new Array(30)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-lg-6 col-md-12" onSubmit={_handleSubmit}>
          <h4
            className="font-weight-bold text-center"
            style={{ fontSize: "25px", color: Colors.PrimaryColor }}
          >
            Add Survey Section Name
          </h4>
          <div className="py-2" style={{ fontSize: "16px" }}>
            Please fill title of each Survey Section
          </div>
          {noOfSurvey.map((v, k) => (
            <div className="row form-group">
              <label className="col-lg-4 col-sm-12 pt-1 font-weight-bold">
                Page {k + 1} :
              </label>
              <div className="col-lg-8 col-sm-12">
                <ESInput placeHolder={"Section Name"} id={"surveyName"} />
              </div>
            </div>
          ))}
          <div className="row py-2">
          <div className="col-6">
              <ESButton customColor={Colors.Gray} text={"Back"} onClick={_handleBack} />
            </div>
            <div className="col-6">
              <ESButton text={"Save"} onClick={_handleSubmit} />
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddSurveySectinsForm;
