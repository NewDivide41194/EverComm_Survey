import React, { useState } from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { withRouter } from "react-router-dom";
import * as Colors from "../../../config/Color.config";
import "react-dates/initialize";
import { DateRangePicker, isInclusivelyBeforeDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "../../../App.css";
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
    _handleClearable,
    isDisable,
    ReportDetailData,
    viewType,
    _handleSelectChange,
  } = props;
  const userLevel=localStorage.getItem("userLevel")
  const isOutsideRange = (day) => !isInclusivelyBeforeDay(day, moment());
  return (
    <div className="container">
      { userLevel==2 ||
      <div className="py-5 d-flex flex-row flex-fill flex-wrap justify-content-end font-weight-bold">
         <div style={{fontSize:"17px"}}>
           Types of View :
         </div>
         <div className="pl-2 radio">
           <label>
             <input type="radio" value="all" name="type" onChange={_handleSelectChange}/>
               All users
           </label>
         </div>
         <div className="pl-2 radio">
           <label>
             <input type="radio" value="one" name="type" onChange={_handleSelectChange}/>
               only me
           </label>
         </div>
       </div>
      } 
      <div
        className="d-flex flex-row flex-fill flex-wrap justify-content-center"
        style={{ marginTop: "8vh" }}
      >
        <div className="col-lg-5 col-sm-12 py-2">
          <h5 style={{ color: Colors.PrimaryColor }}>Select Survey Name</h5>
          <div className="pt-3">
            <ESDropDown
              id={"id"}
              _handleSelect={_handleSelectSurvey}
              options={SurrveyNameOptions}
              value={surveyId}
              onClick={_handleClearable}
            />
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 py-2">
          <h5 style={{ color: Colors.PrimaryColor }}>
            Select Date Range (optional)
          </h5>
          <div className="pt-3">
            <DateRangePicker
              disabled={surveyId?false:true}
              isOutsideRange={isOutsideRange}
              numberOfMonths={1}
              startDate={startDate}
              startDateId="tata-start-date"
              endDate={endDate}
              endDateId="tata-end-date"
              focusedInput={focusedInput}
              onFocusChange={_handleFocusedInput}
              onDatesChange={_handleDatesChange}
              showClearDates={true}
            />
          </div>
        </div>
        <div className="w-100 row justify-content-center py-5">
          <div className="col-lg-3 col-12">
            <ESButton
              // small
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
      <ReportDetail ReportDetailData={ReportDetailData} surveyId={surveyId} />
    </div>
  );
};

const ReportDetail = (props) => {
  const { ReportDetailData, surveyId } = props;
  // console.log(ReportDetailData);

  const filteredData = ReportDetailData&&ReportDetailData.filter(
    (R) => R.survey_header_id === surveyId
  );
  // console.log(filteredData);

  return (
    <div className="">
      {filteredData
        ? filteredData.map((v, k) => (
            <div
              className="d-flex flex-row flex-fill flex-wrap"
              style={{ fontSize: 13 }}
              key={k}
            >
              <div className="col-12">
                <h4 style={{color:Colors.PrimaryColor}}>Report Detail</h4>
                <hr />
              </div>
              <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12">
                <div className="col-4 px-0 font-weight-bold">
                  Building Count
                </div>
                <div className="col-1">:</div>

                <div className="col-7">
                  {v.amount_of_survey.length} buildings
                </div>
              </div>
              <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12 ">
                <div className="col-4 px-0 font-weight-bold">
                  Section Count
                </div>
                <div className="col-1">:</div>

                <div className="col-7">
                  {v.survey_section.length} sections
                </div>
              </div>
              
              <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12 ">
                <div className="col-4 px-0 font-weight-bold">
                  Building Name
                </div>
                <div className="col-1">:</div>
                <div className="col-7">
                  {v.amount_of_survey.map((v1,k1)=>v1.building_name+`${k1+1!==v.amount_of_survey.length?", ":"."}`)}
                </div>
              </div>
              <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12">
                <div className="col-4 px-0 font-weight-bold">
                  Survey Sections
                </div>
                <div className="col-1">:</div>
                <div className="col-7">
                  {v.survey_section.map((v1, k1) => v1.survey_section_name +`${k1+1!==v.survey_section.length?", ":"."}`)}
                </div>
              </div>
              <div className="col-lg-6"></div>
              <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12">
                <div className="col-4 px-0 font-weight-bold">
                  Survey Created Date
                </div>
                <div className="col-1">:</div>
                <div className="col-7">
                  {moment(v.survey_created_date).format("DD-MMM-YYYY")}
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default withRouter(ReportMenu);

