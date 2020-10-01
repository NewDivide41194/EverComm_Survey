import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import withMedia from "react-media-query-hoc/dist/with-media";
import * as Colors from "../config/Color.config";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CheckBox } from "@material-ui/icons";

const ESCheckbox = (props) => {
  const {
    value,
    _handleChange,
    quesId,
    media,
    isAnswer,
    keys,
    className,
    vertical,
    checked,
    fontSize,
    disabled,
    autoSaveAnswer
  } = props;

  const customTheme = createMuiTheme({
    palette: {
      secondary: {
        main: Colors.PrimaryColor,
      },
    },
  });

  return value.length ? (
    value.map((ans, k3) => (
      <label
        id={`${ans.option_choice_id + quesId} div`}
        className={
          className || `flex-column ${media.mobile ? "w-100" : "w-50"}`
        }
        key={k3}
        onMouseOver={() =>
          (document.getElementById(
            `${ans.option_choice_id + quesId} div`
          ).style.background = "rgb(211, 226, 237)")
        }
        onMouseLeave={() =>
          (document.getElementById(
            `${ans.option_choice_id + quesId} div`
          ).style.background = "none")
        }
        style={{
          cursor: "pointer",
          fontSize: fontSize || 12,
        }}
      >
        {vertical && <div>{ans.option_choice_name}</div>}
        <ThemeProvider theme={customTheme}>
          <Checkbox
            className="p-1"
            disabled={disabled}
            style={{ zIndex: 0 }}
            checked={
              isAnswer
                ? isAnswer.filter(
                    (d) =>
                      d.optionChoiceId === ans.option_choice_id &&
                      d.questionId === quesId
                  ).length > 0
                : checked
            }
            id={`${ans.option_choice_id + quesId}`}
            value={ans.option_choice_id}
            onChange={() => _handleChange(quesId, ans.option_choice_id, keys)}
            name={`${quesId}`}
          />
        </ThemeProvider>
        {vertical || ans.option_choice_name}{" "}
      </label>
    ))
  ) : (
    <div
      style={{ minHeight: 200 }}
      class="d-flex flex-row justify-content-center align-content-between flex-wrap"
    >
      <div>{value.option_choice_name}</div>
      <ThemeProvider theme={customTheme}>
        <Checkbox
        disabled={disabled}
          value={value.option_choice_name}
          checked={
            isAnswer
              ? isAnswer.filter(
                  (d) =>
                    d.optionChoiceId === value.option_choice_id &&
                    d.questionId === quesId
                ).length > 0
              : checked
          }
          id={`${value.option_choice_id + quesId}`}
          onChange={() => _handleChange(quesId, value.option_choice_id, keys)}
          name={`${quesId}`}
        />
      </ThemeProvider>
    </div>
  );
};

export default withMedia(ESCheckbox);
