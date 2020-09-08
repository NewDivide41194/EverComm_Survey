import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";

import { withMedia } from "react-media-query-hoc";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";
import Questioncard1 from "./ES_Card";
import ES_InputTypes from "./ES_InputTypes";

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
  // // const addedQuestionId = 1000;
  // const isAnswered =
  //   AnswerData.map((v, k) => v.questionId).filter(
  //     (v) => v === ques.question_id
  //   )[0] === ques.question_id;

  const ageOfBuildingOption = new Array(99)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));

  const pageDeviceIndex = 1;

  const subQuesInput = (ques) =>
    ques.sub_questions
      ? ques.sub_questions.map((v) => v.input_type_id)
      : ques.input_type_id;

  return (
    <div>
      {QuestionData &&
        QuestionData.map((ques, k2) => {
          return (
            <div
              className="d-flex flex-row flex-fill flex-wrap w-100 p-3 mb-3 rounded bg-light border" ////////Group question card
              key={k2}
              id={ques.question_id}
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
              {ques.sub_questions ?
                ques.sub_questions.map((subQues) => (
                  <div className="d-flex flex-row pb-2 w-100 justify-content-between">
                    <div className="w-25 align-self-center">
                      {subQues.sub_question_name}
                    </div>
                    <div className="w-75">
                      {subQues.input_type_id === 2 ? (
                        <ESRadio
                          value={subQues.option_choices}
                          _handleRadioChange={_handleRadioChange}
                          quesId={subQues.sub_question_id}
                          isAnswer={AnswerData}
                          isQuestion={isQuestion}
                          keys={subQues.sub_question_id}
                        />
                      ) : subQues.input_type_id === 1 ? (
                        <ESCheckBox
                          quesId={subQues.sub_question_id}
                          value={subQues.option_choices}
                          _handleChange={_handleCheckChange}
                          isAnswer={AnswerData}
                          isQuestion={isQuestion}
                          keys={subQues.sub_question_id}
                          className={
                            ques.option_group_id === 10
                              ? `${
                                  media.mobile ? null : "mr-4"
                                } text-center  font-weight-bold`
                              : null
                          }
                          vertical={ques.option_group_id === 10 ? true : false}
                        />
                      ) : subQues.input_type_id === 4 ? (
                        <ESInput
                          maxLength={30}
                          placeHolder={"Fill Your Answer"}
                          id={subQues.sub_question_id}
                          value={AnswerData.filter(
                            (d) => d.questionId === subQues.sub_question_id
                          ).map((v, k) => v.other)}
                          onChange={(e) => {
                            _handleInputChange(
                              e,
                              subQues.sub_question_id,
                              subQues.sub_question_id
                            );
                          }}
                        />
                      ) : null}
                    </div>
                  </div>
                )):
                <div className="w-100">
                {subQuesInput(ques) === 2 ? (
                  <div>
                    <ESRadio
                      value={ques.option_choices}
                      _handleRadioChange={_handleRadioChange}
                      quesId={ques.question_Id}
                      isAnswer={AnswerData}
                      isQuestion={isQuestion}
                      keys={ques.question_id}
                    />
                  </div>
                ) : subQuesInput(ques) === 1 ? (
                  <ESCheckBox
                    quesId={ques.questionId}
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
                    vertical={ques.option_group_id === 10 ? true : false}
                  />
                ) : subQuesInput(ques) === 4 ? (
                  <div>
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
                  </div>
                ): null}
              </div>}</div> 
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
