import React, { useEffect, useState } from "react";
import { ES_CheckBox } from "./ES_CheckBox";
import { ES_Radio } from "./ES_Radio";
import { ES_DropDown } from "./ES_DropDown";

import * as Color from "../config/Color.config";

const QuestionCard = props => {
  const {
    categories,
    pageno,
    cvalue,
    handleCheckChange,
    handleRadioChange,
    userId
  } = props;

  return (
    <div>
      <div className="mb-3" style={{ color: `${Color.PrimaryColor}` }}>
        <h3 className="card-title">{categories[0].name}</h3>
      </div>
      {// cat && cat.length && cat.questions && cat.questions.length &&
      categories[pageno].questions.map((ques, k2) => (
        <div className="d-flex  flex-row flex-fill flex-wrap w-100 bg-light p-2 my-2 rounded">
          <div className="d-flex flex-row flex-wrap w-100" key={k2}>
            {k2 + 1}. {ques.name}
          </div>
          {ques.qtype_id === 1 ? (
            <ES_CheckBox
              quesId={ques.id}
              value={ques.possible_answers}
              handleChange={handleCheckChange}
            />
          ) : ques.qtype_id === 2 ? (
            <ES_Radio
              value={ques.possible_answers}
              pageNo={pageno}
              cvalue={categories}
              handleRadioChange={handleRadioChange}
              quesId={ques.id}
              userId={userId}
            />
          ) : ques.qtype_id === 6 ? (
            <ES_DropDown 
            quesId={ques.id}
            value={ques.possible_answers}
            handleChange={handleCheckChange}/>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
