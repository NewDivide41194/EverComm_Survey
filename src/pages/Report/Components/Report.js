import React from "react";

const Report = props => {
  const { ReportData } = props;
  const surveyTitle = ReportData.length && ReportData[0].survery_title;
  const pageNo=ReportData.length &&ReportData[0].categories.length
  console.log("PGNO",pageNo);

  return (
    <div className="py-5">
      <h1>{surveyTitle}</h1>
      {ReportData.length && ReportData[0].categories.map((v, k) => (
        <div>{v.name}
        <span>{pageNo}</span>
        </div>
      ))}
    </div>
  );
};

export default Report;
