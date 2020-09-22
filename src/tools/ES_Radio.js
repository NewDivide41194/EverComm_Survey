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
    // isQuestion,
    checked,
    keys,
    subQuesId,
    other
  } = props;
  const ID = subQuesId !== null ? subQuesId : quesId;
  // console.log('Id >> ', subQuesId)
  const customTheme = createMuiTheme({
    palette: {
      secondary: {
        main: Colors.PrimaryColor,
      },
    },
  });
  // console.log('value >>>> ', value.length)
  return value.length ? (
    value.map((ans, k3) => (
      // console.log("ans option choice",ans.option_choice_id  , ID),
      <label
        id={`${ans.option_choice_id + ID} div`}
        className="option flex-col w-50"
        key={k3}
        onMouseOver={() =>
          // console.log('result >> ', ans.option_choice_id, ID)
          (document.getElementById(
            `${ans.option_choice_id + ID} div`
          ).style.background = "rgb(211, 226, 237)")
        }
        onMouseLeave={() =>
          (document.getElementById(
            `${ans.option_choice_id + ID} div`
          ).style.background = "none")
        }
        style={{ cursor: "pointer" }}
      >
        <ThemeProvider theme={customTheme}>
          <Radio
            className="p-0 pr-1"
            name={`${quesId}`}
            checked={
              checked ||
              isAnswer.filter(
                (d) =>

                  d.optionChoiceId === ans.option_choice_id &&
                  (d.subQuestionId == null ? d.questionId === quesId || d.subQuestionId === subQuesId : d.subQuestionId == subQuesId)
              ).length > 0
            }
            onChange={() =>
              _handleRadioChange(ans.option_choice_id, quesId, subQuesId, keys, ans.option_choice_name === "Yes" ? undefined : "")
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
          <Radio value={value.option_choice_name}
            checked={
              checked ||
              isAnswer.filter(
                (d) =>
                  d.optionChoiceId === value.option_choice_id &&
                  d.subQuestionId === subQuesId
              ).length > 0
            }
            onChange={() =>
              _handleRadioChange(value.option_choice_id, quesId, subQuesId, keys, other)
            }
            id={`${value.option_choice_id + ID}`}
          ></Radio>
        </ThemeProvider>
      </label>
    );
};
