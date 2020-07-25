import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESDropDown } from "../../../tools/ES_DropDown";

const DeviceAmount = (props) => {
  const {
    _handleDeviceChange,
    isDisabled,
    _handleSubmit,
    deviceData,
    _handleBack,
  } = props;

  const deviceOption = new Array(30)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));

  return (
    <div className="row justify-content-center py-5">
      <form className="col-lg-6 col-md-8" onSubmit={_handleSubmit}>
        <div
          className="font-weight-bold text-center"
          style={{ fontSize: "25px" }}
        >
          Chiller plant Information
        </div>
        <div className="pt-5 font-weight-bold" style={{ fontSize: "15px" }}>
          Please Select Amount of Devices
        </div>
        <div className="py-2 row form-group">
          <div className="pb-2 col-6">
            <label htmlFor="chiller">Chiller</label>
            <ESDropDown
              notClearable
              disabled={isDisabled}
              id={"chiller"}
              name={"chiller"}
              _handleSelect={_handleDeviceChange}
              options={deviceOption}
              value={deviceData.chiller}
              defaultValue={deviceOption[2]}
            />
          </div>
          <div className="pb-2 col-6">
            <label htmlFor="condenser">Condenser</label>

            <ESDropDown
              notClearable
              disabled={isDisabled}
              id={"condenser"}
              name={"condenser"}
              _handleSelect={_handleDeviceChange}
              options={deviceOption}
              value={deviceData.condenser}
              defaultValue={deviceOption[2]}
            />
          </div>
          <div className="pb-2 col-6">
            <label htmlFor="evaporator">Evaporator</label>

            <ESDropDown
              notClearable
              disabled={isDisabled}
              id={"evaporator"}
              name="evaporator"
              _handleSelect={_handleDeviceChange}
              options={deviceOption}
              value={deviceData.evaporator}
              defaultValue={deviceOption[2]}
            />
          </div>
          
          <div className="pb-4 col-6">
            <label htmlFor="coolingTower">Cooling Tower</label>

            <ESDropDown
              notClearable
              disabled={isDisabled}
              id={"coolingTower"}
              _handleSelect={_handleDeviceChange}
              name="coolingTower"
              options={deviceOption}
              value={deviceData.coolingTower}
              defaultValue={deviceOption[2]}
            />
          </div>
          <div className="col-6">
          <ESButton
            disabled={isDisabled}
            id={"back"}
            text={"Back"}
            onClick={_handleBack}
            small
          />
        </div>
          <div className="col-6">
          <ESButton
            disabled={isDisabled}
            id={"submit"}
            text={"Start Survey"}
            type={"submit"}
            onClick={_handleSubmit}
            small
          />
        </div>
       

        </div>
         
      </form>
    </div>
  );
};
export default DeviceAmount;
