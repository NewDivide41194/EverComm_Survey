import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const ESDatePicker = (props) => {
  const {handleStartChange,handleEndChange,startDate,endDate,quesId}=props

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
        />
        </div>
    </div>
  );
};

export default ESDatePicker;
