import React from "react";
import * as Colors from "../../../../config/Color.config";
import "../../../../App.css";

const SurveySection = props => {
  const countryName = localStorage.getItem("countryName");
  const surveyHeaderName = localStorage.getItem("SurveyHeaderName");

  const { handleQuestionRoute, sectionList, surveyTitle } = props;
  
  return (
    sectionList &&
    sectionList.length > 0 && (
      <div className="p-2">
        <div className="d-flex flex-row py-2">
          <h4 style={{ color: Colors.PrimaryColor }}>{surveyHeaderName}</h4>
        </div>
        <div className="d-flex flex-row">
          <h5 style={{ color: "#999999" }}>
            {surveyTitle}
            {" in "}
            {countryName}
          </h5>
        </div>
        <hr />
        <SurveySectionList
          handleQuestionRoute={handleQuestionRoute}
          sectionList={sectionList}
        />
      </div>
    )
  );
};

export default SurveySection;

const SurveySectionList = props => {
  const { handleQuestionRoute, sectionList } = props;
  return (
    <div className="">
      {sectionList.map((v,k) => (
        <div
          className="d-flex flex-row p-3 rounded justify-content-between my-2"
          id="surveyList"
          key={k}
          style={{
            // background:Colors.PrimaryColor,
            color: "white",
            cursor: "pointer"
          }}
          onClick={() =>
            handleQuestionRoute(v.section_name, v.survey_sections_id)
          }
        >
          <div style={{ fontSize: "18px" }}>{v.section_name}</div>
          <strong className="text-light" style={{opacity:"0.8"}}>
            ({v.question_count})
            {v.question_count > 1 ? " Questions" : " Question"}
          </strong>
        </div>
      ))}
    </div>
  );
};

// const data = [
//     {surveySection: 'The current situation of e-government', amountOfSurvey:2, totalSurvey:10 },
//     {surveySection: 'Organization Background', amountOfSurvey:0 , totalSurvey:10},
//     {surveySection: 'Legal', amountOfSurvey:1, totalSurvey:10 },
//     {surveySection: 'Strategy', amountOfSurvey:0, totalSurvey:10}
// ]
