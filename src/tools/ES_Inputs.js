import React from "react";
import * as Color from "../config/Color.config";

export const ESInput = props => {
  const {
    style,
    className,
    value,
    placeHolder,
    type,
    id,
    height,
    width,
    onChange
  } = props;

  const defaultStyle = {
    width: width ===  undefined ? "100%" : width,
    padding: 20,
    fontSize: 14,
    height: `${height}`,
    boxShadow: "none",
    outline: "none",
    border: `2px solid ${Color.SecondaryColor}`,
    background: `${Color.SecondaryColor}`,
    borderRadius: 5
  };

  const userStyle = style ===  undefined ? {} : style;

  const _handleFocus = () => {
    document.getElementById(
      id
    ).style.border = `2px solid ${Color.PrimaryColor}`;
  };
  return (
    <input
      autoComplete="off"
      spellCheck="false"
      id={id}
      required
      onChange={onChange}
      style={{
        ...defaultStyle,
        ...userStyle
      }}
      placeholder={placeHolder}
      className={`form-control form-rounded ${className}`}
      onFocus={_handleFocus}
      type={type ===  undefined ? "text" : `${type}`}
      value={value}
    />
  );
};
