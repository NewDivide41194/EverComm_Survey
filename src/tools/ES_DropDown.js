import React, { useState } from "react";

export const ES_DropDown = props => {
  const { value, handleChange, quesId } = props;
  const data=value.map((ans,k3)=>{
      return ans.name}
  )

  return (
    <select className='form-control'>{data.map((x,y) => <option key={y}>{x}</option>)}</select>

  )
};
