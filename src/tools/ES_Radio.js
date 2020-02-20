import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
export const ES_Radio = props => {
  const { value, quesId, cvalue, userId } = props;
  const [rvalue, setRvalue] = useState("");
  const handleChange = (ansId, quesId) => {
    setRvalue(ansId);
    let ind = cvalue.findIndex(data => data.question_id == quesId);
    console.log(ind);

    if (ind < 0) {
      cvalue.push({ question_id: quesId, answer_id: ansId, user_id: userId });
    } else {
      cvalue.splice(ind, 1, {
        question_id: quesId,
        answer_id: ansId,
        user_id: userId
      });
    }

    console.log(cvalue);
  };

  return value.map((ans, k3) => (
    <div className="flex-col w-50" key={k3}>
      <Radio
        checked={rvalue === ans.id}
        onChange={e => handleChange(ans.id, quesId)}
        id={ans.id}
        value={ans.name}
      />
      <label>{ans.name}</label>
    </div>
  ));
};
