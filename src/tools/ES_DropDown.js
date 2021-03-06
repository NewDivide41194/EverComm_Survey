import React, { useState } from "react";
import Select from "react-select";
import * as Colors from "../config/Color.config";

export const ESDropDown = (props) => {
  const {
    options,
    quesId,
    _handleSelect,
    selectedOption,
    disabled,
    notClearable,
    id,
    defaultValue,
    keys,
    subQuesId,
  } = props;

  const AnsSelected =
  selectedOption &&
  selectedOption.map((v, k) => ({
    value: v.option_choice_id || selectedOption[0],
    label: v.option_choice_name || selectedOption[0],
  }));
  const customStyles = {
    control: provided => ({
      ...provided          
  }),
  option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      fontWeight: state.isSelected && "bold",
      padding: 10,
    })
  };

return (
    <Select
      isClearable={notClearable ? false : true}
      isDisabled={disabled}
      id={`${id ? id : quesId}`}
      styles={customStyles}
      defaultValue={defaultValue}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          // primary25: 'hotpink',
          primary: Colors.PrimaryColor,
          // zIndex:999
        },
      })}
      className="w-100"
      classNamePrefix={"select"}
      value={
        selectedOption && selectedOption.length === 0
          ? selectedOption
          : AnsSelected
      }
      onChange={(e) => _handleSelect(quesId || id, e, keys, subQuesId)}
      // value={selectedOption}
      options={options}
    />
  );
};