import React from "react";

import { withMedia } from "react-media-query-hoc";
import ESCheckBox from "./ES_CheckBox";
import { ESRadio } from "./ES_Radio";
import { ESDropDown } from "./ES_DropDown";
import { ESInput } from "./ES_Inputs";
import ESDatePicker from "./ES_DatePicker";
import ES_InputTypes from "./ES_InputTypes";

const ESGroupQuestionCard = (props) => {
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
    otherQuestion,
    otherAns,
    otherOfQuestion,
  } = props;
  console.log("Hello I'm Group Question");
  // const buildingId = localStorage.getItem("buildingId");
  // const deviceIndexValue = amountOfDevice && Object.values(amountOfDevice[0]);
  // const addedQuestionId = 1000;
  // const ques.question_id=1555
  const ageOfBuildingOption = new Array(99)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));

  const pageDeviceIndex = 1;

  return (
    <div>
      {QuestionData &&
        QuestionData.map((ques, k2) => {
          return (
            <div
              className="d-flex flex-row flex-fill flex-wrap w-100 p-3 mb-3 rounded bg-light border"
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
                <div className="d-flex flex-row pb-3 w-100 justify-content-between">
                  <div>
                    {k2 + 1}. {ques.question_name}
                  </div>
                  {AnswerData.map((v, k) => v.questionId).filter(
                    (v) => v === ques.question_id
                  )[0] === ques.question_id ? (
                    <QuestionCardInfo info={"Answered"} media={media} />
                  ) : (
                    <QuestionCardInfo info={"Pending"} media={media} />
                  )}
                </div>
                <div>
                  {ques.sub_questions&&ques.sub_questions.map(v=>v.sub_question_name)}
                </div>
              </div>
              {/* <ES_InputTypes
                QuestionData={QuestionData}
                AnswerData={AnswerData}
                isQuestion={isQuestion}
                _handleCheckChange={_handleCheckChange}
              /> */}
              
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
      {/* {media.mobile || (
        <span style={{ fontSize: 10 }} className="text-secondary pr-1">
          {info}
        </span>
      )} */}
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
