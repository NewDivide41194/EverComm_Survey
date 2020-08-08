import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import withMedia from "react-media-query-hoc/dist/with-media";
import * as Colors from "../config/Color.config";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
    checked
  } = props;

  const customTheme = createMuiTheme({
    palette: {
      secondary: {
        main: Colors.PrimaryColor,
      },
    },
  });
  // console.log("ANS",isAnswer.filter(d=>d.optionChoiceId===40&&d.questionId===quesId));
  // console.log("Ques",isQuestion.filter(d1=>d1===quesId));
  // console.log(isAnswer.filter(d=>d.optionChoiceId===40&&d.questionId===quesId).length>0)
  // console.log(isAnswer.filter(d=>d.optionChoiceId===40).length>0&&isAnswer.filter(q=>q.questionId===quesId).length>0);
  // console.log(isAnswer);

  console.log("Value", value);

  return value.map((ans, k3) => (
    <label
      id={`${ans.option_choice_id + quesId} div`}
      className={className || `flex-column ${media.mobile ? "w-100" : "w-50"}`}
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
      style={{ cursor: "pointer",fontSize:12 }}
    >
      {vertical && <div>{ans.option_choice_name}</div>}

      <ThemeProvider theme={customTheme}>
        <Checkbox
          className="p-1"
          style={{zIndex:0}}
          checked={
            // isAnswer.filter(d=>d===ans.option_choice_id).length>0&&isQuestion.filter(d1=>d1===quesId).length>0
            isAnswer?isAnswer.filter(
              (d) =>
                d.optionChoiceId === ans.option_choice_id &&
                d.questionId === quesId
            ).length > 0:checked
            // isAnswer.filter(d=>d.optionChoiceId===ans.option_choice_id).length>0&&isAnswer.filter(q=>q.questionId===quesId).length>0
          }
          id={`${ans.option_choice_id + quesId}`}
          value={ans.option_choice_id}
          onChange={() => _handleChange(quesId, ans.option_choice_id, keys)}
          name={`${quesId}`}
        />
      </ThemeProvider>

      {vertical || ans.option_choice_name}
    </label>
  ));
};

export default withMedia(ESCheckbox);
