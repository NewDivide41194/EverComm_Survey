import React, { useState, useEffect } from "react";
import Building from "../components/Building.js";
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
  const alert = useAlert();
  const token = localStorage.getItem("token");
  const buildingId = localStorage.getItem("buildingId");
  const userId = localStorage.getItem("userId");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");

  const errStyle = {
    marginTop: "-25px",
    fontSize: 12,
  };

  const errClassName = "text-danger d-flex flex-row justify-content-end pb-2";

  useEffect(() => {
    document.getElementById("clientCompany").focus();
  }, []);

  const _handleSubmit = (e) => {
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
      setIsDisabled(!isDisabled);
      BuildingFetch(
        {
          clientCompany,
          buildingName,
          postal,
          address,
          comment,
          country,
          userId,
          surveyHeaderId,
          token,
        },
        (err, data) => {
          if (data.success === false) {
            alert.error(data.message);
            setIsDisabled(isDisabled);
          } else {
            localStorage.setItem("buildingId", data.payload.insertId);
            props.history.push(
              `/question/${userId}/${surveyHeaderId}/${buildingId}`
            );
            alert.success("submitted");
          }
        }
      );
    }
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

  const _handleCountrySelect = (quesId, e) => {
    setCountry(e.label);
  };

  const CountryOptions = Countries.countries.map((v, k) => ({
    value: v.code,
    label: v.name,
  }));

  return (
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
      handleSubmit={_handleSubmit}
      err={err}
      errStyle={errStyle}
      errClassName={errClassName}
      isDisabled={isDisabled}
    />
  );
};

export default withRouter(BuildingContainer);
