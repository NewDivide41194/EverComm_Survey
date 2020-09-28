import React, { useEffect, useState } from "react";
import SurveySection from "../components/SurveySection";
import { ESNavigator } from "../../../../tools/ES_Text";
import { SurveySectionFetch } from "../../../../api/FetchSurveyList";

const SurveySectionContainer = (props) => {
  const [sectionList, setSectionList] = useState([]);
  const [surveyTitle,setSurveyTitle]=useState(null)
  const userId =localStorage.getItem("userId");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const surveyHeaderName = localStorage.getItem("SurveyHeaderName");
  const countryId = localStorage.getItem("countryId")
  const token = localStorage.getItem("token");

  useEffect(() => {
    SurveySectionFetch(surveyHeaderId, countryId, token, (err, data) => {
      const list = data.payload[0];
      const title=data.payload[1][0].survey_title
      setSectionList(list);
      setSurveyTitle(title)
    })
  },[]);

  // console.log('section list >> ', sectionList)

  const handleQuestionRoute = (section, id) => {
    // console.log("=======>",id);
    props.history.push(`question/${userId}/${surveyHeaderId}`);
    localStorage.setItem("surveySection", section);
    localStorage.setItem("surveySectionId", id)
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
      <div className="p-2"><ESNavigator pathData={pathData} /></div>
      <SurveySection
       handleQuestionRoute={handleQuestionRoute}
       sectionList={sectionList}
       surveyTitle={surveyTitle}
      />
    </div>
  );
};

export default SurveySectionContainer;
