import React, { useState, useEffect } from "react";
import QuestionCard from "../../../tools/ES_CompoundCard";
import { ESButton } from "../../../tools/ES_Button";
import { withMedia } from "react-media-query-hoc";
import ESProgress from "../../../tools/ES_Progress";
import * as Color from "../../../config/Color.config";
const Question = (props) => {
  const {
    buildingName,
    buildingType,
    surveyData,
    media,
    userId,
    pageno,
    AnswerData,
    QuestionData,
    selectedOption,
    obtained,
    total,
    bTypeId,
    _handleNext,
    _handlePrevious,
    _handleSubmit,
    _handleRadioChange,
    _handleCheckChange,
    _handleSelect,
    _handleInputChange,
    _handleStartChange,
    _handleEndChange,
    amountOfDevice,
    percent,
    otherQuestion,
    otherAns,
    otherOfQuestion,
    weekAns,
    weekQuestion,
  } = props;
  const organization = localStorage.getItem("organization");
  const countryName = localStorage.getItem("countryName");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const surveySection = localStorage.getItem("surveySection");

  // console.log('surveyData >>> ', surveyData)

  const deviceAmount =
    amountOfDevice && amountOfDevice.length > 0
      ? Object.values(amountOfDevice[0])[pageno - 1]
      : null;
  return (
    surveyData.length && (
      <div style={{ marginBottom: 32 }}>
        <ESProgress Percent={percent} />
        <div className="container">
          <div
            className={`text-light row justify-content-end pt-3 ${
              media.mobile || "justify-content-center"
            }`}
          >
            <div
              className={`px-${media.mobile ? 2 : 4} position-fixed`}
              style={{
                minWidth: 160,
                borderRadius: media.mobile ? "20px 0px 0 20px" : "20px",
                background: "rgba(0,0,0,0.7)",
                zIndex: "1",
              }}
            >{`${obtained || 0} of ${total} Answered`}</div>
          </div>
          <div
            style={{
              fontSize: media.mobile ? "20px" : "25px",
              fontWeight: "bold",
              color: Color.PrimaryColor,
            }}
            className="d-flex flex-row flex-wrap justify-content-between pt-2"
          >
            <div>{surveyData[0].survey_name}</div>
            {surveyHeaderId != 10 && (
              <div>
                {buildingName}{" "}
                <span style={{ fontSize: "15px" }}>{buildingType}</span>
              </div>
            )}
          </div>

          <div
            className="d-flex flex-row flex-wrap justify-content-between pt-2"
            style={{ fontSize: media.mobile ? "18px" : "20px" }}
          >
            {/* <div className="font-weight-bold">
              {surveyData[0].survey_sections[pageno].section_name +
                " in " +
                countryName}
            </div> */}
            <div className="font-weight-bold">
              {surveySection}
            </div>
            {surveyData[0].survey_sections[pageno].survey_section_id === 10 ? (
              <div>
                <span style={{ fontWeight: "bold" }}>Organization: </span>
                <span>{organization}</span>
              </div>
            ) : (
              <div>
                {deviceAmount} {Object.keys(amountOfDevice[0])[pageno - 1]}
                {deviceAmount > 1 ? "s" : null}
              </div>
            )}
          </div>

          <QuestionCard
            // QuestionData={QuestionData}
            // pageno={pageno}
            {...props}
            amountOfDevice={amountOfDevice}
            sessionId={surveyData[0].survey_sections[pageno].survey_section_id}
            // groupQuestion={surveyData[0].survey_sections[pageno].}
            // otherAns={otherAns}
            // otherOfQuestion={otherOfQuestion}
            // weekAns={weekAns}
            // weekQuestion={weekQuestion}
          />
          <div className="row justify-content-between">
            <div
              className="col-lg-6 align-self-center font-weight-bold"
              style={{ color: `${Color.PrimaryColor}` }}
            >{`Page - ${pageno + 1} of ${
              surveyData[0].survey_sections.length
            }`}</div>
            <div className="col-lg-6">
              <div className="row justify-content-end">
                <div className="col-lg-4 col-6 p-2">
                  {surveyData.length && pageno > 0 ? (
                    <ESButton
                      text={"PREVIOUS"}
                      onClick={_handlePrevious}
                      leftIcon={<i className="fa fa-caret-left pr-2" />}
                    />
                  ) : null}
                </div>
                <div className="col-lg-4 col-6 p-2">
                  {surveyData.length &&
                  surveyData[0].survey_sections.length === pageno + 1 ? (
                    <ESButton
                      text={"DONE"}
                      onClick={_handleSubmit}
                      disabled={AnswerData.length === 0 ? true : false}
                      style={{
                        cursor:
                          AnswerData.length === 0 ? "not-allowed" : "pointer",
                      }}
                    />
                  ) : (
                    <ESButton
                      text={"NEXT"}
                      onClick={_handleNext}
                      rightIcon={<i className="fa fa-caret-right pl-2" />}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default withMedia(Question);
