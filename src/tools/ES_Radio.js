import React from "react";
import Radio from "@material-ui/core/Radio";
export const ESRadio = props => {
  const { value, quesId, handleRadioChange, isAnswer } = props; 
  console.log(isAnswer);
  
  return value.map((ans, k3) => (
    <div className="flex-col w-50" key={k3}>
      <Radio
        color="primary"
        className="p-1"
        name={`${quesId}`}
        checked={isAnswer.filter(d=>d===ans.option_choice_id).length>0}
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
