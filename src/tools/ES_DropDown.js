import React, { useState } from "react";

export const ESDropDown = props => {
  const { value, pageNo, cvalue, quesId, userId, AnswerData } = props;
  const [svalue, setSvalue] = useState();
  const handleSelect = quesId => {
    let ansId = document.getElementById("Select").value;

    setSvalue(ansId);

    const isQuesId = AnswerData.filter(e => e.questionId === quesId);
    const isQuesIdIndex = AnswerData.findIndex(e => e.questionId === quesId);
    const Ans = {
      other: "",
      optionChoiceId: parseInt(ansId),
      userId: userId,
      questionId: quesId
    };
    if (isQuesId.length >= 1) {
      AnswerData.splice(isQuesIdIndex, 1, Ans);
    } else {
      AnswerData.push(Ans);
    }
   
  };

  return (
    <select
      id="Select"
      className="form-control"
      onChange={e => handleSelect(quesId)}
      style={{ boxShadow: "none" }}
    >
      {value.map((x, y) => (
        <option key={y} id={x.option_choice_id} value={x.option_choice_id}>
          {x.option_choice_name}
        </option>
      ))}
    </select>
  );
};
