import React from "react";
import Radio from "@material-ui/core/Radio";
import * as Colors from "../config/Color.config";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const ESRadio = (props) => {
  const { value, quesId, _handleRadioChange, isAnswer,isQuestion } = props;
  const customTheme = createMuiTheme({
    palette: {
      secondary: {
        main: Colors.PrimaryColor,
      },
    },
  });

  
  return value.map((ans, k3) => (
    <label
      id={`${ans.option_choice_id} div`}
      className="flex-col w-50"
      key={k3}
      onMouseOver={() =>
        (document.getElementById(
          `${ans.option_choice_id} div`
        ).style.background = "rgb(211, 226, 237)")
      }
      onMouseLeave={() =>
        (document.getElementById(
          `${ans.option_choice_id} div`
        ).style.background = "none")
      }
      htmlFor={ans.option_choice_id}
      style={{ cursor: "pointer" }}
    >
      <ThemeProvider theme={customTheme}>
        <Radio
          className="p-1"
          name={`${quesId}`}
          checked={
            isAnswer.filter((d) => d === ans.option_choice_id).length > 0
          }
          onChange={() => _handleRadioChange(ans.option_choice_id, quesId, 100)}
          id={`${ans.option_choice_id}`}
          value={ans.option_choice_name}
        />
      </ThemeProvider>
      {ans.option_choice_name}
    </label>
  ));
};
