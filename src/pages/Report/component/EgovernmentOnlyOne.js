import React from "react";
import ESCheckBox from "../../../tools/ES_CheckBox";
import { ESRadio } from "../../../tools/ES_Radio";
import { ESDropDown } from "../../../tools/ES_DropDown";

import { withMedia } from "react-media-query-hoc";
// import { ESInput } from "./ES_Inputs";
import ESMatrix from "../../../tools/ES_MatrixTable";
import { ESTextArea } from "../../../tools/ES_TextArea";
import { ESTableInput } from "../../../tools/ES_TableInput";

const ESGroupQuestionCard = (props) => {
  const {
    QuestionData,
    _handleRadioChange,
    _handleCheckChange,
    _handleInputChange,
    _handleStartChange,
    _handleSelect,
    _handleEndChange,
    media,
    AnswerData,
  } = props;

  const subQues =
    QuestionData.length > 0 &&
    QuestionData.map(
      (v) => v.sub_questions && v.sub_questions.map((subQues) => subQues)
    );
  console.log("Question2Data", QuestionData);

  const getOption = (quesId) => {
    const selectedQuestion = QuestionData.find(
      (q) => q.question_id.toString() === quesId && q.input_type_id === 24
    );
    if (selectedQuestion && selectedQuestion.option_choices) {
      const noOption = selectedQuestion.option_choices.find(
        (o) => o.option_choice_name === "Yes"
      );
      if (noOption) {
        return noOption.option_choice_id;
      }
    }
    return -1;
  };

  return (
    <div 
    // className="container my-4 text-dark border"
    // style={{
    //   width: "8.27in",
    //   height: "15.66in",
    //   paddingLeft: "0.5in",
    //   paddingTop: "0.3in",
    //   paddingRight: "0.5in",
    //   paddingBottom: "0.3in",
    //   backgroundColor: "",
    //   pageBreakInside: 'auto'
    // }}
    >
      {QuestionData &&
        QuestionData.map((ques, k2) => {
          const questionId = ques.question_id.toString();
          const temp = AnswerData.find((d) => d.questionId === questionId);
          return (
            <div
              className="d-flex flex-row flex-fill flex-wrap w-100 p-3 mb-3 rounded bg-light border" ////////Group question card
              key={k2}
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
                    {ques.key}. {ques.question_name}
                  </div>
                  {AnswerData.map((v, k) => v.keyValue).filter(
                    (v) => v == ques.question_id
                  )[0] == ques.question_id ? (
                    <QuestionCardInfo info={"Answered"} media={media} />
                  ) : (
                    <QuestionCardInfo info={"Pending"} media={media} />
                  )}
                </div>
              </div>
              <div className="w-100">
                {ques.input_type_id === 10 ? (
                  <div className="table-responsive">
                    <ESMatrix
                      isDisable={true}
                      categories={ques.categories}
                      optionChoices={ques.option_choices}
                      subQuestions={ques.sub_questions}
                      id={questionId}
                      quesId={questionId}
                      subQuesId={subQues.map((v) =>
                        v === undefined ? null : v.sub_question_id
                      )}
                      isAnswer={AnswerData}
                      keys={ques.question_id}
                      value={AnswerData.filter(
                        (d) => d.questionId === questionId
                      ).map((v, k) => v.other)}
                      onChange={(e) => {
                        _handleInputChange(e, questionId, null, questionId);
                      }}
                      _handleRadioChange={_handleRadioChange}
                      _handleCheckChange={_handleCheckChange}
                    />
                  </div>
                ) : ques.input_type_id === 13 ? (
                  <ESTableInput
                    reportText
                    data={ques}
                    placeHolder={"Please Specify"}
                    AnswerData={AnswerData}
                    _handleInputChange={_handleInputChange}
                    quesId={questionId}
                    subQuesId={ques.sub_questions}
                    quesName={ques.question_name}
                    inputTypeId={ques.input_type_id}
                    keyValue={ques.question_id}
                  />
                ) : ques.input_type_id === 24 ? (
                  <div>
                    <ESRadio
                      isDisable
                      value={ques.option_choices}
                      _handleRadioChange={_handleRadioChange}
                      quesId={questionId}
                      isAnswer={AnswerData}
                      keys={ques.question_id}
                      subQuesId={null}
                    />
                    {AnswerData.filter(
                      (v) => v.optionChoiceId === getOption(v.questionId)
                    ).length > 0 ? (
                      <div>
                        {AnswerData.filter(
                          (d) =>
                            d.questionId === questionId &&
                            d.subQuestionId === null
                        ).map((v, k) => v.other)}
                      </div>
                    ) : null}
                    {ques.sub_questions && (
                      <SubQuestionInput
                        {...props}
                        ques={ques}
                        questionId={questionId}
                      />
                    )}
                  </div>
                ) : ques.input_type_id === 1 ? (
                  <ESCheckBox
                    quesId={ques.question_id}
                    value={ques.option_choices}
                    _handleChange={_handleCheckChange}
                    isAnswer={AnswerData}
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
                ) : ques.input_type_id === 4 ? (
                  <div>
                    <TextAnswers
                      AnswerData={AnswerData}
                      questionId={questionId}
                    />
                    {ques.sub_questions && (
                      <SubQuestionInput
                        {...props}
                        ques={ques}
                        questionId={questionId}
                      />
                    )}
                  </div>
                ) : ques.input_type_id === 2 ? (
                  <div>
                    <ESRadio
                      isDisable
                      value={ques.option_choices}
                      _handleRadioChange={_handleRadioChange}
                      quesId={questionId}
                      isAnswer={AnswerData}
                      keys={ques.question_id}
                      subQuesId={null}
                    />
                    {ques.sub_questions && (
                      <SubQuestionInput
                        {...props}
                        ques={ques}
                        questionId={questionId}
                      />
                    )}
                  </div>
                ) : ques.sub_questions ? (
                  <SubQuestionInput
                    {...props}
                    ques={ques}
                    questionId={questionId}
                  />
                ) : null}
              </div>
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

const SubQuestionInput = (props) => {
  const {
    ques,
    media,
    _handleCheckChange,
    _handleRadioChange,
    questionId,
    AnswerData,
    _handleInputChange,
    _handleSelect,
  } = props;
  return ques.sub_questions.map((subQues, k3) => (
    <div
      className="d-flex flex-row pb-1 w-100 justify-content-between"
      key={k3}
    >
      <div className="w-25">{subQues.sub_question_name}</div>
      <div className="w-75 text-primary">
        {subQues.input_type_id === 2 || subQues.input_type_id === 15 ? (
          <div>
            <ESRadio
              isDisable
              value={subQues.option_choices}
              _handleRadioChange={_handleRadioChange}
              quesId={questionId}
              id={subQues.sub_question_id}
              subQuesId={subQues.sub_question_id}
              isAnswer={AnswerData}
              keys={ques.question_id}
            />
            {subQues.input_type_id === 15 &&
            AnswerData.filter(
              (v) =>
                (v.other === undefined ||
                  (v.other !== null ? v.other.length > 0 : "")) &&
                v.subQuestionId === subQues.sub_question_id
            ).length > 0 ? (
              <div>
                {AnswerData.filter(
                  (d) => d.subQuestionId === subQues.sub_question_id
                ).map((v, k) => v.other)}
              </div>
            ) : null}
          </div>
        ) : subQues.input_type_id === 1 ? (
          <ESCheckBox
            quesId={questionId}
            value={subQues.option_choices}
            _handleChange={_handleCheckChange}
            isAnswer={AnswerData}
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
        ) : subQues.input_type_id === 4 ? (
          <TextAnswers AnswerData={AnswerData} subQues={subQues} />
        ) : subQues.input_type_id === 5 ? (
          <ESDropDown
            quesId={questionId}
            id={-1}
            subQuesId={subQues.sub_question_id}
            options={subQues.option_choices.map((v, k) => ({
              value: v.option_choice_id,
              label: v.option_choice_name,
            }))}
            _handleSelect={_handleSelect}
            keys={ques.question_id}
          />
        ) : null}
      </div>
    </div>
  ));
};

const TextAnswers = (props) => {
  const { AnswerData, subQues, questionId } = props;
  return (
    <span className="text-primary"
     style={{
      width: "100%",
      wordWrap: "break-word",
      display: "inline-block",
    }}
    >
      {questionId
        ? AnswerData.filter(
            (d) => d.questionId === questionId && d.subQuestionId === null
          ).map((v, k) => v.other)
        : AnswerData.filter(
            (d) => d.subQuestionId === subQues.sub_question_id
          ).map((v, k) => v.other)}
    </span>
  );
};
