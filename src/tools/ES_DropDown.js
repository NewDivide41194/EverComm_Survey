import React, { useState } from "react";

export const ESDropDown = props => {
  const { value, quesId, handleSelect, isAnswer } = props;
  console.log("\\\\\\\\", isAnswer);

  console.log(
    "++++++++>",
    isAnswer.filter(d => d === 19)
  );

  return (
    <select
      id={quesId}
      className="form-control"
      onChange={e => handleSelect(quesId)}
      style={{ boxShadow: "none" }}
    >
      <option value="none" selected disabled>
        Select an Option ...
      </option>
      {value.map((x, y) => (
        <option
          key={y}
          id={x.option_choice_id}
          value={x.option_choice_id}
          selected={isAnswer.filter(d => d === x.option_choice_id) > 0||false}
        >
          {x.option_choice_name}
        </option>
      ))}
    </select>
  );
};
