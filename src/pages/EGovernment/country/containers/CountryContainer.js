import React, { useState, useEffect } from "react";
import CountryMenu from "../../../EGovernment/country/components/CountryMenu";
import Countries from "../../../../assets/Countries.json";
import { AddCountryFetch, GetCountry } from "../../../../api/FetchCountry";
import { useAlert } from "react-alert";
import "../../../../App.css";
import { ESNavigator } from "../../../../tools/ES_Text.js";

const CountryContainer = (props) => {
  const [countryList, setCountryList] = useState([]);
  const [country, setCountry] = useState("");
  const [organization, setOrganization] = useState("");
  const [sectionCount, setSectionCount] = useState(0);
  const [disable,setDisable]=useState(false)
  const alert = useAlert();

  const CountryOptions = Countries.countries.map((v, k) => ({
    value: v.code,
    label: v.name,
  }));

  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const surveyHeaderName = localStorage.getItem("SurveyHeaderName");

  useEffect(() => {
    GetCountry({ userId, surveyHeaderId, token }, (err, data) => {
      setCountryList(data.payload[0]);
      setSectionCount(data.payload[1][0].surveyList);
    });
  }, [surveyHeaderId]);

  const _handleCountrySelect = (id, e) => {
    e !== null && setCountry(e.label);
    return;
  };

  const handleOrganization = (e) => {
    setOrganization(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true)
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

  const handleSelectCountry = (country, id, organization) => {
    // console.log("click country >> ", country, id);
    props.history.push("/surveySection");
    localStorage.setItem("countryName", country);
    localStorage.setItem("countryId", id);
    localStorage.setItem("bTypeId", 1);
    localStorage.setItem("organization", organization);
  };
  // console.log(sectionCount);
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
    <div className="container">
      <div className="p-2">
        <ESNavigator pathData={pathData} />
      </div>
      <CountryMenu
        sectionCount={sectionCount}
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
        disable={disable}
      />
    </div>
  );
};

export default CountryContainer;
