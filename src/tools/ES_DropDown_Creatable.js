import React from "react";
import * as Colors from "../config/Color.config";
import CreatableSelect from 'react-select/creatable';

export const ESDropDownBuilding =(props) => {
  const {
    options,
    quesId,
    _handleSelect,
    disabled,
    notClearable,
    id,
    defaultValue,
    keys,
    placeHolder
  } = props;

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // color: state.isSelected ? "white" : "black",
      // fontWeight: state.isSelected && "bold",
      padding: 10
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
      onChange={(e) => _handleSelect(quesId||id, e,keys)}
      // onInputChange={onInputChange}
      // value={selectedOption}
      options={options}
      placeholder={placeHolder}
      />
    );
  }
