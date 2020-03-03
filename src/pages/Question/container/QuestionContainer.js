import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { QuestionFetch } from "../../../api/FetchQuestions";
import ESProgress from "../../../tools/ES_Progress";

const QuestionContainer = () => {
  const token = 123;
  const [surveyData, setSurveyData] = useState([]);
  useEffect(() => {
    QuestionFetch(token, (err, data) => {
      setSurveyData(data.payload);
    });
  }, []);
  // console.log(surveyData.length&&surveyData[0].survey_sections);
console.log(surveyData);
  
  return (
    <div>
      <ESProgress />
      <Question surveyData={surveyData} />
    </div>
  );
};

export default QuestionContainer;
