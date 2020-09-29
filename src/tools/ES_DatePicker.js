import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css'

const ESDatePicker = (props) => {
  const {
    _handleStartChange,
    _handleDateChange,
    placeHolder,
    startDate,
    quesId,
    type,
    keys,
    isDate
  } = props;

  return (
    <div className="">
    { isDate === undefined ? 
      <DatePicker
          className="form-control shadow-none border"
          selected={startDate}
          onChange={(date) => _handleStartChange(date, quesId,keys,type)}
          selectsStart
          placeholderText={placeHolder}
          startDate={startDate}
          maxDate={new Date()}
          // endDate={endDate}
          showYearPicker
          dateFormat= "yyyy"
          keys={keys}
        />
        : 
        <DatePicker
          className="w-100 form-control shadow-none border"
          
          placeholderText={placeHolder}
          selected={startDate}
          startDate={startDate}
          onChange={date => _handleDateChange(date, quesId,keys,type)}
          dateFormat= "dd MMMM yyyy"
          keys={keys}
        />
    }
    </div>
   
  );
};

export default ESDatePicker;
