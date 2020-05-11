import React from "react";
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
  } = props;
  const errClassName = "text-danger d-flex flex-row justify-content-end pb-1";

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <form className="col-lg-6 col-md-8" onSubmit={handleSubmit}>
          <div
            className="font-weight-bold pb-2 text-center"
            style={{ fontSize: "25px" }}
          >
            Add Building for New Survey
          </div>
          <div className="row form-group">
            <div className="py-2 col-12">
              <label>Client Company</label>
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
              <label>Building Name</label>
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
              <label>Country</label>
              {err.countryErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle, marginTop: "-25px" }}
                >{`*${err.countryErr}`}</div>
              )}
              <ESDropDown
                disabled={isDisabled}
                id={"Country"}
                _handleSelect={handleSelectCountry}
                options={CountryOptions}
                value={country}
              />
            </div>
            <div className="py-2 col-sm-12 col-lg-6">
              <label>Postal</label>
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
              <label>Address</label>
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
              <label>Comment</label>
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
