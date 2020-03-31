import React from "react";
import Radio from "@material-ui/core/Radio";
export const ESRadio = props => {
  const { value, quesId, handleRadioChange, isAnswer } = props;
  return value.map((ans, k3) => (
    <label
      id={`${ans.option_choice_id} div`}
      className="flex-col w-50"
      key={k3}
      onMouseOver={() =>
        (document.getElementById(`${ans.option_choice_id} div`).style.background =
          "rgb(211, 226, 237)")
      }
      onMouseLeave={() =>
        (document.getElementById(`${ans.option_choice_id} div`).style.background =
          "none")
      }
      htmlFor={ans.option_choice_id}
      style={{cursor:'pointer'}}

    >
      <Radio
        color="primary"
        className="p-1"
        name={`${quesId}`}
        checked={isAnswer.filter(d => d === ans.option_choice_id).length > 0}
        onChange={() => handleRadioChange(ans.option_choice_id, quesId)}
        id={`${ans.option_choice_id}`}
        value={ans.option_choice_name}
      />
        {ans.option_choice_name}
    </label>
  ));
};
