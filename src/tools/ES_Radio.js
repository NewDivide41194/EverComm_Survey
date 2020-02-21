import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
export const ES_Radio = props => {
  const { value, quesId, rvalue,handleRadioChange} = props;
console.log(props);


  return value.map((ans, k3) => (
    <div className="flex-col w-50" key={k3}>
      <Radio
        color="primary"
        checked={rvalue === ans.id}
        onChange={e => handleRadioChange(ans.id, quesId)}
        id={ans.id}
        value={ans.name}
      />
      <label>{ans.name}</label>
    </div>
  ));
};
