import React from "react";
import * as Colors from "../config/Color.config";
import CreatableSelect from 'react-select/creatable';

export const ESDropDownBuilding =(props) => {
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
    onInputChange,
    placeHolder
  } = props;

  

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
      <CreatableSelect
      isClearable={notClearable ? false : true}
      isDisabled={disabled}
      id={`${id?id:quesId}`}
      styles={customStyles}
      defaultValue={defaultValue}
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
      onChange={(e) => _handleSelect(quesId||id, e,keys)}
      onInputChange={onInputChange}
      // value={selectedOption}
      options={options}
      placeholder={placeHolder}
      />
    );
  }
