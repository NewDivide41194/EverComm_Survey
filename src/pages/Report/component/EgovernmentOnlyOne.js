import React from "react";
import ESCheckBox from "../../../tools/ES_CheckBox";
import { ESRadio } from "../../../tools/ES_Radio";
import { ESDropDown } from "../../../tools/ES_DropDown";
import EGA from "../../../assets/images/eGovernment/EGA.jpg";
import UNDP from "../../../assets/images/eGovernment/UNDP.jpeg";
import { withMedia } from "react-media-query-hoc";
import ESMatrix from "../../../tools/ES_MatrixTable";
import { ESTextArea } from "../../../tools/ES_TextArea";
import { ESTableInput } from "../../../tools/ES_TableInput";
import * as Colors from "../../../config/Color.config";
import "../../../App.css";

const ESGroupQuestionCard = (props) => {
  const {
    QuestionData,
    _handleRadioChange,
    _handleCheckChange,
    media,
    AnswerData,
    sectionName,
    surveyTitle,
    id,
  } = props;
  const subQues =
    QuestionData.length > 0 &&
    QuestionData.map(
      (v) => v.sub_questions && v.sub_questions.map((subQues) => subQues)
    );
  const countryName = localStorage.getItem("countryName");

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
  console.log(surveyTitle);

  // const PageBreaker = () => {
  // return( id!==null&& document.getElementById(id).clientHeight > "8in" ? <div className="page-break"/> : null);
  // };
  console.log((id));
  return (
    <div
      className="container"
      id={id}
      style={{
        width: "8.27in",
      }}
    >
      <Header
        sectionName={sectionName}
        surveyTitle={surveyTitle}
        countryName={countryName}
      />
      {/* <PageBreaker/> */}
      {QuestionData &&
        QuestionData.map((ques, k2) => {
          const questionId = ques.question_id.toString();
          const temp = AnswerData.find((d) => d.questionId === questionId);
          return (
            <div
              className="p-3"
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
                <div className="d-flex flex-row pb-1 w-100 justify-content-between">
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
                  />
                ) : ques.input_type_id === 13 ? (
                  <ESTableInput
                    reportText
                    data={ques}
                    AnswerData={AnswerData}
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
    selectedOption,
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
          <div>
            {AnswerData.filter(
              (d) => d.subQuestionId === subQues.sub_question_id
            )
              ? AnswerData.filter(
                  (d) => d.subQuestionId === subQues.sub_question_id
                ).map(
                  (v, k) =>
                    subQues.option_choices.filter(
                      (x, y) => x.option_choice_id === v.optionChoiceId
                    )[0]
                )[0].option_choice_name
              : "Not Answered"}
          </div>
        ) : null}
      </div>
    </div>
  ));
};

const TextAnswers = (props) => {
  const { AnswerData, subQues, questionId } = props;
  return (
    <span
      className="text-primary"
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

const Header = (props) => {
  const { sectionName, surveyTitle, countryName } = props;
  return (
    <div className="d-flex px-3 flex-row justify-content-between align-items-baseline font-italic">
      <div
        style={{
          color: Colors.SparkGreen,
          fontSize: 18,
          alignSelf: "flex-end",
        }}
      >
        <div className="font-weight-bold">
          {surveyTitle} in {countryName}
        </div>

        <span>{sectionName}</span>
      </div>
      <div>
        <img src={EGA} style={{ width: 100, height: 40 }} alt="EGA logo" />
        <img src={UNDP} style={{ width: 70 }} alt="EGA logo" />
      </div>
    </div>
  );
};
