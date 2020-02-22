import React, { useState, useEffect } from "react";
import QuestionCard from "../../../tools/ES_Cards";
import * as Color from "../../../config/Color.config";
import { ES_Button } from "../../../tools/ES_Button";
import { PostAnswer } from "../../../api/PostAnswer";

const Question = props => {
  const { surveyData } = props;
  const [pageno, setPageno] = useState(0);
  const [userData, setUserData] = useState({});

  const _handleNext = () => {
    setPageno(+1);
  };

  const _handleSubmit = () => {
    PostAnswer(surveyData[0],(err,data)=>{
      
    })
  }

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const handleCheckChange = (quesId, answerId) => {
    let questions = surveyData[0].categories[pageno].questions;
   let index = questions.findIndex(q=> q.id === quesId);
   if(index >= 0){
     let ind2 = questions[index].possible_answers.findIndex(ans=> ans.id === answerId);
     let ind3 = surveyData[0].categories[pageno].questions[index].possible_answers[ind2].users.findIndex(user=> user === userData._id);
     if(ind3 < 0){
      surveyData[0].categories[pageno].questions[index].possible_answers[ind2].users.push(userData._id);
     }
     else{
      surveyData[0].categories[pageno].questions[index].possible_answers[ind2].users.splice(ind3,1);
     }
   }
  };
  return (
    surveyData.length && (
      <div className="container">
        <h3 className="card-title">{surveyData[0].survery_title}</h3>
        {surveyData[0].categories.length && (
          <QuestionCard
            categories={surveyData[0].categories}
            pageno={pageno}
            handleCheckChange={handleCheckChange}
            userId={userData&&userData._id?userData.id:1}
          />
        )}
        {
         ( surveyData.length && surveyData[0].categories.length === pageno + 1 ) ?
          <ES_Button text={"DONE"} onClick={_handleSubmit}/>
          : <ES_Button text={"NEXT"} onClick={_handleNext}/>
        }
      </div>
    )
  );
};

export default Question;