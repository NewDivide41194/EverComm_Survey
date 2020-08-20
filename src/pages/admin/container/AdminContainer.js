import React, { useState } from "react";
import Admin from "../components/Survey";
import Survey from "../components/Survey";

const AdminContainer = () => {
  const [page, setPage] = useState(0);
  const [amountOfSection, setAmountOfSection] = useState(1);
  const _handleNext = () => {
    setPage(page + 1);
  };
  const _handleBack = () => {
    setPage(page - 1);
  };
  const _handleSelectSection=(id,e)=>{
    setAmountOfSection(e.value)
  }
  const sectionOption = new Array(10)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));
    const noOfSurvey = new Array(amountOfSection).fill(null);

  return (
    <div>
      <Survey
        page={page}
        _handleNext={_handleNext}
        _handleBack={_handleBack}
        sectionOption={sectionOption}
        noOfSurvey={noOfSurvey}
        _handleSelectSection={_handleSelectSection}
      />
    </div>
  );
};

export default AdminContainer;
