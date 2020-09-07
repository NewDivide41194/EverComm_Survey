import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";

import { withMedia } from "react-media-query-hoc";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";

const ESGroupQuestionCard = (props) => {
  const {
    QuestionData,
    _handleRadioChange,
    _handleCheckChange,
    _handleInputChange,
    _handleStartChange,
    _handleSelect,
    _handleEndChange,
    isQuestion,
    pageno,
    media,
    selectedOption,
    AnswerData,
    amountOfDevice,
    otherQuestion,
    otherAns,
    otherOfQuestion,
  } = props;
  console.log("Hello I'm Group Question");
  // const buildingId = localStorage.getItem("buildingId");
  // const deviceIndexValue = amountOfDevice && Object.values(amountOfDevice[0]);
  // const addedQuestionId = 1000;
  // const ques.question_id=1555
  const ageOfBuildingOption = new Array(99)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));

  const pageDeviceIndex = 1;

  return (
    <div>
      {QuestionData &&
        QuestionData.map((ques, k2) => {
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
                <div className="d-flex flex-row pb-3 w-100 justify-content-between">
                  <div>
                    {k2 + 1}. {ques.question_name}
                  </div>
                  {AnswerData.map((v, k) => v.questionId).filter(
                    (v) => v === ques.question_id
                  )[0] === ques.question_id ? (
                    <QuestionCardInfo info={"Answered"} media={media} />
                  ) : (
                    <QuestionCardInfo info={"Pending"} media={media} />
                  )}
                </div>
              </div>
              {ques.input_type_id === 1 ? (
                <ESCheckBox
                  quesId={ques.question_id}
                  value={ques.option_choices}
                  _handleChange={_handleCheckChange}
                  isAnswer={AnswerData}
                  isQuestion={isQuestion}
                  keys={ques.question_id}
                  // className={ques.option_group_id===10?"w-25":null}
                />
              ) : ques.input_type_id === 2 ? (
                <div className="w-100">
                  <ESRadio
                    value={ques.option_choices}
                    _handleRadioChange={_handleRadioChange}
                    quesId={ques.question_id}
                    isAnswer={AnswerData}
                    isQuestion={isQuestion}
                    keys={ques.question_id}
                  />
                  {otherAns(
                    ques.question_id,
                    ques.question_id,
                    otherOfQuestion(k2)
                  ).length > 0 ? (
                    <div className="pt-2">
                      <ESInput
                        maxLength={30}
                        placeHolder={"Fill Your Answer"}
                        id={ques.question_id}
                        value={AnswerData.filter(
                          (d) => d.questionId === ques.question_id
                        ).map((v, k) => v.other)}
                        onChange={(e) => {
                          _handleInputChange(
                            e,
                            ques.question_id,
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
                    quesId={ques.question_id}
                    options={ageOfBuildingOption}
                    _handleSelect={_handleSelect}
                    selectedOption={
                      AnswerData.filter(
                        (d) => d.questionId === ques.question_id
                      )
                        ? AnswerData.filter(
                            (d) => d.questionId === ques.question_id
                          ).map((v, k) => v.other)
                        : selectedOption
                    }
                    keys={ques.question_id}
                  />
                ) : (
                  <div className="w-100">
                    <ESDropDown
                      quesId={ques.question_id}
                      options={ques.option_choices.map((v, k) => ({
                        value: v.option_choice_id,
                        label: v.option_choice_name,
                      }))}
                      _handleSelect={_handleSelect}
                      selectedOption={
                        AnswerData.filter(
                          (d) => d.questionId === ques.question_id
                        )
                          ? AnswerData.filter(
                              (d) => d.questionId === ques.question_id
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
                    {otherAns(
                      ques.question_id,
                      ques.question_id,
                      otherOfQuestion(k2)
                    ).length > 0 ? (
                      <div className="pt-2">
                        <ESInput
                          maxLength={30}
                          placeHolder={"Fill Your Answer"}
                          id={ques.question_id}
                          value={
                            AnswerData.filter(
                              (d) => d.questionId === ques.question_id
                            ).length && AnswerData.length
                              ? AnswerData.filter(
                                  (d) => d.questionId === ques.question_id
                                ).map((v, k) => v.other)[0]
                              : null
                          }
                          onChange={(e) => {
                            _handleInputChange(
                              e,
                              ques.question_id,
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
                  id={ques.question_id}
                  value={AnswerData.filter(
                    (d) => d.questionId === ques.question_id
                  ).map((v, k) => v.other)}
                  onChange={(e) => {
                    _handleInputChange(e, ques.question_id, ques.question_id);
                  }}
                />
              ) : ques.input_type_id === 6 ? (
                <ESDatePicker
                  quesId={ques.question_id}
                  startDate={
                    AnswerData.filter((d) => d.questionId === ques.question_id)
                      .length && AnswerData.length
                      ? AnswerData.filter(
                          (d) => d.questionId === ques.question_id
                        ).map(
                          (v, k) =>
                            new Date(JSON.parse(v.other).YearOfManufacturing)
                        )[0]
                      : null
                  }
                  _handleEndChange={_handleEndChange}
                  _handleStartChange={_handleStartChange}
                  keys={ques.question_id}
                />
              ) : null}
            </div>
          );
        })}
    </div>
  );
};

export default withMedia(ESGroupQuestionCard);

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
        title={info}
      />
    </div>
  );
};
