import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { ESDropDownBuilding } from "../../../tools/ES_DropDown_Creatable";
import { ESTextfield } from "../../../tools/ES_TextField";
import ESCheckBox from "../../../tools/ES_CheckBox";

const Building = (props) => {
  const {
    buildingName,
    buildingType,
    postal,
    address,
    clientCompany,
    comment,
    country,
    handleBuildingNameChange,
    handlePostalChange,
    handleAddressChange,
    handleClientCompanyChange,
    handleCommentChange,
    handleSelectCountry,
    handleBuildingTypeChange,
    CountryOptions,
    BuildingOption,
    handleNext,
    err,
    errStyle,
    isDisabled,
    handleBMSCheck,
    BMS,
  } = props;
  const errClassName = "text-danger d-flex flex-row justify-content-end pb-1";
  return (
    <div className="row justify-content-center py-4">
      <form
        className="col-lg-5 col-md-8"
        onSubmit={handleNext}
        // style={{
        //   position: "absolute",
        //   top: "50%",
        //   transform: "translateY(-50%)"
        // }}
      >
        <div
          className="font-weight-bold text-center pb-3"
          style={{ fontSize: "25px" }}
        >
          Add Building for New Survey
        </div>
        <div className="row form-group">
          <div className="py-2 col-12">
            <label htmlFor="buildingName">Building Name</label>
            {err.buildingNameErr === undefined ? null : (
              <div
                className={errClassName}
                style={{ ...errStyle }}
              >{`*${err.buildingNameErr}`}</div>
            )}
            <ESInput
              disabled={isDisabled}
              id={"buildingName"}
              placeHolder={"Building Name"}
              value={buildingName}
              onChange={(e) => handleBuildingNameChange(e)}
            />
          </div>
          <div className="py-2 col-12">
            <label htmlFor="#">Building Type</label>
            {err.buildingTypeErr === undefined ? null : (
              <div
                className={errClassName}
                style={{ ...errStyle, marginTop: "-25px" }}
              >{`*${err.buildingTypeErr}`}</div>
            )}
            <ESDropDownBuilding
              disabled={isDisabled}
              notClearable
              id={"BuildingType"}
              _handleSelect={handleBuildingTypeChange}
              options={BuildingOption}
              value={buildingType}
              placeHolder={"If other, you can create it"}
            />
          </div>
          <div className="py-2 col-12">
            <label htmlFor="clientCompany">Client Company</label>
            {err.clientCompanyErr === undefined ? null : (
              <div
                className={errClassName}
                style={{ ...errStyle }}
              >{`*${err.clientCompanyErr}`}</div>
            )}
            <ESInput
              disabled={isDisabled}
              id={"clientCompany"}
              placeHolder={"Your ClientCompany"}
              value={clientCompany}
              onChange={(e) => handleClientCompanyChange(e)}
            />
          </div>

          <div className="py-2 col-sm-12 col-lg-6">
            <label htmlFor="country">Country</label>
            {err.countryErr === undefined ? null : (
              <div
                className={errClassName}
                style={{ ...errStyle, marginTop: "-25px" }}
              >{`*${err.countryErr}`}</div>
            )}
            <ESDropDown
              disabled={isDisabled}
              id={"country"}
              notClearable
              _handleSelect={handleSelectCountry}
              options={CountryOptions}
              value={country}
            />
          </div>
          <div className="py-2 col-sm-12 col-lg-6">
            <label htmlFor="postal">Postal</label>
            {err.postalErr === undefined ? null : (
              <div
                className={errClassName}
                style={{ ...errStyle, marginTop: "-25px" }}
              >{`*${err.postalErr}`}</div>
            )}
            <ESInput
              disabled={isDisabled}
              id={"postal"}
              placeHolder={"Postal"}
              value={postal}
              onChange={(e) => handlePostalChange(e)}
            />
          </div>

          <div className="py-2 col-12">
            <label htmlFor="address">Address</label>
            {err.addressErr === undefined ? null : (
              <div
                className={errClassName}
                style={{ ...errStyle }}
              >{`*${err.addressErr}`}</div>
            )}
            <ESInput
              disabled={isDisabled}
              id={"address"}
              placeHolder={"Address"}
              value={address}
              onChange={(e) => handleAddressChange(e)}
            />
          </div>
          <div className="py-2 col-12">
            <label htmlFor="comment">Comment</label>
            {err.commentErr === undefined ? null : (
              <div
                className={errClassName}
                style={{ ...errStyle }}
              >{`*${err.commentErr}`}</div>
            )}
            <ESTextfield
              disabled={isDisabled}
              id={"comment"}
              placeHolder={"Comment"}
              value={comment}
              onChange={(e) => handleCommentChange(e)}
            />
          </div>
          <div className="py-2 col-12">
            <ESCheckBox
              disabled={isDisabled}
              checked={BMS}
              id={"comment"}
              placeHolder={"Comment"}
              value={[
                {
                  option_choice_id: 1,
                  option_choice_name: "Building Management System Installed",
                },
              ]}
              _handleChange={(e) => handleBMSCheck(e)}
              className={"w-100"}
            />
          </div>
          <div className="col-12 py-2">
            <ESButton
              disabled={isDisabled}
              id={"Next"}
              text={"Next"}
              type={"submit"}
              onClick={handleNext}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Building;
