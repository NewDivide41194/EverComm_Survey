import React, { useState } from "react";
import Select from "react-select";

export const ESDropDown = props => {
  const { value, quesId, handleSelect, isAnswer, selectedOption } = props;

  
  const Options = value.map((v, k) => ({
    value: v.option_choice_id,
    label: v.option_choice_name
  }));

  const AnsSelected=selectedOption.map((v,k)=>({value: v.option_choice_id,
  label: v.option_choice_name})
  )

  console.log("Select Option---------->",selectedOption);  

  return (
    <Select
      id={`${quesId}`}
      className="w-100"
      value={selectedOption.length===0?selectedOption:AnsSelected}
      onChange={e => handleSelect(quesId,e)}
      // value={selectedOption}
      options={Options} 
    />
  );
};