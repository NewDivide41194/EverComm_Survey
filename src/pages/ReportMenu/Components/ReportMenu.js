import React, { useState } from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { withRouter } from "react-router-dom";
import * as Colors from "../../../config/Color.config";
import "react-dates/initialize";
import { DateRangePicker, isInclusivelyBeforeDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "../../../App.css"
import moment from "moment";
const ReportMenu = (props) => {
  const {
    startDate,
    endDate,
    focusedInput,
    surveyId,
    SurrveyNameOptions,
    _handleReport,
    _handleSelectSurvey,
    _handleDatesChange,
    _handleFocusedInput,
    isDisable
  } = props;
  const isOutsideRange = (day) => !isInclusivelyBeforeDay(day, moment());

  return (
    <div className="container">
      <div className="d-flex flex-row flex-fill flex-wrap justify-content-center" style={{marginTop:"20vh"}}> 
        <div className="col-lg-5 col-sm-12 py-2">
          <h5 style={{ color: Colors.PrimaryColor }}>
            Select Survey Name
          </h5>
          <div className="pt-3">
            <ESDropDown 
               id={"id"}
               _handleSelect={_handleSelectSurvey}
               options={SurrveyNameOptions}
               value={surveyId}
            />
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 py-2">
          <h5 style={{ color: Colors.PrimaryColor }}>
            Select Date Range (optional)
          </h5>
          <div className="pt-3">
            <DateRangePicker
              isOutsideRange={isOutsideRange}
              numberOfMonths={1}
              startDate={startDate}
              startDateId="tata-start-date"
              endDate={endDate}
              endDateId="tata-end-date"
              focusedInput={focusedInput}
              onFocusChange={_handleFocusedInput}
              onDatesChange={_handleDatesChange}
              // showDefaultInputIcon={true}
            />
          </div>
        </div>
        <div className="w-100 row justify-content-center py-5">
        <div className="col-lg-3 col-12">
          <ESButton
            small
            disabled={isDisable}
            text={"View report"}
            style={{ fontSize: 23 }}
            onClick={() => _handleReport()}
            rightIcon={
              <i
                className="fas fa-arrow-circle-right pl-3"
                style={{ fontSize: 25 }}
              ></i>
            }
          />
        </div>
      </div>
      </div>
      
    </div>
  );
};
export default withRouter(ReportMenu);

