import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";

import * as Color from "../config/Color.config";
import { withMedia } from "react-media-query-hoc";

const QuestionCard = props => {
  const {
    survey_sections,
    pageno,
    handleCheckChange,
    handleRadioChange,
    userId,
    media
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
              quesId={ques.id}
              value={ques.option_choices}
              handleChange={handleCheckChange}
            />
          ) : ques.input_type_id === 2 ? (
            <ESRadio
              value={ques.option_choices}
              pageNo={pageno}
              cvalue={survey_sections}
              handleRadioChange={handleRadioChange}
              quesId={ques.id}
              userId={userId}
            />
          ) : ques.input_type_id === 5 ? (
            <ESDropDown
              quesId={ques.id}
              pageNo={pageno}
              cvalue={survey_sections}
              value={ques.option_choices}
              handleChange={handleCheckChange}
              userId={userId}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default withMedia(QuestionCard);
