import React, { useState } from "react";
import Select from "react-select";
import * as Colors from "../config/Color.config";

export const ESDropDownSample = (props) => {
    const {
        options,
        _handleSelect,
        // value,
        disabled,
        defaultValue,
        value,
        id
    } = props;

    const customStyles = {
        control: provided => ({
          ...provided,
        
          border:0   
      }),

      };

    return (
        <Select 
            // isDisabled={disabled}
            id={id}
            style={customStyles}
            defaultValue={defaultValue}
            className="w-100"
            value={value}
            onChange={(e) => _handleSelect(e)}
            options={options}
        />
    )
}