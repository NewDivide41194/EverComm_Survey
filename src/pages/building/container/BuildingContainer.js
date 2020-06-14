import React, { useState, useEffect } from "react";
import Building from "../components/Building.js";
import DeviceAmount from "../components/DeviceAmount.js";
import Countries from "../../../assets/Countries.json";
import { BuildingFetch } from "../../../api/FetchBuilding";
import { withRouter } from "react-router-dom";
import { useAlert } from "react-alert";
import { BuildingFormValidation } from "../../../helper/formValidation.js";

const BuildingContainer = (props) => {
  const [country, setCountry] = useState("");
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
  const [deviceData, setDeviceData] = useState({chiller:3,condenser:3,evaporator:3,coolingTower:3});
  const errStyle = {
    marginTop: "-25px",
    fontSize: 12,
  };

  const errClassName = "text-danger d-flex flex-row justify-content-end pb-2";

  useEffect(() => {
    document.getElementById("clientCompany").focus();
  }, []);

  const _handleNext = (e) => {
    e.preventDefault();
    const data = {
      clientCompany,
      buildingName,
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
        postal,
        address,
        comment,
        country,
        deviceData,
        userId,
        surveyHeaderId,
        token,
      },
      (err, data) => {
        if (data.success === false) {
          alert.error(data.message);
          setIsDisabled(isDisabled);
        } else {
          localStorage.setItem("buildingName", buildingName);
          localStorage.setItem("buildingId", data.payload.insertId);
          props.history.push(
            `/question/${userId}/${surveyHeaderId}/${buildingId}`
          );
          alert.success("Added New Survey!");
        }
      }
    );
  };
  const _handleBuildingNameChange = (e) => {
    setBuildingName(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handlePostalChange = (e) => {
    setPostal(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleAddressChange = (e) => {
    setAddress(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleClientCompanyChange = (e) => {
    setClientCompany(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleCommentChange = (e) => {
    setComment(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleCountrySelect = (id, e) => {
    e !== null && setCountry(e.label);
    return;
  };

  const _handleDeviceChange = (id,e) => {
  console.log(id,e);

      const value=e.value
    setDeviceData(
    {...deviceData,
    [id]:value}
  )  
};
console.log(country);


  const CountryOptions = Countries.countries.map((v, k) => ({
    value: v.code,
    label: v.name,
  }));
  
  return (
    <div className="container">
      {chillerPage === 1 ? (
        <Building
          buildingName={buildingName}
          postal={postal}
          address={address}
          clientCompany={clientCompany}
          comment={comment}
          CountryOptions={CountryOptions}
          country={country}
          handleBuildingNameChange={_handleBuildingNameChange}
          handlePostalChange={_handlePostalChange}
          handleAddressChange={_handleAddressChange}
          handleClientCompanyChange={_handleClientCompanyChange}
          handleCommentChange={_handleCommentChange}
          handleSelectCountry={_handleCountrySelect}
          handleNext={_handleNext}
          err={err}
          errStyle={errStyle}
          errClassName={errClassName}
          isDisabled={isDisabled}
        />
      ) : (
        <DeviceAmount
          //handleDeviceSelect={_handleDeviceSelect}
          deviceData={deviceData}
          err={err}
          errStyle={errStyle}
          errClassName={errClassName}
          isDisabled={isDisabled}
          _handleDeviceChange={_handleDeviceChange}
          _handleSubmit={_handleSubmit}
          country={country}
        />
      )}
    </div>
  );
};

export default withRouter(BuildingContainer);
