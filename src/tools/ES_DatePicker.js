import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ESDatePicker = (props) => {
  const {
    _handleStartChange,
    placeHolder,
    startDate,
    quesId,
    type,
    keys
  } = props;
  return (
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
          dateFormat="yyyy"
          keys={keys}
        />
  );
};

export default ESDatePicker;
