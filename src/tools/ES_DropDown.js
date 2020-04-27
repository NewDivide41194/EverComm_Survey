import React from "react";
import Select from "react-select";

export const ESDropDown = props => {
  const { options, quesId, _handleSelect, selectedOption } = props;

  const AnsSelected =
    selectedOption &&
    selectedOption.map((v, k) => ({
      value: v.option_choice_id,
      label: v.option_choice_name
    }));
 
  return (
    <Select
      id={`${quesId}`}
      // styles={customStyles}
      className="w-100"
      value={
        selectedOption && selectedOption.length === 0
          ? selectedOption
          : AnsSelected
      }
      onChange={e => _handleSelect(quesId, e)}
      // value={selectedOption}
      options={options}
    />
  );
};
