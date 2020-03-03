import React, { useState } from "react";
import * as Color from "../config/Color.config";

export const ESButton = props => {
  const {
    text,
    onClick,
    type,
    style,
    small,
    theme,
    selectTheme,
    disabled,
    leftIcon,
    rightIcon,
    id
  } = props;
  const [isHover, setIsHover] = useState(true);

  const defaultStyle1 = {
    color: "#ffffff",
    background: `${Color.PrimaryColor}`
  };
  const hoverStyle = {
    color: `${Color.PrimaryColor}`,
    background: `${Color.SecondaryColor}`,
    boxShadow: "5px 5px 15px gray"
  };

  const defaultStyle = isHover ? defaultStyle1 : hoverStyle;

  const userStyle = style === undefined ? {} : style;

  return (
    <button
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type === undefined ? "button" : type}
      className={`btn btn-block font-weight-bold rounded py-2 ${
        selectTheme === undefined
          ? `submit-btn-${theme}`
          : `submit-btn-${selectTheme}`
      }  ${small === undefined ? "p-3" : "px-3"}`}
      style={{
        ...defaultStyle,
        ...userStyle,
        shape: "none",
        transition: ".5s"
      }}
      onMouseOver={() => setIsHover(false)}
      onMouseLeave={() => setIsHover(true)}
    >
      {leftIcon ? leftIcon : null}
      {text}
      {rightIcon ? rightIcon : null}
    </button>
  );
};
