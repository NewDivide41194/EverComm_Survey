import React, { useState, useEffect } from "react";
import Building from "../components/Building.js";
import DeviceAmount from "../components/DeviceAmount.js";
import Countries from "../../../assets/Countries.json";
// import BuildingType from "../../../assets/BuildingType.json";
import { BuildingFetch, GetBuildingType } from "../../../api/FetchBuilding";
import { withRouter } from "react-router-dom";
import { useAlert } from "react-alert";
import { BuildingFormValidation } from "../../../helper/formValidation.js";

const BuildingContainer = (props) => {
  const [country, setCountry] = useState("");
  const [buildingTypeData, setBuildingTypeData] = useState([]);
  const [buildingType, setBuildingType] = useState("");
  const [buildingTypeId,setBuildingTypeId]=useState(null)
  const [BMS,setBMS]=useState(false)
  const [buildingName, setBuildingName] = useState("");
  const [postal, setPostal] = useState("");
  const [address, setAddress] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [comment, setComment] = useState("");
  const [err, setErr] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [chillerPage, setChillerPage] = useState(1);
  const alert = useAlert();
  const token = localStorage.getItem("token");
  const buildingId = localStorage.getItem("buildingId");
  const userId = localStorage.getItem("userId");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const [deviceData, setDeviceData] = useState({
    chiller: 3,
    condenser: 3,
    evaporator: 3,
    coolingTower: 3,
  });
  const errStyle = {
    marginTop: "-25px",
    fontSize: 12,
  };

  const errClassName = "text-danger d-flex flex-row justify-content-end pb-2";

  useEffect(() => {
    // document.getElementById("clientCompany").focus();
    GetBuildingType({token},(err, data) => {
      setBuildingTypeData(data);
    }); 
  }, []);

console.log(BMS);
  const _handleBack = (e) => {
    setChillerPage(chillerPage - 1);
  };
  const _handleNext = (e) => {
    e.preventDefault();
    const data = {
      buildingName,
      buildingType,
      buildingTypeId,
      clientCompany,
      country,
      postal,
      address,
      comment,
    };

    const validatedErr = BuildingFormValidation(data);
    setErr(validatedErr);
    if (validatedErr.clientCompanyErr) {
      document.getElementById("clientCompany").focus();
    } else if (validatedErr.buildingNameErr) {
      document.getElementById("buildingName").focus();
    } else if (validatedErr.postalErr) {
      document.getElementById("postal").focus();
    } else if (validatedErr.addressErr) {
      document.getElementById("address").focus();
    } else if (validatedErr.commentErr) {
      document.getElementById("comment").focus();
    } else if (validatedErr.buildingTypeErr) {
      document.getElementById("buildingType");
    }
    if (Object.keys(validatedErr).length === 0) {
      setErr({});
      setChillerPage(chillerPage + 1);
    }
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    BuildingFetch(
      {
        clientCompany,
        buildingName,
        buildingType,
        buildingTypeId,
        postal,
        address,
        comment,
        country,
        deviceData,
        userId,
        surveyHeaderId,
        BMS,
        token,
      },
      (err, data) => {
        if (data.success === false) {
          alert.error(data.message);
          setIsDisabled(isDisabled);
        } else {
          localStorage.setItem("buildingName", buildingName);
          localStorage.setItem("buildingId", data.payload.insertId);
          localStorage.setItem("buildingType",buildingType)
          localStorage.setItem("bTypeId",buildingTypeId)
          props.history.push(
            `/question/${userId}/${surveyHeaderId}/${buildingId}`
          );
          alert.success("Added New Survey!");
        }
      }
    );
  };
  const _handleBuildingNameChange = (e) => {
    setErr({});
    setBuildingName(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handlePostalChange = (e) => {
    setErr({});
    setPostal(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleAddressChange = (e) => {
    setErr({});
    setAddress(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleClientCompanyChange = (e) => {
    setErr({});
    setClientCompany(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleCommentChange = (e) => {
    setErr({});
    setComment(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleBMSCheck=()=>{
    setBMS(!BMS)
  }
  const _handleCountrySelect = (id, e) => {
    setErr({});
    e !== null && setCountry(e.label);
    return;
  };

  const _handleBuildingTypeSelect = (id, e) => {
    console.log(e);
    setErr({});
    e !== null && setBuildingType(e.label);
    setBuildingTypeId(typeof(e.value)==="string"?6:e.value)
    return;
  };

  const _handleDeviceChange = (id, e) => {
    const value = e.value;
    setDeviceData({ ...deviceData, [id]: value });
  };

  const CountryOptions = Countries.countries.map((v, k) => ({
    value: v.code,
    label: v.name,
  }));

  const BuildingOptions = buildingTypeData.map((v, k) => ({
    value: v.id,
    label: v.building_type,
  }));
console.log(buildingTypeId,buildingType);
  return (
    <div className="container">
      {chillerPage === 1 ? (
        <Building
          buildingName={buildingName}
          buildingType={buildingType}
          postal={postal}
          address={address}
          clientCompany={clientCompany}
          comment={comment}
          CountryOptions={CountryOptions}
          BuildingOption={BuildingOptions}
          country={country}
          handleBuildingTypeChange={_handleBuildingTypeSelect}
          handleBuildingNameChange={_handleBuildingNameChange}
          handlePostalChange={_handlePostalChange}
          handleAddressChange={_handleAddressChange}
          handleClientCompanyChange={_handleClientCompanyChange}
          handleCommentChange={_handleCommentChange}
          handleSelectCountry={_handleCountrySelect}
          handleNext={_handleNext}
          handleBMSCheck={_handleBMSCheck}
          BMS={BMS}
          err={err}
          errStyle={errStyle}
          errClassName={errClassName}
          isDisabled={isDisabled}
        />
      ) : (
        <DeviceAmount
          _handleBack={_handleBack}
          deviceData={deviceData}
          err={err}
          errStyle={errStyle}
          errClassName={errClassName}
          isDisabled={isDisabled}
          _handleDeviceChange={_handleDeviceChange}
          _handleSubmit={_handleSubmit}
        />
      )}
    </div>
  );
};

export default withRouter(BuildingContainer);
