import React, { useState } from "react";
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
    userId,
    onChange,
    value,
    AnswerData
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
    borderRadius: 5
  };
  const [Value, setValue] = useState("");
  const userStyle = style === undefined ? {} : style;

  const _handleFocus = () => {
    document.getElementById(
      id
    ).style.border = `2px solid ${Color.PrimaryColor}`;
  };
  const handleInputChange = (e, quesId) => {
    setValue(e.target.value);
    const isQuesIdIndex = AnswerData.findIndex(e => e.questionId === quesId);
    const isQuesId = AnswerData.filter(e => e.questionId === quesId);
    const Ans = {
      other: e.target.value,
      optionChoiceId: null,
      userId: userId,
      questionId: quesId
    };
    if (isQuesId.length >= 1) {
      AnswerData.splice(isQuesIdIndex, 1, Ans);
    } else {
      AnswerData.push(Ans);
    }
  };
  return (
    <input
      autoComplete="off"
      spellCheck="false"
      id={id}
      required={required}
      onChange={e => (AnswerData ? handleInputChange(e, quesId) : onChange(e))}
      style={{
        ...defaultStyle,
        ...userStyle
      }}
      placeholder={placeHolder}
      className={`form-control form-rounded ${className}`}
      onFocus={_handleFocus}
      type={type === undefined ? "text" : `${type}`}
      value={AnswerData? Value : value}
    />
  );
};
