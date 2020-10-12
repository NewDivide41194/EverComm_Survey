import React from "react";
import ESCheckBox from "../../../../tools/ES_CheckBox";
import { ESRadio } from "../../../../tools/ES_Radio";
import * as Colors from "../../../../config/Color.config";
import { withMedia } from "react-media-query-hoc";
import TextAnswers from "./TextAnswers";
const TextCompound = (props) => {
  const {
    QuestionData,
    isQuestion,
    pageno,
    media,
    AnswerData,
    amountOfDevice,
    otherAns,
    otherOfQuestion,
  } = props;

  const buildingId = localStorage.getItem("buildingId");
  const deviceIndexValue = amountOfDevice && Object.values(amountOfDevice[0]);
  const addedQuestionId = 1000;

  const pageDeviceIndex =
    pageno === 0 ? 1 : 5 ? deviceIndexValue[0] : deviceIndexValue[pageno - 1];

  const MultiplyQuestions = new Array(pageDeviceIndex)
    .fill(null)
    .map((v, k3) => {
      return (
        <div className="p-3" key={k3}>
          <div
            className="font-weight-bold"
            style={{ color: Colors.PrimaryColor }}
          >
            {`Device No.` + (k3 + 1)}
          </div>
          <div
            className="d-flex my-2"
            style={{
              fontSize: media.mobile ? "12px" : "15px",
            }}
          >
            <div className="flex-fill pr-2 ">
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
                    >
                      <div className="d-flex flex-row flex-wrap w-100">
                        <div className="d-flex flex-row w-100 justify-content-between">
                          <div className="w-25 align-self-enter">
                            {ques.question_name}
                          </div>
                          <div className="w-75">
                            {ques.input_type_id === 1 ? (
                              <div>
                                <ESCheckBox
                                  quesId={remakeQuestionId}
                                  value={ques.option_choices}
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
                                  disabled={true}
                                />
                              </div>
                            ) : ques.input_type_id === 2 ? (
                              <div>
                                <ESRadio
                                  value={ques.option_choices}
                                  quesId={remakeQuestionId}
                                  isAnswer={AnswerData}
                                  subQuesId={undefined}
                                  isQuestion={isQuestion}
                                  keys={ques.question_id}
                                  isDisable={true}
                                />
                                {otherAns(
                                  remakeQuestionId,
                                  ques.question_id,
                                  otherOfQuestion(k2, QuestionData),
                                  AnswerData
                                ).length > 0 ? (
                                  <TextAnswers
                                    AnswerData={AnswerData}
                                    questionId={remakeQuestionId}
                                  />
                                ) : null}
                              </div>
                            ) : ques.input_type_id === 5 ? (
                              ques.option_choices.length === 1 ? (
                                <TextAnswers
                                  AnswerData={AnswerData}
                                  questionId={remakeQuestionId}
                                />
                              ) : (
                                <div>
                                  <TextAnswers
                                    AnswerData={AnswerData}
                                    options={AnswerData.filter(
                                      (d) => d.questionId === remakeQuestionId
                                    ).map((v) =>
                                      ques.option_choices.filter(
                                        (vv) =>
                                          vv.option_choice_id ===
                                          v.optionChoiceId
                                      )
                                    )}
                                    questionId={remakeQuestionId}
                                  />
                                </div>
                              )
                            ) : ques.input_type_id === 4 ? (
                              <TextAnswers
                                questionId={remakeQuestionId}
                                AnswerData={AnswerData}
                              />
                            ) : ques.input_type_id === 6 ? (
                              <TextAnswers
                                questionId={remakeQuestionId}
                                AnswerData={AnswerData}
                                year
                              />
                            ) : null}
                          </div>
                          <div>
                            {AnswerData.map((v, k) => v.questionId).filter(
                              (v) => v === remakeQuestionId
                            )[0] === remakeQuestionId ? (
                              <QuestionCardInfo
                                info={"Answered"}
                                media={media}
                              />
                            ) : (
                              <QuestionCardInfo
                                info={"Pending"}
                                media={media}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      );
    });
  return MultiplyQuestions;
};

export default withMedia(TextCompound);

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
