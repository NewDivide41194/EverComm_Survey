import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
export const ES_Radio = props => {
  const { value, userId, quesId, cvalue, pageNo } = props;
  const [rvalue, setRvalue] = useState("");
  console.log("11111111111", props);
  let isUser = cvalue.findIndex(data => data.user_id === userId);

  // console.log(cvalue[0].questions[1].possible_answers[0].users.push(userId));

  const handleRadioChange = (ansId, quesId) => {
    let questions = cvalue[pageNo].questions;
    let index = questions.findIndex(q => q.id === quesId);

    setRvalue(ansId);
    let ind = cvalue[pageNo].questions[index].possible_answers.findIndex(data => data.id === ansId);
    console.log("User===>", ind);

    let isUser = cvalue.findIndex(data => data.user_id === userId);

    if (ind > 0 ) {
      cvalue[pageNo].questions[index].possible_answers[ind].users.push(
        userId
      );
    } 
  };

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
