import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";
import { ESTextfield } from "../../../tools/ES_TextField";

const Building = props => {
  const {Companies,Buildings,handleSelect,SelectBuilding,value,handlePostalChange}=props
  console.log(value);
  
  return (
    <div className="container">
      <div className="row justify-content-center px-4">
        <form
          style={{
            margin: 0,
            position: "absolute",
            top: "50%",
            transform: "translateY(-209.665px)"
          }}
        >
          <div className="col-12 px-4">
            <div className="font-weight-bold pb-3" style={{ fontSize: "25px" }}>
              Select Building for Survey
            </div>
            <div className="row form-group">
              <div className="w-100">Building Name:</div>
              <div className="w-100">
                <ESDropDown id={"buildingName"} value={value} options={SelectBuilding} handleSelect={handleSelect}/>
              </div>
            </div>
            <div className="row form-group">
              <div className="w-100">Postal:</div>
              <div className="w-100">
                <ESInput id={"postal"} onChange={handlePostalChange}/>
              </div>
            </div>
            <div className="row form-group">
              <div className="w-100">Address:</div>
              <div className="w-100">
                <ESInput id={"address"} disabled/>
              </div>
            </div>
            <div className="row form-group">
              <div className="w-100">Comment:</div>
              <div className="w-100">
                <ESTextfield id={"comment"} />
              </div>
            </div>
            <div className="row form-group justify-content-end">
              <div className="w-50">
                <ESButton text={"Next"} small />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Building;
