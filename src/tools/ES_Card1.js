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
    isQuestion,
    pageno,
    media,
    selectedOption,
    AnswerData,
    amountOfDevice,
  } = props;
  const buildingId = localStorage.getItem("buildingId");
  const deviceIndexValue = amountOfDevice && Object.values(amountOfDevice[0]);
  const addedQuestionId = 1000;

  const deviceOption = new Array(99)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));

  const pageDeviceIndex = pageno === 0 ? 1 : deviceIndexValue[pageno - 1];

  const QuestionCards = new Array(pageDeviceIndex).fill(null).map((v, k3) => {
    return (
      <div key={k3}>
        {QuestionData &&
          QuestionData.map((ques, k2) => {
            const remakeQuestionId =
              pageDeviceIndex > 1
                ? Object.keys(amountOfDevice[0])[pageno - 1] +
                  addedQuestionId +
                  buildingId +
                  k3 +
                  ques.question_id
                : ques.question_id.toString();
            return (
              <div
                className="d-flex flex-row flex-fill flex-wrap w-100 p-3 py-3 mb-3 rounded bg-light border"
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
                    <div>
                      {k2 + 1}. {ques.question_name}
                      <i className="text-info pl-2">
                        {k3 === 0 ? null : `Device No.` + (k3 + 1)}
                      </i>
                    </div>

                    {AnswerData.map((v, k) => v.questionId).filter(
                      (v) => v === remakeQuestionId
                    )[0] === remakeQuestionId ? (
                      <QuestionCardInfo info={"Answered"} media={media} />
                    ) : (
                      <QuestionCardInfo info={"Pending"} media={media} />
                    )}
                  </div>
                </div>
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
                ) : null}
              </div>
            );
          })}
      </div>
    );
  });
  return QuestionCards;
};

export default withMedia(QuestionCard1);

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
