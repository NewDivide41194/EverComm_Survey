import React from "react";
import * as Color from "../config/Color.config";

export const ESInput = props => {
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
    maxLength
  } = props;


  const defaultStyle = {
    width: width === undefined ? "100%" : width,
    padding: 20,
    fontSize: 14,
    height: `${height}`,
    boxShadow: "none",
    shapeOutline: "none",
    outline: "none",
    border: `1px solid ${Color.SecondaryColor}`,
    // background: `${Color.SecondaryColor}`,
    borderRadius: 5
  };
  const userStyle = style === undefined ? {} : style;

  const __handleFocus = () => {
    document.getElementById(
      id
    ).style.border = `1px solid ${Color.PrimaryColor}`;
  };
  const __handleBlur = () => {
    document.getElementById(id).style.border = `1px solid ${Color.SecondaryColor}`;
  };

  return (
    <input
      autoComplete="off"
      spellCheck="false"
      id={id}
      disabled={disabled}
      required={required}
      onChange={onChange}
      style={{
        ...defaultStyle,
        ...userStyle
      }}
      placeholder={placeHolder}
      className={`form-control form-rounded ${className}`}
      onFocus={__handleFocus}
      onBlur={__handleBlur}
      type={type === undefined ? "text" : `${type}`}
      value={value}
      maxLength={maxLength}
    />
  );
};
