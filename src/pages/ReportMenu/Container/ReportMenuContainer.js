import React, { useState } from "react";
import ReportMenu from "../Components/ReportMenu";
import moment from "moment";

const ReportMenuContainer = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isDisable,setIsDisable]=useState(true)

  const StartDate = startDate && moment(startDate._d).format("YYYY-MM-DD");
  const EndDate = endDate && moment(endDate._d).format("YYYY-MM-DD");
  const _handleReport = () => {
    if (startDate !== null && endDate !== null) {
      props.history.push(`/report/?startDate=${StartDate}&endDate=${EndDate}`);
    } else {
      props.history.push(`/report`)    }
  };

  const _handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const _handleFocusedInput =(focusedInput) => {setFocusedInput(focusedInput)}
  return (
    <ReportMenu
      startDate={startDate}
      endDate={endDate}
      focusedInput={focusedInput}
      _handleDatesChange={_handleDatesChange}
      _handleFocusedInput={_handleFocusedInput}
      _handleReport={_handleReport}
      isDisable={false}
    />
  );
};
export default ReportMenuContainer;
