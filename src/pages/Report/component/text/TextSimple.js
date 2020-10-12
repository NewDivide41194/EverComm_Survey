import React from "react";
import ESCheckBox from "../../../../tools/ES_CheckBox";
import { ESRadio } from "../../../../tools/ES_Radio";

import { withMedia } from "react-media-query-hoc";
import { ESInput } from "../../../../tools/ES_Inputs";
import * as Colors from "../../../../config/Color.config";
import TextAnswers from "./TextAnswers";

const TextSimple = (props) => {

  const {
    QuestionData,
    isQuestion,
    media,
    otherOfQuestion,
    AnswerData,
    otherAns,
  } = props;

  return QuestionData
    ? QuestionData.map((ques, k2) => {
        const questionId = ques.question_id.toString();
        return (
          <div
            className="p-3"
            key={k2}
            id={ques.questionId}
            style={{
              fontSize: media.mobile ? "12px" : "15px",
            }}
          >
            <div
              className="d-flex flex-row flex-wrap w-100"
            >
              <div className="d-flex flex-row w-100 justify-content-between">
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
                isAnswer={AnswerData}
                isQuestion={isQuestion}
                keys={ques.question_id}
                disabled={true}
              />
            ) : ques.input_type_id === 2 ? (
              <div className="w-100">
                <ESRadio
                  value={ques.option_choices}
                  quesId={questionId}
                  isAnswer={AnswerData}
                  isQuestion={isQuestion}
                  keys={ques.question_id}
                  isDisable={true}
                />
                {otherAns(
                  questionId,
                  ques.question_id,
                  otherOfQuestion(k2, QuestionData),
                  AnswerData
                ).length > 0 ? (
                  <div className="pt-2">
                    <TextAnswers
                      AnswerData={AnswerData}
                      questionId={questionId}
                    />
                  </div>
                ) : null}
              </div>
            ) : ques.input_type_id === 5 ? (
              ques.option_choices[0].option_choice_id === null ? (
                <TextAnswers AnswerData={AnswerData} questionId={questionId} />
              ) : (
                <div className="w-100">
                  <TextAnswers
                    AnswerData={AnswerData}
                    questionId={questionId}
                    options={AnswerData.filter(
                      (d) => d.questionId === questionId
                    ).map((v) =>
                      ques.option_choices.filter(
                        (vv) => vv.option_choice_id === v.optionChoiceId
                      )
                    )}
                  />
                </div>
              )
            ) : ques.input_type_id === 4 ? (
              <ESInput
                disabled={true}
                maxLength={30}
                placeHolder={"Fill Your Answer"}
                id={questionId}
                value={AnswerData.filter(
                  (d) => d.questionId === questionId
                ).map((v, k) => v.other)}
              />
            ) : ques.input_type_id === 6 ? (
              <TextAnswers
                questionId={questionId}
                AnswerData={AnswerData}
                year
              />
            ) : null}
          </div>
        );
      })
    : null;
};

export default withMedia(TextSimple);

export const QuestionCardInfo = (props) => {
  const { info, media } = props;
  return (
    <div>
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
