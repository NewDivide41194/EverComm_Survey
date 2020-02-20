import React,{useState} from "react";
import Checkbox from "@material-ui/core/Checkbox";

export const ES_CheckBox = props => {
  const { value,handleChange,quesId } = props;

  return value.map((ans, k3) => (
    <div className="flex-col w-50" key={k3}>
      <Checkbox id={ans.id} value={ans.id} onChange={e=>handleChange(quesId,ans.id)}/>
      <label>{ans.name}</label>
    </div>
  ));
};
