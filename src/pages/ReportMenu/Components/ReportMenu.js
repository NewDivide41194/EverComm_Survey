import React, { useState } from "react";
import "../../../App.css";
import { ESButton } from "../../../tools/ES_Button";
import { ESDropDown } from "../../../tools/ES_DropDown";
import { withRouter } from "react-router-dom";
import { ESRadio } from "../../../tools/ES_Radio";
import * as Colors from "../../../config/Color.config";
import moment from "moment";

const ReportMenu = (props) => {
  const {
    surveyId,
    SurveyNameOptions,
    _handleReport,
    _handleSelectSurvey,
    _handleClearable,
    isDisable,
    ReportDetailData,
    viewType,
    _handleSelectChange,
    _handleSelectCountry,
    CountryOptions,
    countryName
  } = props;
  const userLevel = localStorage.getItem("userLevel");

  return (
    <div className="container">
      <div
        className="py-5 d-flex flex-row flex-fill flex-wrap justify-content-end"
        style={{ fontSize: "18px" }}
      >
        <label style={{ fontWeight: "bold" }}>Types of View :</label>
        <div className="pl-2">
          <input
            className="mr-1"
            type="radio"
            value="all"
            name="type"
            onChange={_handleSelectChange}
          />
          All users
        </div>
        <div className="pl-2 ">
          <input
            className="mr-1"
            type="radio"
            value="one"
            name="type"
            onChange={_handleSelectChange}
            checked={viewType === "one"}

          />
          Only me
        </div>
      </div>

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
              options={SurveyNameOptions}
              value={surveyId}
              onClick={_handleClearable}
            />
          </div>
        </div>
        {
          (surveyId && surveyId == 10) && (viewType === "one") &&
          <div className="w-100 row justify-content-center">
          <div className="col-lg-5 col-sm-12 py-2">
          <h5 className="py-3" style={{ color: Colors.PrimaryColor }}>Select Country</h5>
              <ESDropDown 
              notClearable
                _handleSelect = {_handleSelectCountry}
                options = {CountryOptions}
                value={countryName}
                onClick={_handleClearable}
              />
          </div>
          </div>
        }
        <div className="w-100 row justify-content-center pt-5 pb-3">
          <div className="col-lg-3 col-12">
            <ESButton
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
  const filteredData =
    ReportDetailData &&
    ReportDetailData.filter((R) => R.survey_header_id === surveyId);

  return (
    <div>
      {filteredData
        ? filteredData.map((v, k) => (
          <div
            className="d-flex flex-row flex-fill flex-wrap"
            style={{ fontSize: 13 }}
            key={k}
          >
            <div className="col-12">
              <h4 style={{ color: Colors.PrimaryColor }}>Report Detail</h4>
              <hr />
            </div>
            {v.amount_of_survey.length != '' ?
              <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12">
                <div className="col-4 px-0 font-weight-bold">
                  Building Count
              </div>
                <div className="col-1">:</div>

                <div className="col-7">
                  {v.amount_of_survey.length}buildings
              </div>
              </div> : <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12">
                <div className="col-4 px-0 font-weight-bold">
                  Country Count
                </div>
                <div className="col-1">:</div>

                <div className="col-7">
                  {v.amount_of_country.length}countrys
                </div>
              </div>}

            <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12 ">
              <div className="col-4 px-0 font-weight-bold">Section Count</div>
              <div className="col-1">:</div>
              <div className="col-7">{v.survey_section.length} sections</div>
            </div>

            {v.amount_of_survey.length != '' ?
              <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12 ">
                <div className="col-4 px-0 font-weight-bold">Building Name</div>
                <div className="col-1">:</div>
                <div className="col-7">
                  {v.amount_of_survey.map(
                    (v1, k1) =>
                      v1.building_name +
                      `${k1 + 1 !== v.amount_of_survey.length ? ", " : "."}`
                  )}
                </div>
              </div> : <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12 ">
                <div className="col-4 px-0 font-weight-bold">Country Name</div>
                <div className="col-1">:</div>
                <div className="col-7">
                  {v.amount_of_country.map(
                    (v1, k1) =>
                      v1.country_name +
                      `${k1 + 1 !== v.amount_of_country.length ? ", " : "."}`
                  )}
                </div>
              </div>}
            <div className="d-flex flex-row flex-fill col-lg-6 col-sm-12">
              <div className="col-4 px-0 font-weight-bold">
                Survey Sections
                </div>
              <div className="col-1">:</div>
              <div className="col-7">
                {v.survey_section.map(
                  (v1, k1) =>
                    v1.survey_section_name +
                    `${k1 + 1 !== v.survey_section.length ? ", " : "."}`
                )}
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
