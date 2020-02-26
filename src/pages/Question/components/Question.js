import React, { useState, useEffect } from "react";
import QuestionCard from "../../../tools/ES_Cards";
import { ESButton } from "../../../tools/ES_Button";
import { PostAnswer } from "../../../api/PostAnswer";
import { withMedia } from "react-media-query-hoc";
import * as Color from '../../../config/Color.config'

const Question = props => {
  const { surveyData, media } = props;
  const [pageno, setPageno] = useState(0);
  const [userData, setUserData] = useState({});

  const _handleNext = () => {
    setPageno(+1);
  };
  const _handlePrevious = () => {
    setPageno(0);
  };

  const _handleSubmit = () => {
    PostAnswer(surveyData[0], (err, data) => {});
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const handleCheckChange = (quesId, answerId) => {
    let questions = surveyData[0].categories[pageno].questions;
    let index = questions.findIndex(q => q.id === quesId);
    if (index >= 0) {
      let ind2 = questions[index].possible_answers.findIndex(
        ans => ans.id === answerId
      );
      let ind3 = surveyData[0].categories[pageno].questions[
        index
      ].possible_answers[ind2].users.findIndex(user => user === userData._id);
      if (ind3 < 0) {
        surveyData[0].categories[pageno].questions[index].possible_answers[
          ind2
        ].users.push(userData._id);
      } else {
        surveyData[0].categories[pageno].questions[index].possible_answers[
          ind2
        ].users.splice(ind3, 1);
      }
    }
  };

// console.log("QQQQ",surveyData.length&& surveyData[0].categories[pageno].questions.length);

  return (
    surveyData.length && (
      <div className='w-100'>
         <div className={`progress ${media.mobile?'w-75':'w-25'}`}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%",background: Color.PrimaryColor}}
          ></div>
        </div>
        <div
          style={{
            fontSize: media.mobile ? "20px" : "25px",
            fontWeight: "bold"
          }}
        >
          {surveyData[0].survery_title}
        </div>
        <div
          className="my-2"
          style={{ fontSize: media.mobile ? "18px" : "20px" }}
        >
          {surveyData[0].categories[pageno].name}
        </div>
        <div className="my-2 scrollbar w-100" id="style-1">
          <div className="force-overflow">
            {surveyData[0].categories.length && (
              <QuestionCard
                categories={surveyData[0].categories}
                pageno={pageno}
                handleCheckChange={handleCheckChange}
                userId={userData}
              />
            )}
          </div>
        </div>
        <div className='row'>
            <div className='w-50 pr-2'>
          {surveyData.length && surveyData[0].categories.length > pageno + 1 ? (
null
) : (
          <ESButton text={"PREVIOUS"} onClick={_handlePrevious} leftIcon={<i class="fa fa-caret-left pr-2"/>}/>
        )}
        </div>
        <div className='w-50 pl-2'>
          {surveyData.length && surveyData[0].categories.length === pageno + 1 ? (
          <ESButton text={"DONE"} onClick={_handleSubmit} />
        ) : (
          <ESButton text={"NEXT"} onClick={_handleNext} rightIcon={<i class="fa fa-caret-right pl-2"/>} />
        )}
        </div>
        </div>
      
       
      </div>
    )
  );
};

export default withMedia(Question);
