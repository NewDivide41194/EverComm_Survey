import React,{useState} from "react";
import * as Color from "../config/Color.config";
import '../App.css'

export const ESInput = (props) => {
  const {
    style,
    className,
    placeHolder,
    disabled,
    required,
    type,
    id,
    height,
    width,
    onChange,
    value,
    maxLength,
    pattern,
    myRef,
    autoSaveAnswer
  } = props;

  const defaultStyle = {
    width: width === undefined ? "100%" : width,
    padding: 18,
    fontSize: 14,
    height: `${height}`,
    boxShadow: "none",
    shapeOutline: "none",
    outline: "none",
    border: `1px solid ${Color.SecondaryColor}`,
    borderRadius: 5
  };
  const userStyle = style === undefined ? {} : style;

  const __handleFocus = () => {
    document.getElementById(
      id
    ).style.border = `2px solid ${Color.PrimaryColor}`;
  };
  const __handleBlur = () => {
    document.getElementById(
      id
    ).style.border = `1px solid ${Color.SecondaryColor}`;
  };

  return (
    <input
      ref={myRef}
      autoComplete="off"
      spellCheck="false"
      id={id}
      disabled={disabled}
      required={required}
      onChange={onChange}
      style={{
        ...defaultStyle,
        ...userStyle,
      }}
      pattern={pattern?pattern:null}
      placeholder={placeHolder}
      className={`form-control form-rounded ${className}`}
      onFocus={__handleFocus}
      type={type === undefined ? "text" : `${type}`}
      value={value}
      maxLength={maxLength}
    />
    
  );
};
