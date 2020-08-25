import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";
import { ESButton } from "./ES_Button";

import { withMedia } from "react-media-query-hoc";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";
import moment from "moment";

import QuestionCard1 from "./ES_Card";
import ESTimeRange from "./ES_TimeRange";

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
    otherAns,
    otherOfQuestion,
    weekAns,
    weekQuestion,
  } = props;

  if (sessionId === 1) return <QuestionCard1 {...props} />;

  const buildingId = localStorage.getItem("buildingId");
  const deviceIndexValue = amountOfDevice && Object.values(amountOfDevice[0]);
  const addedQuestionId = 1000;

  const deviceOption = new Array(99)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));

  const pageDeviceIndex =
    pageno === 0 ? 1 : 5 ? deviceIndexValue[0] : deviceIndexValue[pageno - 1];
  const QuestionCards = new Array(pageDeviceIndex).fill(null).map((v, k3) => {
    return (
      <div
        key={k3}
        className="d-flex my-3 p-2 pt-2 rounded bg-light border"
        style={{
          fontSize: media.mobile ? "12px" : "15px",
        }}
      >
        <div className="font-weight-bold pt-2 pl-2  py-1">{k3 + 1}.</div>
        <div className="flex-fill pr-2 ">
          <div className="py-2 font-weight-bold">{`Device No.` + (k3 + 1)}</div>
          {QuestionData &&
            QuestionData.map((ques, k2) => {
              const remakeQuestionId =
                pageDeviceIndex > 1
                  ? Object.keys(amountOfDevice[0])[
                      pageno === 5 ? 0 : pageno - 1
                    ] +
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
                  style={{
                    fontSize: media.mobile ? "12px" : "15px",
                  }}
                >
                  <div className="d-flex flex-row flex-wrap w-100" key={k2}>
                    <div className="d-flex flex-row pb-2 w-100 justify-content-between">
                      <div className="w-25 align-self-center">
                        {ques.question_name}
                      </div>
                      <div className="w-75">
                        {ques.input_type_id === 1 ? (
                          <div>
                            <ESCheckBox
                              quesId={remakeQuestionId}
                              value={ques.option_choices}
                              _handleChange={_handleCheckChange}
                              isAnswer={AnswerData}
                              isQuestion={isQuestion}
                              keys={ques.question_id}
                              className={
                                ques.option_group_id === 10
                                  ? `${
                                      media.mobile ? null : "mr-4"
                                    } text-center  font-weight-bold`
                                  : null
                              }
                              vertical={
                                ques.option_group_id === 10 ? true : false
                              }
                            />
                            {/* 
                            {weekAns(
                                remakeQuestionId,
                                ques.question_id,
                                weekQuestion(k2)
                              ).length > 0 ?  (<div className="row">
                               { new Array(2).fill(null).map(v=><div className="col-4"> <ESTimeRange start={"00:00"} end={"00:00"}/></div>)}
                            </div>) : null} */}
                          </div>
                        // ) : ques.input_type_id === 8 ? (
                        //   <div className="row border-bottom pb-2">
                        //     {new Array(
                        //       AnswerData.map((v) =>
                        //         v.optionChoiceId === 161
                        //           ? 1
                        //           : v.optionChoiceId === 162
                        //           ? 2
                        //           : 3
                                  
                        //       )[0]
                        //     )
                        //       .fill(null)
                        //       .map((v) => (
                        //         <div className="col-lg-4 col-md-6">
                        //           <ESTimeRange id={remakeQuestionId} start={"00:00"} end={"00:00"} />
                        //         </div>
                        //       ))}
                        //   </div>
                        ) 
                        : ques.input_type_id === 2 ? (
                          <div>
                            <ESRadio
                              value={ques.option_choices}
                              _handleRadioChange={_handleRadioChange}
                              quesId={remakeQuestionId}
                              isAnswer={AnswerData}
                              isQuestion={isQuestion}
                              keys={ques.question_id}
                            />
                            {otherAns(
                              remakeQuestionId,
                              ques.question_id,
                              otherOfQuestion(k2)
                            ).length > 0 ? (
                              <ESInput
                                maxLength={30}
                                placeHolder={"Please Specify"}
                                id={remakeQuestionId}
                                value={AnswerData.filter(
                                  (d) => d.questionId === remakeQuestionId
                                ).map((v, k) => v.other)}
                                onChange={(e) => {
                                  _handleInputChange(
                                    e,
                                    remakeQuestionId,
                                    ques.question_id,
                                    otherOfQuestion(k2)
                                  );
                                }}
                              />
                            ) : null}
                          </div>
                        ) : ques.input_type_id === 5 ? (
                          ques.option_choices.length === 1 ? (
                            <ESDropDown
                              quesId={remakeQuestionId}
                              options={deviceOption}
                              _handleSelect={_handleSelect}
                              selectedOption={
                                AnswerData.filter(
                                  (d) => d.questionId === remakeQuestionId
                                )
                                  ? AnswerData.filter(
                                      (d) => d.questionId === remakeQuestionId
                                    ).map((v, k) => v.other)
                                  : selectedOption
                              }
                              keys={ques.question_id}
                            />
                          ) : (
                            <div>
                              <ESDropDown
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
                              {otherAns(
                                remakeQuestionId,
                                ques.question_id,
                                otherOfQuestion(k2)
                              ).length > 0 ? (
                                <div className="pt-2">
                                  <ESInput
                                    maxLength={30}
                                    placeHolder={"Please Specify"}
                                    id={remakeQuestionId}
                                    value={
                                      AnswerData.filter(
                                        (d) => d.questionId === remakeQuestionId
                                      ).length && AnswerData.length
                                        ? AnswerData.filter(
                                            (d) =>
                                              d.questionId === remakeQuestionId
                                          ).map((v, k) => v.other)[0]
                                        : null
                                    }
                                    onChange={(e) => {
                                      _handleInputChange(
                                        e,
                                        remakeQuestionId,
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
                      <div>
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
    <div className="self-align-center">
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
