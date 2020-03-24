import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";
import { withMedia } from "react-media-query-hoc";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";
import moment from "moment";

const QuestionCard = props => {
  const {
    survey_sections,
    pageno,
    handleRadioChange,
    handleCheckChange,
    handleInputChange,
    handleStartChange,
    handleSelect,
    handleEndChange,
    media,
    testValue,
    isAnswer,
    AnswerData,
    startDate,
    endDate
  } = props;
  const isAnswerText = AnswerData.filter(d => d.questionId === 8);

  console.log(
    "isAnswer----->",
    isAnswerText.length &&
      JSON.parse(isAnswerText[0].other).YearOfManufacturing
  );
  console.log(AnswerData);
 

  var ddd = AnswerData.filter(d => d.questionId === 8) &&
  AnswerData.length
    ? AnswerData.filter(
        d => d.questionId === 8
      ).map((v, k) => 
         JSON.parse(v.other.YearOfManufacturing)
      ) : "hello ...";

    console.log("ddd is=>",ddd);
    

  return (
    <div>
      {// cat && cat.length && cat.questions && cat.questions.length &&
      survey_sections[pageno].questions.map((ques, k2) => (
        <div
          className="d-flex  flex-row flex-fill flex-wrap w-100 p-3 py-3 mb-3 rounded"
          key={k2}
          style={{
            fontSize: media.mobile ? "12px" : "15px",
            background: "#f0f0f0"
          }}
        >
          <div
            className="d-flex flex-row flex-wrap w-100"
            key={k2}
            style={{ fontSize: media.mobile ? "15px" : "18px" }}
          >
            <span className="pb-4">
              {k2 + 1}. {ques.question_name}
            </span>
          </div>
          {ques.input_type_id === 1 ? (
            <ESCheckBox
              quesId={ques.question_id}
              value={ques.option_choices}
              handleChange={handleCheckChange}
              isAnswer={isAnswer}
            />
          ) : ques.input_type_id === 2 ? (
            <ESRadio
              value={ques.option_choices}
              handleRadioChange={handleRadioChange}
              quesId={ques.question_id}
              isAnswer={isAnswer}
            />
          ) : ques.input_type_id === 5 ? (
            <ESDropDown
              quesId={ques.question_id}
              value={ques.option_choices}
              handleSelect={handleSelect}
              isAnswer={isAnswer}
            />
          ) : ques.input_type_id === 4 ? (
            <ESInput
              id={ques.question_id}
              value={
                // testValue[ques.question_id]
                //   ? testValue[ques.question_id]
                AnswerData.filter(d => d.questionId === ques.question_id)
                  ? AnswerData.filter(
                      d => d.questionId === ques.question_id
                    ).map((v, k) => v.other)
                  : ""
              }
              // value={AnswerData.filter(d=>d.questionId===ques.question_id)[0].other}
              onChange={e => {
                handleInputChange(e, ques.question_id);
              }}
            />
          ) : 
          ques.input_type_id === 6 ? (
            <ESDatePicker
              quesId={ques.question_id}
              startDate={
                AnswerData.filter(d => d.questionId === ques.question_id) &&AnswerData.length
                ? AnswerData.filter(
                      d => d.questionId === ques.question_id
                    ).map((v, k) => 
                    {console.log("4444444444--------->",moment(JSON.parse(v.other).YearOfManufacturing).toDate())}
                    )
                  : 
                startDate
              }
              endDate={endDate}
              handleEndChange={handleEndChange}
              handleStartChange={handleStartChange}
            />
          ) :
           null
          }
        </div>
      ))}
    </div>
  );
};

export default withMedia(QuestionCard);
