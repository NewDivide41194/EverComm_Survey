import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ESDatePicker = (props) => {
  const {handleStartChange,handleEndChange,startDate,endDate,quesId}=props

  console.log("START-------->",startDate);
  console.log("End---------->",endDate);
  console.log(quesId);
  
  

  return (
    <div className="d-flex flex-row flex-wrap">
      <div className="flex-column px-2">
        <div className="">Year of Manufacturing</div>
        <DatePicker
          className="form-control"
          selected={startDate}
          onChange={date => handleStartChange(date,quesId)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          // dateFormat ="DD/MM/YYYY"
        />
      </div>
      <div className="flex-column px-2">

      <div className="">Year of Installation</div>
        <DatePicker
          className="form-control"
          selected={endDate}
          onChange={date => handleEndChange(date,quesId)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          // dateFormat ="DD/MM/YYYY"
        />
        </div>
    </div>
  );
};

export default ESDatePicker;
