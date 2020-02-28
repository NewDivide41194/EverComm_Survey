import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
export const ESRadio = props => {
  const { value, userId, quesId, cvalue, pageNo } = props;
  const [rvalue, setRvalue] = useState("");

  const handleRadioChange = (ansId, quesId) => {
    let questions = cvalue[pageNo].questions;
    let index = questions.findIndex(q => q.id ===  quesId);

    setRvalue(ansId);
    // let ind = cvalue[pageNo].questions[index].option_choices.findIndex(data => data.id ===  ansId);
    
    // cvalue[pageNo].questions[index].option_choices.map((ans,k)=> {
    //   let i = ans.users.findIndex(userid=> userid === userId);
    //   if(i >= 0){
    //     cvalue[pageNo].questions[index].option_choices[k].users.splice(i,1);
    //   }
    // });
    // if (ind >= 0 ) {
    //   cvalue[pageNo].questions[index].option_choices[ind].users.push(userId);
    // } 
  };

  return value.map((ans, k3) => (
    <div className="flex-col w-50" key={k3}>
      <Radio
        color="primary"
        className='p-1'
        checked={rvalue ===  ans.option_choice_id}
        onChange={e => handleRadioChange(ans.option_choice_id, quesId)}
        id={`${ans.option_choice_id}`}
        value={ans.option_choice_name}
      />
      <label style={{display:'contents'}} htmlFor={ans.option_choice_id}>{ans.option_choice_name}</label>
    </div>
  ));
};