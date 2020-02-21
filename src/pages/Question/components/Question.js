import React, { useState, useEffect } from "react";
import QuestionCard from "../../../tools/ES_Cards";
import * as Color from "../../../config/Color.config";
import { ES_Button } from "../../../tools/ES_Button";

const Question = props => {
  const { surveyData } = props;
  const [pageno, setPageno] = useState(0);
  const [userData, setUserData] = useState({});
  const [cvalue, setCvalue] = useState([]);
  // const [rvalue, setRvalue] = useState("");

  const _handleNext = () => {
    setPageno(+1);
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  // const handleCheckChange = (quesId, answerId) => {
  //   let ind = cvalue.findIndex(
  //     data => data.question_id == quesId && data.answer_id == answerId
  //   );

  //   if (ind < 0) {
  //     cvalue.push({
  //       question_id: quesId,
  //       answer_id: answerId,
  //       user_id: userData._id
  //     });
  //     localStorage.setItem("Asnwers", JSON.stringify(cvalue));
  //   } else {
  //     cvalue.splice(ind, 1);
  //     localStorage.setItem("Asnwers", JSON.stringify(cvalue));
  //   }

  //   console.log("Check=====>", cvalue);
  // };
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
   console.log('sruverdata is=>',surveyData)
  };
  return (
    surveyData.length && (
      <div className="container">
        <h3 className="card-title">{surveyData[0].survery_title}</h3>
        {surveyData[0].categories.length && (
          <QuestionCard
            categories={surveyData[0].categories}
            pageno={pageno}
            cvalue={cvalue}
            handleCheckChange={handleCheckChange}
            userId={userData._id}
          />
        )}
        <ES_Button
          text={
            surveyData.length && surveyData[0].categories.length === pageno + 1
              ? "Done"
              : "NEXT"
          }
          onClick={_handleNext}
        />
      </div>
    )
  );
};

export default Question;
