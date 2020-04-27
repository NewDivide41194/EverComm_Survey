import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";
import { ESTextfield } from "../../../tools/ES_TextField";

const Building = props => {
  const {
    buildingName,
    postal,
    address,
    clientCompany,
    comment,
    country,
    handleBuildingNameChange,
    handlePostalChange ,
    handleAddressChange,
    handleClientCompanyChange, 
    handleCommentChange,
    handleSelectCountry,
    CountryOptions,
    handleSubmit,
    err,
    errStyle
  } = props;

  return (
    <div className="container py-4">
      <div className="row justify-content-center px-4 ">
        <form
        className="col-lg-6 col-sm-10"
          style={{
            margin: 0,
            position: "relative",
         
          }}
          onSubmit={handleSubmit}
        >
          <div className="font-weight-bold pb-2 text-center" style={{ fontSize: "25px" }}>
            Add Building for New Survey
          </div>
          <div className="row py-1">
            <label className="col-12">Client Company:</label>
            { err.clientCompanyErr === undefined ? null : (
              <div className="text-right col-lg-12" style={{...errStyle}}>{`*${err.clientCompanyErr }`}</div>
            )}
            <div className="col-12">
                <ESInput 
                  id={"clientCompany"} 
                  placeHolder={"Your ClientCompany"}
                  value={clientCompany}
                  onChange={e=>handleClientCompanyChange(e)}
                />
            </div>
          </div>
          
          <div className="row py-1">
            <label className="col-12">Building Name:</label>
            { err.buildingNameErr === undefined ? null : (
              <div className="text-right col-lg-12" style={{...errStyle}}>{`*${err.buildingNameErr }`}</div>
            )}
            <div className="col-12">
              <ESInput
                id={"buildingName"}
                placeHolder={"Building Name"}
                value={buildingName}
                onChange={e=>handleBuildingNameChange(e)}
               />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 py-1">
              <label className="">Country:</label>
              { err.countryErr=== undefined ? null : (
              <div className="text-right col-lg-12" style={{...errStyle, marginTop: '-25px'}}>{`*${err.countryErr }`}</div>
            )}
              <ESDropDown id={"Country"} _handleSelect={handleSelectCountry} options={CountryOptions} value={country} />
            </div>

            <div className="col-sm-12 col-lg-6 py-1">
              <label className="">Postal:</label>
              { err.postalErr === undefined ? null : (
              <div className="text-right col-lg-12" style={{...errStyle, marginTop: '-25px'}}>{`*${err.postalErr }`}</div>
              )}
              <ESInput 
                id={"postal"}
                placeHolder={"Postal"}
                value={postal} 
                onChange={e=> handlePostalChange (e)} 
              />
            </div>
          </div>
          <div className="row py-1">
            <label className="col-12">Address:</label>
            { err.addressErr === undefined ? null : (
              <div className="text-right col-lg-12" style={{...errStyle}}>{`*${err.addressErr }`}</div>
            )}
            <div className="col-12">
              <ESInput
                id={"address"}
                placeHolder={"Address"}
                value={address}
                onChange={e=>handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="row py-2">
            <label className="col-12">Comment:</label>
            { err.commentErr === undefined ? null : (
              <div className="text-right col-lg-12" style={{...errStyle}}>{`*${err.commentErr }`}</div>
            )}
            <div className="col-12">
              <ESTextfield 
                id={"comment"}
                placeHolder={"Comment"} 
                value={comment}
                onChange={e=>handleCommentChange(e)}  
              />
            </div>
          </div>
          <div className="row py-2 justify-content-end">
            <div className="col-6">
              <ESButton id={"Next"} text={"Next"} type={"submit"}  onClick={handleSubmit} small  />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Building;
