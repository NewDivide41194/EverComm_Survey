import React, { useState } from "react";

export const ESDropDown = props => {
  const { value, quesId, handleSelect } = props;
  
  return (
    <select
      id={quesId}
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
