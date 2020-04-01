import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";

const Building = props => {
  return (
    <div className="container">
      <div className="row justify-content-center px-4">
        <form
          style={{
            margin: 0,
            position: "absolute",
            top: "30%"
          }}
        >
          <div className="col-12 px-4">
            <div className="font-weight-bold pb-3" style={{ fontSize: "25px" }}>
              Select Building for Survey
            </div>
            <div className="row form-group">
              <div className="w-100">Building Name:</div>
              <div className="w-100">
                <ESDropDown id={"buildingName"} />
              </div>
            </div>
            <div className="row form-group">
              <div className="w-100">Postal:</div>
              <div className="w-100">
                <ESInput id={"postal"} />
              </div>
            </div>
            <div className="row form-group">
              <div className="w-100">Address:</div>
              <div className="w-100">
                <ESInput id={"address"} />
              </div>
            </div>
            <div className="row form-group">
              <div className="w-100">Comment:</div>
              <div className="w-100">
                <ESInput id={"comment"} />
              </div>
            </div>
            <div className="row form-group justify-content-end">
              <div className="w-50">
                <ESButton text={"Next"} small/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Building;

const Compannies= [
    {
        company_id: 1,
        company_name: "Kumo",
        buildings: [
                   {
                building_id: 1,
                building_name: "Kumo Chiller",
                address: "64*105 Mandalay"
                },
                  {
                building_id: 2,
                building_name: "Kumo Thitsar",
                address: "62*30 Mandalay"
                }
               ]
    },
    {
        company_id: 1,
        company_name: "Evercomm",
        buildings: [
                   {
                building_id: 3,
                building_name: "Evercomm Chiller",
                address: "Singapore"
                },
                  {
                building_id: 4,
                building_name: "Evercomm Thitsar",
                address: "Singapore"
                }
               ]
    }
    ]