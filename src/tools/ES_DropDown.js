import React, { useState } from "react";

export const ESDropDown = props => {
  const { value, pageNo, cvalue, quesId, userId } = props;
  const [svalue, setSvalue] = useState("");
  const handleSelect = (quesId) => {
    let ansId = document.getElementById("Select").value
   
    setSvalue(ansId);
    // let questions = cvalue[pageNo].questions;
    // let quesIndex = questions.findIndex(q => q.id ===  quesId);
    // let ind = cvalue[pageNo].questions[quesIndex].option_choices.findIndex(
    //   data => data.id ===  ansId
    // );

    // cvalue[pageNo].questions[quesIndex].option_choices.map((ans, k) => {
    //   let i = ans.users.findIndex(userid => userid === userId);
    //   if (i >= 0) {
    //     cvalue[pageNo].questions[quesIndex].option_choices[k].users.splice(
    //       i,
    //       1
    //     );
    //   }
    // });
    // if (ind >= 0) {
    //   cvalue[pageNo].questions[quesIndex].option_choices[ind].users.push(
    //     userId
    //   );
    // }
    
  };

  return (
    <select
      id="Select"
      className="form-control"
      onChange={e => handleSelect(quesId)}
      style={{boxShadow:'none'}}
    >
      {value.map((x, y) => (
        <option key={y} id={x.id} value={x.id}>
          {x.option_choice_name}
        </option>
      ))}
    </select>
  );
};
