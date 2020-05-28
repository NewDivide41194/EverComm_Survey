import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ESDatePicker = (props) => {
  const {
    _handleStartChange,
    _handleEndChange,
    startDate,
    endDate,
    quesId,
  } = props;
console.log("START--->",startDate,"END--->",endDate);

  return (
    <div className="d-flex flex-row flex-wrap">
      <div className="flex-column px-2">
        <div>Year of Manufacturing</div>
        <DatePicker
          className="form-control"
          selected={startDate}
          onChange={(date) => _handleStartChange(date, quesId)}
          selectsStart
          // isClearable
          placeholderText={"Year Of Manufacturing"}
          startDate={startDate}
          maxDate={new Date()}
          endDate={endDate}
        />
      </div>
      <div className="flex-column px-2">
        <div className="">Year of Installation</div>
        <DatePicker
          className="form-control"
          selected={endDate}
          onChange={(date) => _handleEndChange(date, quesId)}
          selectsEnd
          // isClearable
          placeholderText={"Year Of Installation"}
          startDate={startDate}
          maxDate={new Date()}
          endDate={endDate}
        />
      </div>
    </div>
  );
};

export default ESDatePicker;
