import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";

import { withMedia } from "react-media-query-hoc";
import { ESInput } from "./ES_Inputs";
import ESMatrix from "./ES_MatrixTable";
import { ESTextArea } from "./ES_TextArea";
import { ESTableInput } from "./ES_TableInput";

const ESGroupQuestionCard = (props) => {
  const {
    QuestionData,
    _handleRadioChange,
    _handleCheckChange,
    _handleInputChange,
    media,
    AnswerData,
    selectedOption,
  } = props;

  const subQues =
    QuestionData.length > 0 &&
    QuestionData.map(
      (v) => v.sub_questions && v.sub_questions.map((subQues) => subQues)
    );

  const getOption = (quesId) => {
    const selectedQuestion = QuestionData.find(
      (q) => q.question_id.toString() === quesId
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

  console.log("answer data >> ", AnswerData);
  console.log("Selected Data >>", selectedOption);
  return (
    <div>
      {QuestionData &&
        QuestionData.map((ques, k2) => {
          const questionId = ques.question_id.toString();
          const temp = AnswerData.find((d) => d.questionId === questionId);

          return (
            <div
              className="d-flex flex-row flex-fill flex-wrap w-100 p-3 mb-3 rounded bg-light border" ////////Group question card
              key={k2}
              // id={ques.question_id}
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
                      value={ques.option_choices}
                      _handleRadioChange={_handleRadioChange}
                      quesId={questionId}
                      isAnswer={AnswerData}
                      keys={ques.question_id}
                      subQuesId={null}
                    />
                    {/* <ESTextArea
                      placeHolder={"Fill Your Answer"}
                      id={questionId}
                      value={AnswerData.filter(
                        (d) => d.questionId === questionId
                      ).map((v, k) => v.other)}
                      onChange={(e) => {
                        _handleInputChange(e, questionId, null, questionId);
                      }}
                    /> */}
                    {
                      // console.log("bla lba",AnswerData.filter(v => v.optionChoiceId === getOption(v.questionId))),
                      AnswerData.filter(
                        (v) =>
                          v.questionId === questionId &&
                          v.optionChoiceId === getOption(v.questionId)
                      ).length > 0 ? (
                        <ESTextArea
                          placeHolder={"Fill Your Answer"}
                          id={questionId}
                          value={AnswerData.filter(
                            (d) =>
                              d.questionId === questionId &&
                              d.subQuestionId === null
                          ).map((v, k) => v.other)}
                          onChange={(e) => {
                            _handleInputChange(
                              e,
                              questionId,
                              null,
                              ques.question_id,
                              ques.option_choices.filter(
                                (v) => v.option_choice_name === "Yes"
                              )[0].option_choice_id
                            );
                          }}
                        />
                      ) : null
                    }
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
                    <ESTextArea
                      placeHolder={"Fill Your Answer"}
                      id={questionId}
                      value={AnswerData.filter(
                        (d) =>
                          d.questionId === questionId &&
                          d.subQuestionId === null
                      ).map((v, k) => v.other)}
                      onChange={(e) => {
                        _handleInputChange(
                          e,
                          questionId,
                          null,
                          ques.question_id
                        );
                      }}
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
    selectedOption,
  } = props;
  return ques.sub_questions.map((subQues, k3) => (
    <div
      className="d-flex flex-row pb-1 w-100 justify-content-between"
      key={k3}
    >
      <div className="w-25">{subQues.sub_question_name}</div>
      <div className="w-75">
        {subQues.input_type_id === 2 || subQues.input_type_id === 15 ? (
          <div>
            <ESRadio
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
              <ESTextArea
                placeHolder={"Fill Your Answer"}
                id={subQues.sub_question_id}
                value={AnswerData.filter(
                  (d) => d.subQuestionId === subQues.sub_question_id
                ).map((v, k) => v.other)}
                onChange={(e) => {
                  _handleInputChange(
                    e,
                    questionId,
                    subQues.sub_question_id,
                    ques.question_id,
                    subQues.option_choices.filter(
                      (v) => v.option_choice_name === "Yes"
                    )[0].option_choice_id
                  );
                }}
              />
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
          <ESTextArea
            placeHolder={"Fill Your Answer"}
            id={subQues.sub_question_id}
            value={AnswerData.filter(
              (d) => d.subQuestionId === subQues.sub_question_id
            ).map((v, k) => v.other)}
            onChange={(e) => {
              _handleInputChange(
                e,
                questionId,
                subQues.sub_question_id,
                ques.question_id
              );
            }}
          />
        ) 
        // : subQues.input_type_id === 5 ? (
        //   <ESDropDown
        //     quesId={questionId}
        //     subQuesId={subQues.sub_question_id}
        //     options={subQues.option_choices.map((v, k) => ({
        //       value: v.option_choice_id,
        //       label: v.option_choice_name,
        //     }))}
        //     selectedOption={
        //       AnswerData.filter((d) => d.subQuestionId === subQues.sub_question_id)
        //               ? AnswerData.filter(
        //                   (d) => d.subQuestionId === subQues.sub_question_id
        //                 ).map(
        //                   (v, k) =>
        //                     subQues.option_choices.filter(
        //                       (x, y) => x.option_choice_id === v.optionChoiceId
        //                     )[0]
        //                 )
        //         : selectedOption
        //     }
        //     _handleSelect={_handleSelect}
        //     keys={ques.question_id}
        //   />
        // )
         : null}
      </div>
    </div>
  ));
};
