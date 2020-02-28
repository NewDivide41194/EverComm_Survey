import React, { useState, useEffect } from "react";
import QuestionCard from "../../../tools/ES_Cards";
import { ESButton } from "../../../tools/ES_Button";
import { PostAnswer } from "../../../api/PostAnswer";
import { withMedia } from "react-media-query-hoc";


const Question = props => {
  const { surveyData, media } = props;
  const [pageno, setPageno] = useState(0);
  const [userData, setUserData] = useState({});

  const _handleNext = () => {
   setPageno(pageno+1)
  };
  
  const _handlePrevious = () => {
    setPageno(pageno-1)
  };

  const _handleSubmit = () => {
    PostAnswer(surveyData[0], (err, data) => {});
    alert('Report!')
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const handleCheckChange = (quesId, answerId) => {
    let questions = surveyData[0].survey_sections[pageno].questions;
    console.log(questions);

    let index = questions.findIndex(q => q.question_id === quesId);
    if (index >= 0) {
      let ind2 = questions[index].possible_answers.findIndex(
        ans => ans.id === answerId
      );
      let ind3 = surveyData[0].survey_sections[pageno].questions[
        index
      ].possible_answers[ind2].users.findIndex(user => user === userData._id);
      if (ind3 < 0) {
        surveyData[0].survey_sections[pageno].questions[index].possible_answers[
          ind2
        ].users.push(userData._id);
      } else {
        surveyData[0].survey_sections[pageno].questions[index].possible_answers[
          ind2
        ].users.splice(ind3, 1);
      }
    }
  };


  return (
    surveyData.length && (
      <div className="container">
        <div className="text-light row justify-content-center pt-4">
          <div className="bg-secondary px-4" style={{borderRadius:'20px'}}>{`5 of ${surveyData[0].question_count} Answered`}</div>
        </div>

        <div
          style={{
            fontSize: media.mobile ? "20px" : "25px",
            fontWeight: "bold"
          }}
          className='pt-4'
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
          <div className="force-overflow">
            {surveyData[0].survey_sections.length && (
              <QuestionCard
                survey_sections={surveyData[0].survey_sections}
                pageno={pageno}
                handleCheckChange={handleCheckChange}
                userId={userData}
              />
            )}
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-2 p-2">
            {surveyData.length &&
            pageno>0 ?  (
              <ESButton
                text={"PREVIOUS"}
                onClick={_handlePrevious}
                small
                leftIcon={<i className="fa fa-caret-left pr-2" />}
              />
            ):null}
          </div>
          <div className="col-lg-2 p-2">
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
