import React from "react";
import * as Color from "../config/Color.config";

export const ESInput = props => {
  const {
    style,
    className,
    placeHolder,
    required,
    type,
    id,
    height,
    width,
    quesId,
    onChange,
    value,
    ValueData
  } = props;
  const defaultStyle = {
    width: width === undefined ? "100%" : width,
    padding: 20,
    fontSize: 14,
    height: `${height}`,
    boxShadow: "none",
    shapeOutline: "none",
    outline: "none",
    border: `2px solid ${Color.SecondaryColor}`,
    background: `${Color.SecondaryColor}`,
    borderRadius: 5,
  };
  const userStyle = style === undefined ? {} : style;

  const _handleFocus = () => {
    document.getElementById(
      id
    ).style.border = `2px solid ${Color.PrimaryColor}`;
  };
  const _handleBlur = () => {
    document.getElementById(
      id
    ).style.border = `2px solid ${Color.SecondaryColor}`;
  };

  return (
    <input
      autoComplete="off"
      spellCheck="false"
      id={id}
      required={required}
      onChange={e => onChange(e, quesId)}
      style={{
        ...defaultStyle,
        ...userStyle
      }}
      placeholder={placeHolder}
      className={`form-control form-rounded ${className}`}
      onFocus={_handleFocus}
      onBlur={_handleBlur}
      type={type === undefined ? "text" : `${type}`}
      value={value}
    />
  );
};
