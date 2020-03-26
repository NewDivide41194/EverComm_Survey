// import React, { useState } from "react";
// import Select from "react-select";

// export const ESDropDown = props => {
//   const { value, quesId, handleSelect, isAnswer } = props;

//   console.log(
//     "++++++++>",
//     isAnswer
//   );
//   const Options = value.map((v, k) => ({
//     value: v.option_choice_id,
//     label: v.option_choice_name
//   }));
//   return (
//     <select
// id={quesId}
// className="form-control"
// onChange={e => handleSelect(quesId)}
// style={{ boxShadow: "none" }}
// // defaultValue={}
// >
// <option selected disabled>
//   Select an Option ...
// </option>
// {value.map((x, y) => (
//   <option
//     key={y}
//     id={x.option_choice_id}
//     value={x.option_choice_id}
//     >
//     {x.option_choice_name}
//   </option>
// ))}
// </select>
   
//   );
// };


// {/* <Select
// id={`${quesId}`}
// className="w-100"
// options={Options}
// onChange={() => handleSelect(quesId)}
// // defaultValue={{ value: "", label: "Select MaritalStatus" }}
// value={Options.value}
// /> */}

import React, { useState } from 'react';
import Select from 'react-select';

export const ESDropDown =(props)=> {
    const { value, quesId, handleSelect, isAnswer,selectedOption } = props;

  console.log(
    "++++++++>",
    isAnswer
  );
  const Options = value.map((v, k) => ({
    value: v.option_choice_id,
    label: v.option_choice_name
  }));
console.log("5555555",quesId);

 
    return (
      <Select
      className='w-100'
        value={selectedOption}
        onChange={(e)=>handleSelect(e)}
        options={Options}
      />
    );
  
}