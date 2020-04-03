import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";
import { ESTextfield } from "../../../tools/ES_TextField";

const Building = props => {
  const {
    handleSelectCountry,
    handlePostalChange
  } = props;

  return (
    <div className="container">
      <div className="row justify-content-center px-4">
        <form
        className="col-md-6 col-sm-8 "
          style={{
            margin: 0,
            position: "absolute",
            top: "50%",
            transform: "translateY(-209.665px)"
          }}
        >
          <div className="font-weight-bold pb-2" style={{ fontSize: "25px" }}>
            Select Building for Survey
          </div>
          <div className="row py-1">
            <label className="col-12">Building Name:</label>
            <div className="col-12">
              <ESInput
                id={"buildingName"}
               
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 py-1">
              <label className="">Country:</label>

              <ESDropDown id={"Country"} onChange={handleSelectCountry} />
            </div>

            <div className="col-sm-12 col-lg-6 py-1">
              <label className="">Postal:</label>

              <ESInput id={"postal"} onChange={handlePostalChange} />
            </div>
          </div>
          <div className="row py-1">
            <label className="col-12">Address:</label>
            <div className="col-12">
              <ESInput
                id={"address"}
                value={
                  ""
                }
              />
            </div>
          </div>
          <div className="row py-2">
            <label className="col-12">Comment:</label>
            <div className="col-12">
              <ESTextfield id={"comment"} />
            </div>
          </div>
          <div className="row py-2 justify-content-end">
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
