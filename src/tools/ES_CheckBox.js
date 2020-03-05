import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import withMedia from "react-media-query-hoc/dist/with-media";

const ESCheckbox = props => {
  const { value, handleChange, quesId, media } = props;


  return value.map((ans, k3) => (
    <div className={`flex-col ${media.mobile ? "w-100" : "w-50"}`} key={k3}>
      <Checkbox
        color="primary"
        className="p-1"
        id={`${ans.option_choice_id}`}
        value={ans.option_choice_id}
        onChange={() => handleChange(quesId, ans.option_choice_id)}
      />
      <label style={{ display: "contents" }} htmlFor={ans.option_choice_id}>
        {ans.option_choice_name}
      </label>
    </div>
  ));
};

export default withMedia(ESCheckbox);
