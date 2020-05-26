import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";
import { withMedia } from "react-media-query-hoc";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";

const QuestionCard = (props) => {
  const {
    survey_sections,
    pageno,
    _handleRadioChange,
    _handleCheckChange,
    _handleInputChange,
    _handleStartChange,
    _handleSelect,
    _handleEndChange,
    media,
    selectedOption,
    isAnswer,
    AnswerData,
    startDate,
    endDate,
  } = props;

console.log("AnswerData----->",AnswerData.filter((d) => d.questionId === 41).map(
  (v, k) => v.other))

  return survey_sections[pageno].questions.map((ques, k2) => (
    
    <div
      className="d-flex flex-row flex-fill flex-wrap w-100 p-3 py-3 mb-3 rounded"
      key={k2}
      id={ques.questionId}
      style={{
        fontSize: media.mobile ? "12px" : "15px",
        background: "#f0f0f0",
      }}
    >
      <div
        className="d-flex flex-row flex-wrap w-100"
        key={k2}
        style={{ fontSize: media.mobile ? "15px" : "18px" }}
      >
        <div className="d-flex flex-row pb-3 w-100  justify-content-between">
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
          isAnswer={isAnswer}
        />
      ) : ques.input_type_id === 2 ? (
        <ESRadio
          value={ques.option_choices}
          _handleRadioChange={_handleRadioChange}
          quesId={ques.question_id}
          isAnswer={isAnswer}
        />
      ) : ques.input_type_id === 5 ? (
        <ESDropDown
          quesId={ques.question_id}
          options={ques.option_choices.map((v, k) => ({
            value: v.option_choice_id,
            label: v.option_choice_name,
          }))}
          _handleSelect={_handleSelect}
          selectedOption={
            AnswerData.filter((d) => d.questionId === ques.question_id)
              ? AnswerData.filter((d) => d.questionId === ques.question_id).map(
                  (v, k) =>
                    ques.option_choices.filter(
                      (x, y) => x.option_choice_id === v.optionChoiceId
                    )[0]
                )
              : selectedOption
          }
          isAnswer={isAnswer}
        />
      ) : ques.input_type_id === 4 ? (
        <ESInput
          placeHolder={"Fill Your Answer"}
          id={ques.question_id}
          value={
              AnswerData.filter((d) => d.questionId === ques.question_id).map(
                  (v, k) => v.other
                )
          }
          onChange={(e) => {
            _handleInputChange(e, ques.question_id);
          }}
        />
      ) : ques.input_type_id === 6 ? (
        <ESDatePicker
          quesId={ques.question_id}
          startDate={
            AnswerData.filter((d) => d.questionId === ques.question_id)
              .length && AnswerData.length
              ? AnswerData.filter((d) => d.questionId === ques.question_id).map(
                  (v, k) => new Date(JSON.parse(v.other).YearOfManufacturing)
                )[0]
              : startDate
          }
          endDate={
            AnswerData.filter((d) => d.questionId === ques.question_id)
              .length && AnswerData.length
              ? AnswerData.filter((d) => d.questionId === ques.question_id).map(
                  (v, k) => new Date(JSON.parse(v.other).YearOfInstallation)
                )[0]
              : endDate
          }
          _handleEndChange={_handleEndChange}
          _handleStartChange={_handleStartChange}
        />
      ) : null}
    </div>
  ));
};

export default withMedia(QuestionCard);

const QuestionCardInfo = (props) => {
  const { info, media } = props;
  return (
    <div>
      {media.mobile || (
        <span style={{ fontSize: 10 }} className="text-secondary pr-1">
          {info}
        </span>
      )}
      <i
        className={`fa ${
          info === "Answered"
            ? "fa-check text-success"
            : "fa-exclamation text-warning"
        }`}
        title="Answered"
      />
    </div>
  );
};
