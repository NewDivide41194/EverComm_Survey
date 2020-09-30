import React from "react";
import Radio from "@material-ui/core/Radio";
import * as Colors from "../config/Color.config";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const ESRadio = (props) => {
  const {
    value,
    quesId,
    _handleRadioChange,
    isAnswer,
    isDisable,
    checked,
    keys,
    subQuesId,
    other,
    autoSaveAnswer
  } = props;
  const ID = subQuesId !== null && subQuesId ? subQuesId : quesId;
  const customTheme = createMuiTheme({
    palette: {
      secondary: {
        main: Colors.PrimaryColor,
      },
    },
  });

  const _handleBlur = () => {
    autoSaveAnswer();
  }

  return value.length ? (
    value.map((ans, k3) => (
      <label
        id={`${ans.option_choice_id} div ${ID}`}
        className="option flex-col w-50"
        key={k3}
        onMouseOver={() =>
          (document.getElementById(
            `${ans.option_choice_id} div ${ID}`
          ).style.background = isDisable ? "none" : "rgb(211, 226, 237)")
        }
        onMouseLeave={() =>
          (document.getElementById(
            `${ans.option_choice_id} div ${ID}`
          ).style.background = "none")
        }
        style={{ cursor: "pointer" }}
      >
        <ThemeProvider theme={customTheme}>
          <Radio
            className="p-0 pr-1"
            disabled={isDisable}
            name={`${quesId}`}
            checked={
              checked ||
              isAnswer.filter(
                (d) =>
                  d.optionChoiceId === ans.option_choice_id &&
                  (d.subQuestionId == null
                    ? d.questionId === quesId || d.subQuestionId === subQuesId
                    : d.subQuestionId == subQuesId)
              ).length > 0
            }
            onBlur={ _handleBlur}
            onChange={() =>
              _handleRadioChange(
                ans.option_choice_id,
                quesId,
                subQuesId,
                keys,
                ans.option_choice_name === "Yes" ? undefined : ""
              )
            }
            id={`${ans.option_choice_id + ID}`}
            value={ans.option_choice_name}
          />
        </ThemeProvider>
        {ans.option_choice_name}
      </label>
    ))
  ) : (
    <label>
      <ThemeProvider theme={customTheme}>
        <Radio
          disabled={isDisable}
          value={value.option_choice_name}
          onBlur={ _handleBlur}
          checked={
            checked ||
            isAnswer.filter(
              (d) =>
                d.optionChoiceId === value.option_choice_id &&
                d.subQuestionId === subQuesId
            ).length > 0
          }
          onChange={() =>
            _handleRadioChange(
              value.option_choice_id,
              quesId,
              subQuesId,
              keys,
              other
            )
          }
          id={`${value.option_choice_id + ID}`}
        ></Radio>
      </ThemeProvider>
    </label>
  );
};
