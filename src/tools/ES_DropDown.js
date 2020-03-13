import React, { useState } from "react";

export const ESDropDown = props => {
  const { value, quesId, handleSelect,AnswerData } = props;
  
  const optionData=AnswerData.map((v,k)=>v.optionChoiceId)
  
  return (
    <select
      id={quesId}
      className="form-control"
      onChange={e => handleSelect(quesId)}
      style={{ boxShadow: "none" }}
    >
      {value.map((x, y) => (
        <option key={y} id={x.option_choice_id} value={x.option_choice_id} selected={optionData.filter(d=>d===x.option_choice_id)>0||null}>
          {x.option_choice_name}
        </option>
      ))}
    </select>
  );
};
