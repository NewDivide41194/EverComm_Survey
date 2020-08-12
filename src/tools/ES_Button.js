import React, { useState } from "react";
import * as Color from "../config/Color.config";

export const ESButton = props => {
  const {
    text,
    onClick,
    type,
    style,
    small,
    disabled,
    leftIcon,
    rightIcon,
    id,
    noShadow
  } = props;
  const [isHover, setIsHover] = useState(true);

  const defaultStyle1 = {
    background: Color.PrimaryColor
  };

  const hoverStyle = {
    background: Color.purple,
    boxShadow: noShadow?'none':"0px 2px 3px #2B2B2B"
  };

  const defaultStyle = isHover||disabled ? defaultStyle1 : hoverStyle;

  const userStyle = style === undefined ? {} : style;

  return (
    <button
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type === undefined ? "button" : type}
      className={`btn btn-block rounded text-light ${small ? "py-0" : "p-2"}`}
      style={{
        ...defaultStyle,
        ...userStyle,
        outline: "none",
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
