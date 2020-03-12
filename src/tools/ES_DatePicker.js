import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ESDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="d-flex flex-row flex-wrap">
      <div className="flex-column px-2 py-2">
        <div className="">Year of Manufacturing</div>
        <DatePicker
          className="form-control"
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="flex-column px-2 py-2">

      <div className="">Year of Installation</div>
        <DatePicker
          className="form-control"
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        </div>
    </div>
  );
};

export default ESDatePicker;
