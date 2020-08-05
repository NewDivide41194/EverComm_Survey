import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";
import { ESButton } from "./ES_Button";

import { withMedia } from "react-media-query-hoc";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";
import moment from "moment";

import QuestionCard1 from "./ES_Card1";

const QuestionCard = (props) => {
  const {
    QuestionData,
    _handleRadioChange,
    _handleCheckChange,
    _handleInputChange,
    _handleStartChange,
    _handleSelect,
    isQuestion,
    pageno,
    media,
    selectedOption,
    AnswerData,
    amountOfDevice,
    sessionId,
  } = props;

  if (sessionId !== 2) return <QuestionCard1 {...props} />;

  const buildingId = localStorage.getItem("buildingId");
  const deviceIndexValue = amountOfDevice && Object.values(amountOfDevice[0]);
  const addedQuestionId = 1000;

  const pageDeviceIndex = pageno === 0 ? 1 : deviceIndexValue[pageno - 1];

  const QuestionCards = new Array(pageDeviceIndex).fill(null).map((v, k3) => {
    return (
      <div key={k3} className="d-flex my-3 pt-2 rounded bg-light border">
        <div className="p-2 py-1">
          <div className="font-weight-bold">{k3 + 1}.</div>
        </div>
        <div className="flex-fill px-2 ">
          <div className="py-2 font-weight-bold">{`Device No.` + (k3 + 1)}</div>
          {QuestionData &&
            QuestionData.map((ques, k2) => {
              const remakeQuestionId =
                pageDeviceIndex > 1
                  ? Object.keys(amountOfDevice[0])[pageno - 1] +
                    addedQuestionId +
                    k3 +
                    buildingId +
                    ques.question_id
                  : ques.question_id.toString();
              return (
                <div
                  className="d-flex flex-row flex-fill flex-wrap w-100 py-0"
                  key={k2}
                  id={ques.questionId}
                >
                  <div
                    className="d-flex flex-row flex-wrap w-100"
                    key={k2}
                  >
                    <div className="d-flex flex-row pb-3 w-100 justify-content-between">
                      <div className="w-25">{ques.question_name}</div>
                      <div className="w-75">
                        {ques.input_type_id === 1 ? (
                          <ESCheckBox
                            quesId={remakeQuestionId}
                            value={ques.option_choices}
                            _handleChange={_handleCheckChange}
                            isAnswer={AnswerData}
                            isQuestion={isQuestion}
                            keys={ques.question_id}
                          />
                        ) : ques.input_type_id === 2 ? (
                          <ESRadio
                            value={ques.option_choices}
                            _handleRadioChange={_handleRadioChange}
                            quesId={remakeQuestionId}
                            isAnswer={AnswerData}
                            isQuestion={isQuestion}
                            keys={ques.question_id}
                          />
                        ) : ques.input_type_id === 5 ? (
                          <ESDropDown
                            // quesId={remakeQuestionId}
                            // options={deviceOption}
                            // _handleSelect={_handleSelect}
                            // keys={ques.question_id}

                            quesId={remakeQuestionId}
                            options={ques.option_choices.map((v, k) => ({
                              value: v.option_choice_id,
                              label: v.option_choice_name,
                            }))}
                            _handleSelect={_handleSelect}
                            selectedOption={
                              AnswerData.filter(
                                (d) => d.questionId === remakeQuestionId
                              )
                                ? AnswerData.filter(
                                    (d) => d.questionId === remakeQuestionId
                                  ).map(
                                    (v, k) =>
                                      ques.option_choices.filter(
                                        (x, y) =>
                                          x.option_choice_id ===
                                          v.optionChoiceId
                                      )[0]
                                  )
                                : selectedOption
                            }
                            keys={ques.question_id}
                          />
                        ) : ques.input_type_id === 4 ? (
                          <ESInput
                            maxLength={10}
                            placeHolder={"Fill Your Answer"}
                            id={remakeQuestionId}
                            value={AnswerData.filter(
                              (d) => d.questionId === remakeQuestionId
                            ).map((v, k) => v.other)}
                            onChange={(e) => {
                              _handleInputChange(
                                e,
                                remakeQuestionId,
                                ques.question_id
                              );
                            }}
                          />
                        ) : ques.input_type_id === 6 ? (
                          <ESDatePicker
                            quesId={remakeQuestionId}
                            placeHolder={ques.question_name}
                            startDate={
                              AnswerData.filter(
                                (d) => d.questionId === remakeQuestionId
                              ).length && AnswerData.length
                                ? AnswerData.filter(
                                    (d) => d.questionId === remakeQuestionId
                                  ).map((v, k) => new Date(v.other))[0]
                                : null
                            }
                            _handleStartChange={_handleStartChange}
                            keys={ques.question_id}
                            type={ques.question_name}
                          />
                        ) : null}
                      </div>
                      <div className="">
                        {AnswerData.map((v, k) => v.questionId).filter(
                          (v) => v === remakeQuestionId
                        )[0] === remakeQuestionId ? (
                          <QuestionCardInfo info={"Answered"} media={media} />
                        ) : (
                          <QuestionCardInfo info={"Pending"} media={media} />
                        )}
                      </div>
                    </div>
                  </div>
                  {/* {ques.input_type_id === 1 ? (
                        <ESCheckBox
                          quesId={remakeQuestionId}
                          value={ques.option_choices}
                          _handleChange={_handleCheckChange}
                          isAnswer={AnswerData}
                          isQuestion={isQuestion}
                          keys={ques.question_id}
                        />
                      ) : ques.input_type_id === 2 ? (
                        <ESRadio
                          value={ques.option_choices}
                          _handleRadioChange={_handleRadioChange}
                          quesId={remakeQuestionId}
                          isAnswer={AnswerData}
                          isQuestion={isQuestion}
                          keys={ques.question_id}
                        />
                      ) : ques.input_type_id === 5 ? (
                        <ESDropDown
                        // quesId={remakeQuestionId}
                        // options={deviceOption}
                        // _handleSelect={_handleSelect}
                        // keys={ques.question_id}

                          quesId={remakeQuestionId}
                          options={ques.option_choices.map((v, k) => ({
                            value: v.option_choice_id,
                            label: v.option_choice_name,
                          }))}
                          _handleSelect={_handleSelect}
                          selectedOption={
                            AnswerData.filter(
                              (d) => d.questionId === remakeQuestionId
                            )
                              ? AnswerData.filter(
                                  (d) => d.questionId === remakeQuestionId
                                ).map(
                                  (v, k) =>
                                    ques.option_choices.filter(
                                      (x, y) =>
                                        x.option_choice_id === v.optionChoiceId
                                    )[0]
                                )
                              : selectedOption
                          }
                          keys={ques.question_id}
                          />
                        
                        
                      ) : ques.input_type_id === 4 ? (
                        <ESInput
                          maxLength={10}
                          placeHolder={"Fill Your Answer"}
                          id={remakeQuestionId}
                          value={AnswerData.filter(
                            (d) => d.questionId === remakeQuestionId
                          ).map((v, k) => v.other)}
                          onChange={(e) => {
                            _handleInputChange(e, remakeQuestionId, ques.question_id);
                          }}
                        />
                      ) : ques.input_type_id === 6 ? (
                        <ESDatePicker
                          quesId={remakeQuestionId}
                          startDate={
                            AnswerData.filter(
                              (d) => d.questionId === remakeQuestionId
                            ).length && AnswerData.length
                              ? AnswerData.filter(
                                  (d) => d.questionId === remakeQuestionId
                                ).map(
                                  (v, k) =>
                                    new Date(JSON.parse(v.other).YearOfManufacturing)
                                )[0]
                              : null
                          }
                          endDate={
                            AnswerData.filter(
                              (d) => d.questionId === remakeQuestionId
                            ).length && AnswerData.length
                              ? AnswerData.filter(
                                  (d) => d.questionId === remakeQuestionId
                                ).map(
                                  (v, k) =>
                                    new Date(JSON.parse(v.other).YearOfInstallation)
                                )[0]
                              : null
                          }
                          _handleEndChange={_handleEndChange}
                          _handleStartChange={_handleStartChange}
                          keys={ques.question_id}
                        />
                      ) 
                      : null} */}
                </div>
              );
            })}
        </div>
      </div>
    );
  });
  return QuestionCards;
};

export default withMedia(QuestionCard);

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
        className={`pl-2 pt-2 fa ${
          info === "Answered"
            ? "fa-check-circle text-success"
            : "fa-exclamation-circle text-warning"
        }`}
        style={{ fontSize: 18, opacity: 0.9 }}
        title="Answered"
      />
    </div>
  );
};
