import React, { useEffect, useState } from "react";
import SurveySection from "../components/SurveySection";
import { ESNavigator } from "../../../../tools/ES_Text";
import { SurveySectionFetch } from "../../../../api/FetchSurveyList";

const SurveySectionContainer = (props) => {
  const [sectionList, setSectionList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const userId =localStorage.getItem("userId");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const surveyHeaderName = localStorage.getItem("SurveyHeaderName");
  const countryId = localStorage.getItem("countryId")
  const token = localStorage.getItem("token");

  useEffect(() => {
    SurveySectionFetch(surveyHeaderId, countryId, token, (err, data) => {
      const list = data.payload;
      const filterList = list.splice(0,1);
      console.log('list >> ', list)
      setFilterList(filterList);
      setSectionList(list);
    })
  },[]);

  const handleQuestionRoute = (section, id) => {
    console.log("=======>",id);
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
      <ESNavigator pathData={pathData} />
      <SurveySection
       handleQuestionRoute={handleQuestionRoute}
       sectionList={sectionList}
        filterList={filterList}
      />
    </div>
  );
};

export default SurveySectionContainer;
