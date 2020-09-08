import React from "react";
import withRouter from "react-media-query-hoc";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";
import withMedia from "react-media-query-hoc/dist/with-media";

const InputTypes = (props) => {
  const {
    ques,
    AnswerData,
    isQuestion,
    deviceOption,
    remakeQuestionId,
    _handleCheckChange,
    _handleInputChange,
    _handleRadioChange,
    _handleSelect,
    _handleStartChange,
    otherAns,
    otherOfQuestion,
    selectedOption,
    QuestionData,
    media,
  } = props;

  const optionChoices = QuestionData.map((v) => v.option_choices);
console.log("///////////",props);
  return (
    QuestionData &&
    QuestionData.map((ques, k2) =>
      ques.input_type_id === 2 ? (
        <div>
          <ESCheckBox
            quesId={ques.question_id}
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
        </div>
      ) : null
    )
  );
};

export default withMedia(InputTypes);
{
  /* ) : ques.input_type_id === 2 ? (
            <div>
              <ESRadio
                value={ques.option_choices}
                _handleRadioChange={_handleRadioChange}
                quesId={remakeQuestionId}
                isAnswer={AnswerData}
                isQuestion={isQuestion}
                keys={ques.question_id}
              />
              {otherAns(remakeQuestionId, ques.question_id, otherOfQuestion(k2))
                .length > 0 ? (
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
                  AnswerData.filter((d) => d.questionId === remakeQuestionId)
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
                    AnswerData.filter((d) => d.questionId === remakeQuestionId)
                      ? AnswerData.filter(
                          (d) => d.questionId === remakeQuestionId
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
                              (d) => d.questionId === remakeQuestionId
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
                _handleInputChange(e, remakeQuestionId, ques.question_id);
              }}
            />
          ) : ques.input_type_id === 6 ? (
            <ESDatePicker
              quesId={remakeQuestionId}
              placeHolder={ques.question_name}
              startDate={
                AnswerData.filter((d) => d.questionId === remakeQuestionId)
                  .length && AnswerData.length
                  ? AnswerData.filter(
                      (d) => d.questionId === remakeQuestionId
                    ).map((v, k) => new Date(v.other))[0]
                  : null
              }
              _handleStartChange={_handleStartChange}
              keys={ques.question_id}
              type={ques.question_name}
            />
          ) : null}  */
}
