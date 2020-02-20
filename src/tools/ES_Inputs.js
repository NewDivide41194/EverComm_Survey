import React from "react";
import * as Color from "../config/Color.config";

export const ES_Input = props => {
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
    width: width === undefined ? "100%" : width,
    padding: 20,
    fontSize: 14,
    height: `${height}`
  };

  const userStyle = style === undefined ? {} : style;
  return (
    <input
      id={id}
      onChange={onChange}
      style={{
        ...defaultStyle,
        ...userStyle,
        boxShadow: "none",
        outline: "none",
        border: `2px solid ${Color.SecondaryColor}`,
        borderRadius: 5
      }}
      placeholder={placeHolder}
      className={`form-control form-rounded ${className}`}
      onFocus={e =>
        (document.getElementById(
          id
        ).style.border = `2px solid ${Color.PrimaryColor}`)
      }
      type={type === undefined ? "text" : `${type}`}
      value={value}
    />
  );
};
