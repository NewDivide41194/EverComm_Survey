import React from "react";
import QuestionCard from "../../../tools/ES_Cards";
import * as Color from "../../../config/Color.config";

const Question = props => {
  const { surveyData } = props;
  return (
   surveyData.length&&
   <div className="container">
      <h3 className="card-title">{surveyData[0].survery_title}</h3>

      {/* {surveyData[0].categories.map((v, k) => (
      //   <div
      //     className="mb-3"
      //     style={{ color: `${Color.PrimaryColor}` }}
      //     key={k}
      //   >
      // <h3 className="card-title">{v.name}</h3>
      //   </div>
      ))} */}
     {
       surveyData[0].categories.length && <QuestionCard categories={surveyData[0].categories} />
     } 
    </div>
  );
};

export default Question;
