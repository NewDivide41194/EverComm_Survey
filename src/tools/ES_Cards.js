import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";

import * as Color from "../config/Color.config";
import { withMedia } from "react-media-query-hoc";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";

const QuestionCard = props => {
  const {
    survey_sections,
    pageno,
    handleRadioChange,
    handleCheckChange,
    handleInputChange,
    handleSelect,
    userId,
    media,
    AnswerData,
    TextValue,
    cValue,
    svalue
  } = props;

  return (
    <div>
      {// cat && cat.length && cat.questions && cat.questions.length &&
      survey_sections[pageno].questions.map((ques, k2) => (
        <div
          className="d-flex  flex-row flex-fill flex-wrap w-100 bg-light p-3 my-3 rounded"
          key={k2}
          style={{ fontSize: media.mobile ? "12px" : "15px" }}
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
              AnswerData={AnswerData}
              cvalue={cValue}
            />
          ) : ques.input_type_id === 2 ? (
            <ESRadio
              value={ques.option_choices}
              pageNo={pageno}
              cvalue={survey_sections}
              handleRadioChange={handleRadioChange}
              quesId={ques.question_id}
              userId={userId}
              AnswerData={AnswerData}
            />
          ) : ques.input_type_id === 5 ? (
            <ESDropDown
              quesId={ques.question_id}
              pageNo={pageno}
              cvalue={survey_sections}
              value={ques.option_choices}
              handlesele={handleSelect}
              userId={userId}
              AnswerData={AnswerData}
              svalue={svalue}
            />
          ) : ques.input_type_id === 4 ? (
            <ESInput
              id={ques.question_id}
              quesId={ques.question_id}
              userId={userId}
              AnswerData={AnswerData}
              value={TextValue}
              onChange={handleInputChange}
            />
          ) : ques.input_type_id === 6 ? (
            <ESDatePicker/>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default withMedia(QuestionCard);
