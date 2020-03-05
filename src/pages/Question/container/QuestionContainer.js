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
  
// var t=[
//   {
//     id:1,
//     val: 5
//   },
//   {
//     id:1,
//     val: 5
//   },
//   {
//     id:2,
//     val: 6
//   },
//   {
//     id:2,
//     val: 7
//   }
// ]

// t.reduce((acc,elem)=>{
//     if(acc.filter((elemi)=>elemi.id==elem.id)[0])acc.filter((elemi)=>elemi.id==elem.id)[0].val+=elem.val;
//     else acc.push(elem);
//     // return acc
//     console.log('Here',acc)
    
// }
// ,[])
console.log(surveyData);
  
  return (
    <div>
      <ESProgress />
      <Question surveyData={surveyData} />
    </div>
  );
};

export default QuestionContainer;
