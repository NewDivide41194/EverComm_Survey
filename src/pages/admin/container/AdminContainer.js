import React, { useState } from "react";
import Survey from "../components/Survey";
import { AddNewSurvey } from "../../../api/admin/FetchSurvey";
import { useAlert } from "react-alert";
import { SurveyValidation } from "../../../helper/formValidation";

const AdminContainer = () => {
  const [page, setPage] = useState(0);
  const [err, setErr] = useState({});
  const [surveyHeader, setSurveyHeader] = useState("");
  const [amountOfSection, setAmountOfSection] = useState(null);
  const [surveySections, setSurveySection] = useState([]);
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const _handleNext = (e) => {
    e.preventDefault();
    const data = { surveyHeader };
    const validedErr = SurveyValidation(data);
    setErr(validedErr);
    if (Object.keys(validedErr).length === 0) {
      setErr({});
      setPage(page + 1);
    }
  };
  const _handleBack = () => {
    setPage(page - 1);
  };
  const token = localStorage.getItem("token");
  const surveySectionsNames = { sectionName: "", pageNo: 0, active: 0 };
  const alert = useAlert();
  const isQuesId = (pageNo) => {
    console.log(pageNo);
    return surveySections.filter((e) => e.pageNo === pageNo);
  };
  const isQuesIdIndex = (pageNo) => {
    console.log(pageNo);
    return surveySections.findIndex((e) => e.pageNo === pageNo);
  };
  const sectionOption = new Array(10)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));
  const noOfSurvey = new Array(amountOfSection && amountOfSection.value).fill(
    null
  );
  const _handleSectionChange = (e) => {
    const pageNo = parseInt(e.target.id);

    const ImportText = e.target.value.replace(/\s+/g, " ").trimStart();
    const sections = {
      ...surveySectionsNames,
      sectionName: ImportText,
      pageNo: pageNo,
      active: 1,
    };
    if (
      (ImportText === "" || e.target.value === "") &&
      isQuesId(pageNo).length >= 1
    ) {
      setValue(ImportText);
      surveySections.splice(isQuesIdIndex(pageNo), 1);
    } else if (isQuesId(pageNo).length >= 1) {
      setValue(ImportText);
      surveySections.splice(isQuesIdIndex(pageNo), 1, sections);
    } else {
      setValue(ImportText);
      surveySections.push(sections);
    }
  };
  console.log(surveySections);
  const _handleSelectSection = (e) => {
    setAmountOfSection(e);
  };

  const _handleSurveyNameChange = (e) => {
    setSurveyHeader(e.target.value);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    const isBlank = surveySections.filter((v) => v.sectionName === "");
    if (
      noOfSurvey.length > surveySections.length ||
      surveySections.length < 1 ||
      isBlank.length
    ) {
      alert.error("Survey Name can't be Blank");
      return;
    } else {
      AddNewSurvey({ surveyHeader, surveySections, token }, (err, data) => {
        console.log(data);
        if (data.success === false) {
          alert.error(data.message);
        } else {
          alert.success(data.message);
        }
      });
    }
  };

  return (
      <Survey
        err={err}
        surveyHeader={surveyHeader}
        page={page}
        _handleNext={_handleNext}
        _handleBack={_handleBack}
        sectionOption={sectionOption}
        noOfSurvey={noOfSurvey}
        _handleSelectSection={_handleSelectSection}
        _handleSurveyNameChange={_handleSurveyNameChange}
        _handleSectionChange={_handleSectionChange}
        _handleSubmit={_handleSubmit}
        amountOfSection={amountOfSection}
        surveySections={surveySections}
        disabled={disabled}
      />
  );
};

export default AdminContainer;
