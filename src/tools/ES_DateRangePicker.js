import React from 'react'
import moment from 'moment'
import {ESButton} from './ES_Button'
import RangePicker from "react-range-picker";

export const PickerWithCustomePlaceholder = (props) => {
    const {onDateChange,viewReport}=props
    const placeholder = ({ startDate, endDate }) => {
      let _startDate = "";
      let _endDate = "";
      if (startDate) {
        _startDate = `${moment(startDate).format("YYYY-MM-DD")}`;
      }
      if (endDate) {
        _endDate = `${moment(endDate).format("YYYY-MM-DD")}`;
      }
      return (
        <div className="py-2">
          <ESButton
            text={
              !_startDate
                ? "Select Date to View Report"
                : `${_startDate} - ${_endDate}`
            }
            small
          />
        </div>
      );
    };
 
    return (
      <RangePicker
        placeholder={placeholder}
        onDateSelected={onDateChange}
        onClose={
          viewReport
        }
      />
    );
  };
  