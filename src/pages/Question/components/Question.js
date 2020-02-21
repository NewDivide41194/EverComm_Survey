import React, { useState,useEffect } from "react";
import QuestionCard from "../../../tools/ES_Cards";
import * as Color from "../../../config/Color.config";
import { ES_Button } from "../../../tools/ES_Button";

const Question = props => {
  const { surveyData } = props;
  const [pageno, setPageno] = useState(0);
  const [userData, setUserData] = useState({});
  const [cvalue, setCvalue] = useState([]);
  const [rvalue, setRvalue] = useState("");

  const handleRadioChange = (ansId, quesId) => {
    setRvalue(ansId);
    let ind = cvalue.findIndex(data => data.question_id == quesId);
    if (ind < 0) {
      cvalue.push({ question_id: quesId, answer_id: ansId, user_id: userData._id });
    } else {
      cvalue.splice(ind, 1, {
        question_id: quesId,
        answer_id: ansId,
        user_id: userData._id
      });
    }

    console.log(cvalue);
  };
  const _handleNext = () => {
    setPageno(+1);
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  const handleCheckChange = (quesId, answerId) => {
    let ind = cvalue.findIndex(
      data => data.question_id == quesId && data.answer_id == answerId
    );
    console.log("", ind);

    if (ind < 0) {
      cvalue.push({
        question_id: quesId,
        answer_id: answerId,
        user_id: userData._id
      });
      localStorage.setItem("Asnwers", JSON.stringify(cvalue));
    } else {
      cvalue.splice(ind, 1);
    }

    console.log("Check=====>", cvalue);
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
            rvalue={rvalue}
            handleCheckChange={handleCheckChange}
            handleRadioChange={handleRadioChange}
          />
        )}
        <ES_Button text={"NEXT"} onClick={_handleNext} />
      </div>
    )
  );
};

export default Question;
