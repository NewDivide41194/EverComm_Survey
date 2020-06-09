import React, { useEffect, useState } from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { ESTextfield } from "../../../tools/ES_TextField";

const Building = (props) => {
  const {
    buildingName,
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
    CountryOptions,
    handleSubmit,
    err,
    errStyle,
    isDisabled,
    deviceOption
  } = props;
  const errClassName = "text-danger d-flex flex-row justify-content-end pb-1";
  const amountOfDevice = 0;
  

  console.log(deviceOption);

  return (
    <div className="container">
      <div className="row justify-content-center py-4">
        <form className="col-lg-6 col-md-8" onSubmit={handleSubmit}>
          <div
            className="font-weight-bold text-center"
            style={{ fontSize: "25px" }}
          >
            Add Building for New Survey
          </div>
          <div className="row form-group">
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
            {/* <div className="py-2 col-sm-12 col-lg-3">
              <label htmlFor="country">Chiller</label>
              {err.countryErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle, marginTop: "-25px" }}
                >{`*${err.countryErr}`}</div>
              )}
              <ESDropDown
                disabled={isDisabled}
                id={"country"}
                _handleSelect={handleSelectCountry}
                options={CountryOptions}
                value={country}
              />
            </div>
            <div className="py-2 col-sm-12 col-lg-3">
              <label htmlFor="country">Condenser</label>
              {err.countryErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle, marginTop: "-25px" }}
                >{`*${err.countryErr}`}</div>
              )}
              <ESDropDown
                disabled={isDisabled}
                id={"country"}
                _handleSelect={handleSelectCountry}
                options={CountryOptions}
                value={country}
              />
            </div>
            <div className="py-2 col-sm-12 col-lg-3">
              <label htmlFor="country">Evaporator</label>
              {err.countryErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle, marginTop: "-25px" }}
                >{`*${err.countryErr}`}</div>
              )}
              <ESDropDown
                disabled={isDisabled}
                id={"country"}
                _handleSelect={handleSelectCountry}
                options={CountryOptions}
                value={country}
              />
            </div>
            <div className="py-2 col-sm-12 col-lg-3">
              <label htmlFor="country">Cooling Tower</label>
              {err.countryErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle, marginTop: "-25px" }}
                >{`*${err.countryErr}`}</div>
              )}
              <ESDropDown
                disabled={isDisabled}
                id={"country"}
                _handleSelect={handleSelectCountry}
                options={CountryOptions}
                value={country}
              />
            </div> */}
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
            <div className="col-12 py-2">
              <ESButton
                disabled={isDisabled}
                id={"Next"}
                text={"Next"}
                type={"submit"}
                onClick={handleSubmit}
                small
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Building;
