import React from "react";
import SurveySection from "../components/SurveySection";
import { ESNavigator } from "../../../../tools/ES_Text";
import userId from "../../../../assets/StoredData"
const SurveySectionContainer = (props) => {
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  // const userId = localStorage.getItem("userId");
  const surveyHeaderName = localStorage.getItem("SurveyHeaderName");
  const handleQuestionRoute = () => {
    props.history.push(`question/${userId}/${surveyHeaderId}`);
  };
 
  const pathData = [
    {
      title: "Project List",
      pathName: `/admin/dashboard/manageSurveyList/${userId}`,
      linkTo: `/surveyMenu/${userId}`,
    },
    {
        title: surveyHeaderName,
      pathName: `/countryMenu`,
      linkTo: `/countryMenu`,
    }
  ];
  return (
    <div className="container">
      <ESNavigator pathData={pathData} />
      <SurveySection handleQuestionRoute={handleQuestionRoute} />
    </div>
  );
};

export default SurveySectionContainer;
