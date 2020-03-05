import React, { useState, useRef } from "react";
import Radio from "@material-ui/core/Radio";
export const ESRadio = props => {
  const { value, userId, quesId, cvalue, pageNo, AnswerData } = props;
  const [rvalue, setRvalue] = useState("");

  const handleRadioChange = (ansId, quesId) => {
    const isQuesId = AnswerData.filter(e => e.questionId === quesId);
    const isQuesIdIndex=AnswerData.findIndex(e=>e.questionId===quesId)
    const Ans = {
      other: "",
      optionChoiceId: ansId,
      userId: userId,
      questionId: quesId
    };
    if (isQuesId.length>=1) {
      AnswerData.splice(isQuesIdIndex,1,Ans);
    }else{
      AnswerData.push(Ans);

    }

    let questions = cvalue[pageNo].questions;
    let index = questions.findIndex(q => q.question_id === quesId);
    setRvalue(ansId);
  };

  return value.map((ans, k3) => (
    <div className="flex-col w-50" key={k3}>
      <Radio
        color="primary"
        className="p-1"
        checked={rvalue === ans.option_choice_id}
        onChange={() => handleRadioChange(ans.option_choice_id, quesId)}
        id={`${ans.option_choice_id}`}
        value={ans.option_choice_name}
      />
      <label style={{ display: "contents" }} htmlFor={ans.option_choice_id}>
        {ans.option_choice_name}
      </label>
    </div>
  ));
};
