import React from "react";
import Select from "react-select";

export const ESDropDown = props => {
  const { options, quesId, handleSelect, selectedOption } = props;
  


  const AnsSelected=selectedOption.map((v,k)=>({value: v.option_choice_id,
  label: v.option_choice_name})
  )

  return (
    <Select
      id={`${quesId}`}
      className="w-100"
      value={selectedOption.length===0?selectedOption:AnsSelected}
      onChange={e => handleSelect(quesId,e)}
      // value={selectedOption}
      options={options} 
    />
  );
};