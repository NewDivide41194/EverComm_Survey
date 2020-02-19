import React, { useState } from "react";
import * as Color from "../config/Color.config";

export const ES_Button = props => {
  const {
    text,
    onClick,
    type,
    round,
    style,
    small,
    theme,
    selectTheme,
    disabled,
    id
  } = props;
  const defaultStyle = {
    outline: "none",
    boxShadow: "none",
    color: "#ffffff",
    border: "none",
    borderRadius: round === undefined ? 5 : 16,
    minWidth: 160,
    background: `${Color.PrimaryColor}`
  };
  const hoverStyle = {
    outline: "none",
    boxShadow: "none",
    color: "#ffffff",
    border: "none",
    borderRadius: round === undefined ? 5 : 16,
    minWidth: 160,
    background: `${Color.SecondaryColor}`
  };


const userStyle = style === undefined ? {} : style;

  return (
    <button
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type === undefined ? "button" : type}
      className={`btn btn-block ${
        selectTheme === undefined
          ? `submit-btn-${theme}`
          : `submit-btn-${selectTheme}`
      }  ${small === undefined ? "p-3" : "px-3"}`}
      style={{ ...defaultStyle, ...userStyle }}

    >
      {text}
    </button>
  );
};
