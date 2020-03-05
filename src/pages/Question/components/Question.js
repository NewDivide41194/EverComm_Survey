import React, { useState, useEffect } from "react";
import QuestionCard from "../../../tools/ES_Cards";
import { ESButton } from "../../../tools/ES_Button";
import { PostAnswer } from "../../../api/PostAnswer";
import { withMedia } from "react-media-query-hoc";

const Question = props => {
  const { surveyData, media } = props;
  const [pageno, setPageno] = useState(0);
  const [userData, setUserData] = useState({});
  const [AnswerData, setAnswerData] = useState([]);
  const _handleNext = () => {
    setPageno(pageno + 1);
    document.getElementById('style-1').scrollTop=0
  };

  const _handlePrevious = () => {
    setPageno(pageno - 1);
    document.getElementById('style-1').scrollTop=0

  };

  const AnswerCount =
    AnswerData.length &&
    AnswerData.filter((v, k) => v.questionId === v.questionId);
  const AnswerCountLength = AnswerCount.length;

  const _handleSubmit = () => {
    PostAnswer({ data: AnswerData }, (err, data) => {window.alert(`${AnswerCountLength===0?"There is No Answer":JSON.stringify(AnswerData)}  Inserted!`)});
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const handleCheckChange = (quesId, answerId) => {
    const isQuesId =
      AnswerData.length &&
      AnswerData.filter(
        e => e.questionId === quesId && e.optionChoiceId === answerId
      );
    console.log(isQuesId.length);
    const isQuesIdIndex = AnswerData.findIndex(
      e => e.optionChoiceId === answerId
    );
    const Ans = {
      other: "",
      optionChoiceId: answerId,
      userId: userData.userId,
      questionId: quesId
    };
    if (isQuesId.length >= 1) {
      AnswerData.splice(isQuesIdIndex, 1);
    } else {
      AnswerData.push(Ans);
    }
  };

  
  return (
    surveyData.length && (
      <div className="container">
        <div className="text-light row justify-content-center pt-3">
          <div
            className="px-4 position-fixed"
            style={{ borderRadius: "20px", background: "rgba(0,0,0,0.5)" }}
          >{`${AnswerCountLength||0} of ${surveyData[0].question_count} Answered`}</div>
        </div>

        <div
          style={{
            fontSize: media.mobile ? "20px" : "25px",
            fontWeight: "bold"
          }}
          className="position-relative pt-3"
        >
          {surveyData[0].survey_name}
        </div>
        <div
          className="my-2"
          style={{ fontSize: media.mobile ? "18px" : "20px" }}
        >
          {surveyData[0].survey_sections[pageno].section_name}
        </div>

        <div className="my-2 scrollbar w-100" id="style-1">
          {/* <div className='bg-light w-100 h-100' style={{visibility:'hidden'}}></div> */}
          <div className="force-overflow">
            {surveyData[0].survey_sections.length && (
              <QuestionCard
                survey_sections={surveyData[0].survey_sections}
                pageno={pageno}
                handleCheckChange={handleCheckChange}
                userId={userData.userId}
                AnswerData={AnswerData}
              />
            )}
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-2 col-6 p-2">
            {surveyData.length && pageno > 0 ? (
              <ESButton
                text={"PREVIOUS"}
                onClick={_handlePrevious}
                small
                leftIcon={<i className="fa fa-caret-left pr-2" />}
              />
            ) : null}
          </div>
          <div className="col-lg-2 col-6 p-2">
            {surveyData.length &&
            surveyData[0].survey_sections.length === pageno + 1 ? (
              <ESButton text={"DONE"} small onClick={_handleSubmit} />
            ) : (
              <ESButton
                text={"NEXT"}
                onClick={_handleNext}
                small
                rightIcon={<i className="fa fa-caret-right pl-2" />}
              />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default withMedia(Question);
