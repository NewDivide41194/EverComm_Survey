import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";
import { ESTextfield } from "../../../tools/ES_TextField";

const Building = props => {
  const {
    Buildings,
    handleSelect,
    SelectBuilding,
    handleSelectCountry,
    selectIndex,
    selectValue,
    handlePostalChange
  } = props;

  return (
    <div className="container">
      <div className="row justify-content-center px-4">
        <form
        className="col-md-6 col-sm-8"
          style={{
            margin: 0,
            position: "absolute",
            top: "50%",
            transform: "translateY(-209.665px)"
          }}
        >
            <div className="font-weight-bold pb-3" style={{ fontSize: "25px" }}>
              Select Building for Survey
            </div>
            <div className="row form-group">
              <div className="col-12">Building Name:</div>
              <div className="col-12">
                <ESDropDown
                  id={"buildingName"}
                  value={selectValue}
                  options={SelectBuilding}
                  handleSelect={handleSelect}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-6 form-group">
              <div className="">Country:</div>

                <ESDropDown id={"Country"} onChange={handleSelectCountry} />
                
              </div>
              
              <div className="col-sm-12 col-lg-6 form-group">
              <div className="">Postal:</div>

                <ESInput id={"postal"} onChange={handlePostalChange} />
                
              </div>
            </div>
            <div className="row form-group">
              <div className="col-12">Address:</div>
              <div className="col-12">
                <ESInput
                  id={"address"}
                  value={selectValue ? Buildings.map((v, k) => v.address)[selectIndex] : ""}
                  disabled
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-12">Comment:</div>
              <div className="col-12">
                <ESTextfield id={"comment"} />
              </div>
            </div>
            <div className="row form-group justify-content-end">
              <div className="col-6">
                <ESButton text={"Next"} small />
              </div>
            </div>
        </form>
      </div>
    </div>
  );
};
export default Building;
