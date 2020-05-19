import React from "react";
import QuestionCard from "../../../tools/ES_Cards";
import { ESButton } from "../../../tools/ES_Button";
import { withMedia } from "react-media-query-hoc";
import ESProgress from "../../../tools/ES_Progress";
import * as Color from "../../../config/Color.config";
import { withRouter } from "react-router-dom";

const Question = (props) => {
  const {
    buildingName,
    surveyData,
    media,
    userId,
    pageno,
    AnswerData,
    startDate,
    endDate,
    selectedOption,
    obtained,
    total,
    _handleNext,
    _handlePrevious,
    _handleSubmit,
    _handleRadioChange,
    _handleCheckChange,
    _handleSelect,
    _handleInputChange,
    _handleStartChange,
    _handleEndChange,
    percent,
  } = props;
  const isAnswer = AnswerData.map((v, k) => v.optionChoiceId);

  return (
    surveyData.length && (
      <div>
        <ESProgress Percent={percent} />
        <div className="container">
          <div
            className={`text-light row justify-content-end ${
              media.mobile || "pt-3 justify-content-center"
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
            }}
            className="d-flex flex-row flex-wrap justify-content-between pt-2"
          >
            <div>{surveyData[0].survey_name}</div>
            <div>{buildingName}</div>
          </div>

          <div
            className="my-2"
            style={{ fontSize: media.mobile ? "18px" : "20px" }}
          >
            {surveyData[0].survey_sections[pageno].section_name}
          </div>
          <div className="my-2 scrollbar w-100" id="style-1">
            <div className="force-overflow">
              {surveyData[0].survey_sections.length && (
                <QuestionCard
                  survey_sections={surveyData[0].survey_sections}
                  pageno={pageno}
                  _handleCheckChange={_handleCheckChange}
                  _handleRadioChange={_handleRadioChange}
                  _handleInputChange={_handleInputChange}
                  _handleSelect={_handleSelect}
                  _handleStartChange={_handleStartChange}
                  _handleEndChange={_handleEndChange}
                  userId={userId}
                  selectedOption={selectedOption}
                  AnswerData={AnswerData}
                  startDate={startDate}
                  endDate={endDate}
                  isAnswer={isAnswer}
                />
              )}
            </div>
          </div>
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
                      small
                      leftIcon={<i className="fa fa-caret-left pr-2" />}
                    />
                  ) : null}
                </div>
                <div className="col-lg-4 col-6 p-2">
                  {surveyData.length &&
                  surveyData[0].survey_sections.length === pageno + 1 ? (
                    <ESButton
                      text={"DONE"}
                      small
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
                      small
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

export default withRouter(withMedia(Question));
