import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import CountryMenu from "../../../EGovernment/country/components/CountryMenu";
// import SurveySectionContainer from "../surveySection/containers/SurveySectionContainer.js";
import Countries from "../../../../assets/Countries.json";
import { AddCountryFetch, GetCountry } from "../../../../api/FetchCountry";
import { useAlert } from "react-alert";
import "../../../../App.css";
import { ESNavigator } from "../../../../tools/ES_Text.js";

const CountryContainer = (props) => {
  const [countryList, setCountryList] = useState([]);
  const [country, setCountry] = useState("");
  const [surveyListCount, setSurveyCount] = useState(0);
  const [organization, setOrganization] = useState("");
  const [close, setClose] = useState(false);
  const token = localStorage.getItem("token");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const surveyHeaderName = localStorage.getItem("SurveyHeaderName");
  const userId = localStorage.getItem("userId");
  const alert = useAlert();

  const CountryOptions = Countries.countries.map((v, k) => ({
    value: v.code,
    label: v.name,
  }));

  useEffect(() => {
    GetCountry({ surveyHeaderId, userId, token }, (err, data) => {
      setCountryList(data.payload);      
    });
    setSurveyCount(data.length)
  }, []);

  const data = [
    {surveySection: 'The current situation of e-government', amountOfSurvey:2, totalSurvey:10 },
    {surveySection: 'Organization Background', amountOfSurvey:0 , totalSurvey:10},
    {surveySection: 'Legal', amountOfSurvey:1, totalSurvey:10 },
    {surveySection: 'Strategy', amountOfSurvey:0, totalSurvey:10}
  ]

  console.log('country list >> ', countryList)

  const _handleCountrySelect = (id, e) => {
    e !== null && setCountry(e.label);
    return;
  };

  const handleOrganization = (e) => {
    setOrganization(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (organization === "") {
      alert.error("Please Fill Organization!");
    } else {
      AddCountryFetch(
        { country, organization, surveyHeaderId, userId, token },
        (err, data) => {
          if (data.success === false) {
            alert.error(data.message);
          } else {
            alert.success("Added New Survey Info!");
            setTimeout(() => {
              window.location.reload();
            }, 4000);
          }
        }
      );
    }
  };

  const handleSelectCountry = (country, id) => {
    console.log('click country >> ', country, id)
    props.history.push("/surveySection");
    localStorage.setItem("countryName", country);
    localStorage.setItem("buildingId", id);
    localStorage.setItem("bTypeId", 1);
  };

  const pathData = [
    {
      title: "Survey Menu",
      pathName: `/admin/dashboard/manageSurveyList/${userId}`,
      linkTo: `/surveyMenu/${userId}`,
    },
    {
      title: surveyHeaderName,
      pathName: `/countryMenu`,
      linkTo: `/countryMenu`,
    },
  ];
  return (
    <div className="container p-3">
      <ESNavigator pathData={pathData} />
      {countryList.length > 0 && countryList ? (
        <CountryMenu
          surveyListCount={surveyListCount}
          countryList={countryList}
          CountryOptions={CountryOptions}
          country={country}
          organization={organization}
          handleCountrySelect={_handleCountrySelect}
          handleSubmit={handleSubmit}
          handleOrganization={handleOrganization}
          handleSelectCountry={handleSelectCountry}
          surveyHeaderId={surveyHeaderId}
          surveyHeaderName={surveyHeaderName}
          close={close}
        />
      ) : null}
    </div>
  );
};

export default CountryContainer;
