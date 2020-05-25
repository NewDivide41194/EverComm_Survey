import React from "react";
import Select from "react-select";
import * as Colors from "../config/Color.config";

export const ESDropDown = (props) => {
  const { options, quesId, _handleSelect, selectedOption } = props;

  const AnsSelected =
    selectedOption &&
    selectedOption.map((v, k) => ({
      value: v.option_choice_id,
      label: v.option_choice_name,
    }));

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // color: state.isSelected ? "white" : "black",
      // fontWeight: state.isSelected && "bold",
      padding: 10,
    }),
  };

  return (
    <Select
      isClearable={true}
      // isDisabled={IsDisabled}
      id={`${quesId}`}
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          // primary25: 'hotpink',
           primary: Colors.PrimaryColor,
        },
      })}
      className="w-100"
      value={
        selectedOption && selectedOption.length === 0
          ? selectedOption
          : AnsSelected
      }
      onChange={(e) => _handleSelect(quesId, e)}
      // value={selectedOption}
      options={options}
    />
  );
};
