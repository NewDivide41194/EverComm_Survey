import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
export const ESRadio = props => {
  const { value, userId, quesId, cvalue, pageNo } = props;
  const [rvalue, setRvalue] = useState("");

  const handleRadioChange = (ansId, quesId) => {
    let questions = cvalue[pageNo].questions;
    let index = questions.findIndex(q => q.id ===  quesId);

    setRvalue(ansId);
    let ind = cvalue[pageNo].questions[index].possible_answers.findIndex(data => data.id ===  ansId);
    cvalue[pageNo].questions[index].possible_answers.map((ans,k)=> {
      let i = ans.users.findIndex(userid=> userid === userId);
      if(i >= 0){
        cvalue[pageNo].questions[index].possible_answers[k].users.splice(i,1);
      }
    });
    if (ind >= 0 ) {
      cvalue[pageNo].questions[index].possible_answers[ind].users.push(userId);
    } 
  };

  return value.map((ans, k3) => (
    <div className="flex-col w-50" key={k3}>
      <Radio
        color="primary"
        className='p-1'
        checked={rvalue ===  ans.id}
        onChange={e => handleRadioChange(ans.id, quesId)}
        id={ans.id}
        value={ans.name}
      />
      <label style={{display:'contents'}} htmlFor={ans.id}>{ans.name}</label>
    </div>
  ));
};