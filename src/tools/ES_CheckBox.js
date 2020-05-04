import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import withMedia from "react-media-query-hoc/dist/with-media";
import blue from '@material-ui/core/colors/blue.js';

const ESCheckbox = props => {
  const { value, _handleChange, quesId, media, isAnswer } = props;
  const primary=blue.A100
  return value.map((ans, k3) => (
    <label
      id={`${ans.option_choice_id} div`}
      className={`flex-column ${media.mobile ? "w-100" : "w-50"}`}
      key={k3}
      onMouseOver={() =>
        (document.getElementById(`${ans.option_choice_id} div`).style.background =
          "rgb(211, 226, 237)")
      }
      onMouseLeave={() =>
        (document.getElementById(`${ans.option_choice_id} div`).style.background =
          "none")
      }
      style={{cursor:'pointer'}}
    >
      <Checkbox
        color={primary}
        className="p-1"
        checked={isAnswer.filter(d => d === ans.option_choice_id).length > 0}
        id={`${ans.option_choice_id}`}
        value={ans.option_choice_id}
        onChange={() => _handleChange(quesId, ans.option_choice_id)}
      />
        {ans.option_choice_name}
    </label>
  ));
};

export default withMedia(ESCheckbox);
