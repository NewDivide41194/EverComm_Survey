import React, { useState, useRef } from "react";
import Radio from "@material-ui/core/Radio";
export const ESRadio = props => {
  const { value, userId, quesId, rValue, handleRadioChange, AnswerData } = props; 
  const ANSID=AnswerData.map((v,k)=>v.optionChoiceId)
  console.log( ANSID.filter(v=>v===2));
  
  return value.map((ans, k3) => (
    <div className="flex-col w-50" key={k3}>
      <Radio
        color="primary"
        className="p-1"
        // checked={}
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
