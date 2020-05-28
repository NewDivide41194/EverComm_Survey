import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

const ESDatePicker = (props) => {
  const {_handleStartChange,_handleEndChange,startDate,endDate,quesId}=props

  return (
    <div className="d-flex flex-row flex-wrap">
      <div className="flex-column px-2">
        <div className="">Year of Manufacturing</div>
        <DatePicker
          className="form-control"
          selected={startDate}
          isClearable
          onChange={date => _handleStartChange(date,quesId)}
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
          isClearable
          onChange={date => _handleEndChange(date,quesId)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
        />
        </div>
    </div>
  );
};

export default ESDatePicker;
