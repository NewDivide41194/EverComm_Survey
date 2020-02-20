import React, { useState } from "react";
import * as Color from "../config/Color.config";

export const ES_Button = props => {
  const {
    text,
    onClick,
    type,
    style,
    small,
    theme,
    selectTheme,
    disabled,
    id
  } = props;
  const [isHover, setIsHover] = useState(true);

  const defaultStyle1 = {
    color: "#ffffff",
    minWidth: 160,
    background: `${Color.PrimaryColor}`
  };
  const hoverStyle = {
    color: `${Color.PrimaryColor}`,
    border:`2px solid ${Color.PrimaryColor}`,
    minWidth: 160,
    background: `${Color.SecondaryColor}`
  };

  const defaultStyle = isHover ? defaultStyle1 : hoverStyle;

  const userStyle = style === undefined ? {} : style;

  return (
    <button
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type === undefined ? "button" : type}
      className={`btn btn-block font-weight-bold rounded${
        selectTheme === undefined
          ? `submit-btn-${theme}`
          : `submit-btn-${selectTheme}`
      }  ${small === undefined ? "p-3" : "px-3"}`}
      style={{ ...defaultStyle, ...userStyle }}
      onMouseOver={() => setIsHover(false)}
      onMouseLeave={() => setIsHover(true)}
    >
      {text}
    </button>
  );
};
