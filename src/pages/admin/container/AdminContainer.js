import React, { useState } from "react";
import Admin from "../components/Survey";
import Survey from "../components/Survey";
import { AddNewSurvey } from "../../../api/admin/FetchSurvey";
import { useAlert } from "react-alert";

const AdminContainer = () => {
  const [page, setPage] = useState(0);
  const [surveyHeader, setSurveyHeader] = useState("");
  const [amountOfSection, setAmountOfSection] = useState(null);
  const [surveySections, setSurveySection] = useState([]);
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const _handleNext = () => {
    setPage(page + 1);
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
  const _handleSectionChange = (e) => {
    const pageNo = parseInt(e.target.id);

    const ImportText = e.target.value.replace(/\s+/g, " ").trimStart();
    const sections = {
      ...surveySectionsNames,
      sectionName: e.target.value,
      pageNo: pageNo,
      active: 1,
    };

    if (ImportText === "" && isQuesId(pageNo).length >= 1) {
      setValue(e.target.value);
      surveySections.splice(isQuesIdIndex(pageNo), 1);
    } else if (isQuesId(pageNo).length >= 1) {
      setValue(e.target.value);
      surveySections.splice(isQuesIdIndex(pageNo), 1, sections);
    } else {
      setValue(e.target.value);
      surveySections.push(sections);
    }
  };

  const _handleSelectSection = (e) => {
    setAmountOfSection(e);
  };

  const _handleSurveyNameChange = (e) => {
    setSurveyHeader(e.target.value);
  };

  const _handleSubmit = (e) => {
    AddNewSurvey({ surveyHeader, surveySections, token }, (err, data) => {
      console.log(data);
      if (data.success === false) {
        alert.error(data.message);
        // setIsDisabled(isDisabled);
      } else {
        // props.history.push(
        //   `/admin`
        // );
        alert.success(data.message);
      }
    });
  };
  const sectionOption = new Array(10)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));
  const noOfSurvey = new Array(amountOfSection && amountOfSection.value).fill(
    null
  );
  console.log(surveySections);

  return (
    <div>
      <Survey
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
        surveySections={surveyHeader}
        disabled={disabled}
      />
    </div>
  );
};

export default AdminContainer;
