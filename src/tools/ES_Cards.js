import React from "react";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";

import * as Color from "../config/Color.config";
import { withMedia } from "react-media-query-hoc";

const QuestionCard = props => {
  const {
    categories,
    pageno,
    handleCheckChange,
    handleRadioChange,
    userId,
    media
  } = props;

  console.log(categories, pageno);

  return (
    <div>
      {// cat && cat.length && cat.questions && cat.questions.length &&
      categories[pageno].questions.map((ques, k2) => (
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
              {k2 + 1}. {ques.name}
            </span>
          </div>
          {ques.qtype_id === 1 ? (
            <ESCheckBox
              quesId={ques.id}
              value={ques.possible_answers}
              handleChange={handleCheckChange}
            />
          ) : ques.qtype_id === 2 ? (
            <ESRadio
              value={ques.possible_answers}
              pageNo={pageno}
              cvalue={categories}
              handleRadioChange={handleRadioChange}
              quesId={ques.id}
              userId={userId}
            />
          ) : ques.qtype_id === 6 ? (
            <ESDropDown
              quesId={ques.id}
              pageNo={pageno}
              cvalue={categories}
              value={ques.possible_answers}
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
