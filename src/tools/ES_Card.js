import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";

import { withMedia } from "react-media-query-hoc";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";

const QuestionCard1 = (props) => {
  const {
    QuestionData,
    _handleRadioChange,
    _handleCheckChange,
    _handleInputChange,
    _handleStartChange,
    _handleSelect,
    _handleEndChange,
    _handleDateChange,
    isQuestion,
    media,
    selectedOption,
    AnswerData,
    otherAns,
    otherOfQuestion,
    startDate
  } = props;

  const ageOfBuildingOption = new Array(99)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));
console.log(AnswerData);
  return (
    QuestionData &&
    QuestionData.map((ques, k2) => {
      const questionId = ques.question_id.toString();
      return (
        <div
          className="d-flex flex-row flex-fill flex-wrap w-100 p-3 mb-3 rounded bg-light border"
          key={k2}
          id={ques.questionId}
          style={{
            fontSize: media.mobile ? "12px" : "15px",
          }}
        >
          <div
            className="d-flex flex-row flex-wrap w-100"
            key={k2}
            style={{ fontSize: media.mobile ? "15px" : "18px" }}
          >
            <div className="d-flex flex-row pb-3 w-100  justify-content-between">
              {k2 + 1}. {ques.question_name}
              {AnswerData.map((v, k) => v.questionId).filter(
                (v) => v === questionId
              )[0] === questionId ? (
                <QuestionCardInfo info={"Answered"} media={media} />
              ) : (
                <QuestionCardInfo info={"Pending"} media={media} />
              )}
            </div>
          </div>
          {ques.input_type_id === 1 ? (
            <ESCheckBox
              quesId={questionId}
              value={ques.option_choices}
              _handleChange={_handleCheckChange}
              isAnswer={AnswerData}
              isQuestion={isQuestion}
              keys={ques.question_id}
            />
          ) : ques.input_type_id === 2 ? (
            <div className="w-100">
              <ESRadio
                value={ques.option_choices}
                _handleRadioChange={_handleRadioChange}
                quesId={questionId}
                isAnswer={AnswerData}
                isQuestion={isQuestion}
                keys={ques.question_id}
              />
              {otherAns(questionId, ques.question_id, otherOfQuestion(k2))
                .length > 0 ? (
                <div className="pt-2">
                  <ESInput
                    maxLength={30}
                    placeHolder={"Fill Your Answer"}
                    id={questionId}
                    value={AnswerData.filter(
                      (d) => d.questionId === questionId
                    ).map((v, k) => v.other)}
                    onChange={(e) => {
                      _handleInputChange(
                        e,
                        questionId,
                        ques.question_id,
                        otherOfQuestion(k2)
                      );
                    }}
                  />
                </div>
              ) : null}
            </div>
          ) : ques.input_type_id === 5 ? (
            ques.option_choices[0].option_choice_id === null ? (
              <ESDropDown
                quesId={questionId}
                options={ageOfBuildingOption}
                _handleSelect={_handleSelect}
                selectedOption={
                  AnswerData.filter((d) => d.questionId === questionId)
                    ? AnswerData.filter((d) => d.questionId === questionId).map(
                        (v, k) => v.other
                      )
                    : selectedOption
                }
                keys={ques.question_id}
              />
            ) : (
              <div className="w-100">
                <ESDropDown
                  quesId={questionId}
                  options={ques.option_choices.map((v, k) => ({
                    value: v.option_choice_id,
                    label: v.option_choice_name,
                  }))}
                  _handleSelect={_handleSelect}
                  selectedOption={
                    AnswerData.filter((d) => d.questionId === questionId)
                      ? AnswerData.filter(
                          (d) => d.questionId === questionId
                        ).map(
                          (v, k) =>
                            ques.option_choices.filter(
                              (x, y) => x.option_choice_id === v.optionChoiceId
                            )[0]
                        )
                      : selectedOption
                  }
                  keys={ques.question_id}
                />
                {otherAns(questionId, ques.question_id, otherOfQuestion(k2))
                  .length > 0 ? (
                  <div className="pt-2">
                    <ESInput
                      maxLength={30}
                      placeHolder={"Fill Your Answer"}
                      id={questionId}
                      value={
                        AnswerData.filter((d) => d.questionId === questionId)
                          .length && AnswerData.length
                          ? AnswerData.filter(
                              (d) => d.questionId === questionId
                            ).map((v, k) => v.other)[0]
                          : null
                      }
                      onChange={(e) => {
                        _handleInputChange(
                          e,
                          questionId,
                          null,
                          ques.question_id,
                          otherOfQuestion(k2)
                        );
                      }}
                    />
                  </div>
                ) : null}
              </div>
            )
          ) : ques.input_type_id === 4 ? (
            <ESInput
              maxLength={30}
              placeHolder={"Fill Your Answer"}
              id={questionId}
              value={AnswerData.filter((d) => d.questionId === questionId).map(
                (v, k) => v.other
              )}
              onChange={(e) => {
                _handleInputChange(e, questionId, ques.question_id);
              }}
            />
          ) : ques.input_type_id === 6 ? (
            <ESDatePicker
              quesId={questionId}
              startDate={
                AnswerData.filter((d) => d.questionId === questionId).length &&
                AnswerData.length
                  ? AnswerData.filter((d) => d.questionId === questionId).map(
                      (v, k) =>
                        new Date(JSON.parse(v.other).YearOfManufacturing)
                    )[0]
                  : null
              }
              _handleEndChange={_handleEndChange}
              _handleStartChange={_handleStartChange}
              keys={ques.question_id}
            />
          ) : ques.input_type_id === 8 ? (
            <div className="w-100">
              <ESDatePicker
                quesId={questionId}
                placeHolder={ques.question_name}
                startDate={
                  startDate||
                  AnswerData.filter(
                  (d) => d.questionId === questionId
                  ).length && AnswerData.length
                  ? AnswerData.filter(
                    (d) => d.questionId === questionId
                    ).map((v, k) => new Date(v.other))[0]
                    : null
                }
                _handleDateChange={_handleDateChange}
                keys={ques.question_id}
                type={ques.question_name}
                isDate={true}
              />
            </div>
          ) : null}
        </div>
      );
    })
  );
};

export default withMedia(QuestionCard1);

const QuestionCardInfo = (props) => {
  const { info, media } = props;
  return (
    <div>
      {/* {media.mobile || (
        <span style={{ fontSize: 10 }} className="text-secondary pr-1">
          {info}
        </span>
      )} */}
      <i
        className={`fa ${
          info === "Answered"
            ? "fa-check-circle text-success"
            : "fa-exclamation-circle text-warning"
        }`}
        title="Answered"
      />
    </div>
  );
};
