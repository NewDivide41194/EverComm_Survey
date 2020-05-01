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
    background: `${Color.PrimaryColor}`
  };
  const hoverStyle = {
    background: "#008ccc",
    boxShadow: "3px 3px 6px #2B2B2B"
  };

  const defaultStyle = isHover||disabled ? defaultStyle1 : hoverStyle;

  const userStyle = style === undefined ? {} : style;

  return (
    <button
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type === undefined ? "button" : type}
      className={`btn btn-block rounded py-2 ${
        selectTheme === undefined
          ? `submit-btn-${theme}`
          : `submit-btn-${selectTheme}`
      }  ${small === undefined ? "p-3" : "px-3"}`}
      style={{
        ...defaultStyle,
        ...userStyle,
        outline: "none",
        color: "white",
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
