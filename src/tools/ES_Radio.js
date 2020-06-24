import React from "react";
import Radio from "@material-ui/core/Radio";
import * as Colors from "../config/Color.config";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const ESRadio = (props) => {
  const { value, quesId, _handleRadioChange, isAnswer,isQuestion,checked } = props;
  const customTheme = createMuiTheme({
    palette: {
      secondary: {
        main: Colors.PrimaryColor,
      },
    },
  });  
  
  return value.map((ans, k3) => (
    <label
      id={`${ans.option_choice_id+quesId} div`}
      className="option flex-col w-50"
      key={k3}
      onMouseOver={() =>
        (document.getElementById(
          `${ans.option_choice_id+quesId} div`
        ).style.background = "rgb(211, 226, 237)")
      }
      onMouseLeave={() =>
        (document.getElementById(
          `${ans.option_choice_id+quesId} div`
        ).style.background = "none")
      }
      style={{ cursor: "pointer" }}
    >
      <ThemeProvider theme={customTheme}>
        <Radio
          className="p-1"
          name={`${quesId}`}
          checked={checked||
            isAnswer.filter((d) => d.optionChoiceId === ans.option_choice_id&&d.questionId===quesId).length > 0
          }
          onChange={() => _handleRadioChange(ans.option_choice_id, quesId)}
          id={`${ans.option_choice_id+quesId}`}
          value={ans.option_choice_name}
        />
      </ThemeProvider>
      {ans.option_choice_name}
    </label>
  ));
};
