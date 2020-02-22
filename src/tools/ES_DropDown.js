import React, { useState } from "react";

export const ES_DropDown = props => {
  const { value, pageNo, cvalue, quesId, userId } = props;
  const [svalue, setSvalue] = useState("");


  console.log("Value------>", value);

  const handleSelect = (quesId) => {
    let ansId = document.getElementById("Select").value
    let questions = cvalue[pageNo].questions;
    let quesIndex = questions.findIndex(q => q.id === quesId);
    setSvalue(ansId);
    let ind = cvalue[pageNo].questions[quesIndex].possible_answers.findIndex(
      data => data.id === ansId
    );
    console.log("INDEX ==>", ind);

    cvalue[pageNo].questions[quesIndex].possible_answers.map((ans, k) => {
      let i = ans.users.findIndex(userid => userid == userId);
      if (i >= 0) {
        cvalue[pageNo].questions[quesIndex].possible_answers[k].users.splice(
          i,
          1
        );
      }
    });
    if (ind >= 0) {
      cvalue[pageNo].questions[quesIndex].possible_answers[ind].users.push(
        userId
      );
    }
    console.log("ANS Id",ansId);
    
  };

  return (
    <select
      id="Select"
      className="form-control"
      onChange={e => handleSelect(quesId)}
    >
      {value.map((x, y) => (
        <option key={y} id={x.id} value={x.id}>
          {x.name}
        </option>
      ))}
    </select>
  );
};
