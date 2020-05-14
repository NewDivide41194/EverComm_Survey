import React, { useState, useEffect } from "react";
import Building from "../components/Building.js";
import Countries from "../../../assets/Countries.json";
import { BuildingFetch } from "../../../api/FetchBuilding";
import { withRouter } from "react-router-dom";
import { useAlert } from "react-alert";

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

  const Timeout = () => {
    setTimeout(() => setErr({}), 5000);
  };
  const SpecialCharacterFormat = /[`!#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;

  const _handleBuildingNameChange = (e) => {
    if (!SpecialCharacterFormat.test(e.target.value)) {
      setBuildingName(e.target.value.replace(/\s+/g, " ").trimStart());
    } else
      setErr({ buildingNameErr: "Special Characters Not allow " }, Timeout());
  };
  const _handlePostalChange = (e) => {
    setPostal(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleAddressChange = (e) => {
    setAddress(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleClientCompanyChange = (e) => {
    if (!SpecialCharacterFormat.test(e.target.value)) {
      setClientCompany(e.target.value.replace(/\s+/g, " ").trimStart());
    } else
      setErr({ clientCompanyErr: "Special Characters Not allow " }, Timeout());
  };
  const _handleCommentChange = (e) => {
    if (!SpecialCharacterFormat.test(e.target.value)) {
      setComment(e.target.value.replace(/\s+/g, " ").trimStart());
    } else setErr({ commentErr: "Special Characters Not allow " }, Timeout());
  };

  const _handleCountrySelect = (quesId, e) => {
    setCountry(e.label);
  };

  const errStyle = {
    marginTop: "-25px",
    fontSize: 12,
  };

  const errClassName = "text-danger d-flex flex-row justify-content-end pb-2";

  const _handleSubmit = (e) => {
    e.preventDefault();

    if (clientCompany === "") {
      setErr({
        clientCompanyErr: "Fill Client Company",
      });
      document.getElementById("clientCompany").focus();
    } else if (buildingName === "") {
      setErr({
        buildingNameErr: "Fill BuildingName",
      });
      document.getElementById("buildingName").focus();
      return;
    } else if (country === "") {
      setErr({
        countryErr: "select country",
      });
      return;
    } else if (postal === "") {
      setErr({
        postalErr: "Fill Postal",
      });
      document.getElementById("postal").focus();
      return;
    } else if (address === "") {
      setErr({
        addressErr: "Fill Address",
      });
      document.getElementById("address").focus();
      return;
    } else if (comment === "") {
      setErr({
        commentErr: "Fill Comment",
      });
      document.getElementById("comment").focus();
      return;
    } else {
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
  console.log("disable", { isDisabled });

  const CountryOptions = Countries.countries.map((v, k) => ({
    value: v.code,
    label: v.name,
  }));

  useEffect(() => {
    document.getElementById("clientCompany").focus();
  }, []);
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
