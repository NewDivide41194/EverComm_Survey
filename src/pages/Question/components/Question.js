import React, { useState, useEffect } from "react";
import QuestionCard from "../../../tools/ES_Cards";
import { ESButton } from "../../../tools/ES_Button";
import { PostAnswer } from "../../../api/PostAnswer";
import { withMedia } from "react-media-query-hoc";
import ESProgress from "../../../tools/ES_Progress";
import * as Color from "../../../config/Color.config";
import { withRouter } from "react-router-dom";

const Question = props => {
  const { surveyData, media, answers, userId, surveyHeaderId, history } = props;
  const [pageno, setPageno] = useState(0);
  const [userData, setUserData] = useState({});
  const [AnswerData, setAnswerData] = useState([...answers]);
  const [value, setValue] = useState("");
  const [testValue, setTestValue] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isAnswer, setIsAnswer] = useState(
    AnswerData.map((v, k) => v.optionChoiceId)
  );
  const [selectedOption,setSelectedOption]=useState(null)
  
  const AnswerCount = [
    ...AnswerData.reduce((mp, o) => {
      if (!mp.has(o.questionId)) mp.set(o.questionId, { ...o, count: 0 });
      mp.get(o.questionId).count++;
      return mp;
    }, new Map()).values()
  ];
  const AnswerCountLength = AnswerCount.length;

  const obtained = AnswerCountLength;
  const total = surveyData.length && surveyData[0].question_count;
  const percent = (obtained * 100) / total;

  const _handleNext = () => {
    setPageno(pageno + 1);
    document.getElementById("style-1").scrollTop = 0;
    setValue("");
  };

  const _handlePrevious = () => {
    setPageno(pageno - 1);
    document.getElementById("style-1").scrollTop = 0;
    setValue("");
  };

  const _handleSubmit = () => {
    PostAnswer({ data: AnswerData }, (err, data) => {
      history.push("/report");
    });
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const handleRadioChange = (ansId, quesId) => {
    const isQuesId = AnswerData.filter(e => e.questionId === quesId);
    const isQuesIdIndex = AnswerData.findIndex(e => e.questionId === quesId);
    const Ans = {
      other: "",
      optionChoiceId: ansId,
      userId: userId,
      questionId: quesId,
      survey_headers_id: surveyHeaderId
    };
    if (isQuesId.length >= 1) {
      AnswerData.splice(isQuesIdIndex, 1, Ans);
    } else {
      AnswerData.push(Ans);
    }
    setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
  };

  const handleCheckChange = (quesId, answerId) => {
    const isQuesId =
      AnswerData.length &&
      AnswerData.filter(
        e => e.questionId === quesId && e.optionChoiceId === answerId
      );
    const isQuesIdIndex = AnswerData.findIndex(
      e => e.optionChoiceId === answerId
    );
    const Ans = {
      other: "",
      optionChoiceId: answerId,
      userId: userId,
      questionId: quesId,
      survey_headers_id: surveyHeaderId
    };
    if (isQuesId.length >= 1) {
      AnswerData.splice(isQuesIdIndex, 1);
    } else {
      AnswerData.push(Ans);
    }
    setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
  };

  const handleInputChange = (e, quesId) => {
    setValue(e.target.value);
    testValue[quesId] = e.target.value;
    setTestValue(testValue);

    const isQuesIdIndex = AnswerData.findIndex(e => e.questionId === quesId);
    const isQuesId = AnswerData.filter(e => e.questionId === quesId);
    const Ans = {
      other: e.target.value,
      optionChoiceId: null,
      userId: userId,
      questionId: quesId,
      survey_headers_id: surveyHeaderId
    };
    if (isQuesId.length >= 1) {
      AnswerData.splice(isQuesIdIndex, 1, Ans);
    } else {
      AnswerData.push(Ans);
    }
  };

  const handleSelect =( quesId,e) => {
    setSelectedOption(e)
    console.log("---------------->",e);    
    let ansId =e.value
    const isQuesId = AnswerData.filter(e => e.questionId === quesId);
    const isQuesIdIndex = AnswerData.findIndex(e => e.questionId === quesId);
    const Ans = {
      other: "",
      optionChoiceId: parseInt(ansId),
      userId: userId, 
      questionId: quesId,
      survey_headers_id: surveyHeaderId
    };
    if (isQuesId.length >= 1) {
      AnswerData.splice(isQuesIdIndex, 1, Ans);
    } else {
      AnswerData.push(Ans);
    }
    setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
  };

  const handleStartChange = (date, quesId) => {
    console.log("startDate------>", startDate);

    if (date > endDate) {
      alert("Year of Installation is Older Than Year of Manufacturing");
    } else {
      setStartDate(date);

      const isQuesId = AnswerData.filter(e => e.questionId === quesId);
      const isQuesIdIndex = AnswerData.findIndex(e => e.questionId === quesId);

      const Ans = {
        other: JSON.stringify({
          YearOfManufacturing: date,
          YearOfInstallation: endDate
        }),
        optionChoiceId: null,
        userId: userId,
        questionId: quesId,
        survey_headers_id: surveyHeaderId
      };
      if (isQuesId.length >= 1) {
        AnswerData.splice(isQuesIdIndex, 1, Ans);
      } else {
        AnswerData.push(Ans);
      }
      setAnswerData(AnswerData);
    }
  };

  const handleEndChange = (date, quesId) => {
    console.log("endDate------>", endDate);
    if (startDate > date) {
      alert("Year of Installation is Older Than Year of Manufacturing");
      return null;
    } else {
      setEndDate(date);
      const isQuesId = AnswerData.filter(e => e.questionId === quesId);
      const isQuesIdIndex = AnswerData.findIndex(e => e.questionId === quesId);
      const Ans = {
        other: JSON.stringify({
          YearOfManufacturing: startDate,
          YearOfInstallation: date
        }),
        optionChoiceId: null,
        userId: userId,
        questionId: quesId,
        survey_headers_id: surveyHeaderId
      };
      if (isQuesId.length >= 1) {
        AnswerData.splice(isQuesIdIndex, 1, Ans);
      } else {
        AnswerData.push(Ans);
      }
    }
  };
console.log("Answer Data--------->",AnswerData);

  return (
    surveyData.length && (
      <div>
        <ESProgress Percent={percent} />
        <div className="container">
          <div
            className={`text-light row justify-content-end ${media.mobile ||
              "pt-3 justify-content-center"}`}
          >
            <div
              className="px-4 position-fixed"
              style={{
                borderRadius: media.mobile ? "20px 0px 0 20px" : "20px",
                background: "rgba(0,0,0,0.5)"
              }}
            >{`${AnswerCountLength || 0} of ${total} Answered`}</div>
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
            <div className="force-overflow">
              {surveyData[0].survey_sections.length && (
                <QuestionCard
                  survey_sections={surveyData[0].survey_sections}
                  pageno={pageno}
                  handleCheckChange={handleCheckChange}
                  handleRadioChange={handleRadioChange}
                  handleInputChange={handleInputChange}
                  handleSelect={handleSelect}
                  handleStartChange={handleStartChange}
                  handleEndChange={handleEndChange}
                  userId={userId}
                  TextValue={value}
                  selectedOption={selectedOption}
                  AnswerData={AnswerData}
                  startDate={startDate}
                  endDate={endDate}
                  testValue={testValue}
                  isAnswer={isAnswer}
                />
              )}
            </div>
          </div>
          <div className="row justify-content-between">
            <div
              className="col-lg-6 align-self-center font-weight-bold"
              style={{ color: `${Color.PrimaryColor}` }}
            >{`Page - ${pageno + 1} of ${
              surveyData[0].survey_sections.length
            }`}</div>
            <div className="col-lg-6">
              <div className="row justify-content-end">
                <div className="col-lg-4 col-6 p-2">
                  {surveyData.length && pageno > 0 ? (
                    <ESButton
                      text={"PREVIOUS"}
                      onClick={_handlePrevious}
                      small
                      leftIcon={<i className="fa fa-caret-left pr-2" />}
                    />
                  ) : null}
                </div>
                <div className="col-lg-4 col-6 p-2">
                  {surveyData.length &&
                  surveyData[0].survey_sections.length === pageno + 1 ? (
                    <ESButton
                      text={"DONE"}
                      small
                      onClick={_handleSubmit}
                      disabled={AnswerData.length === 0 ? true : false}
                      style={{
                        cursor:
                          AnswerData.length === 0 ? "not-allowed" : "pointer"
                      }}
                    />
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
          </div>
        </div>
      </div>
    )
  );
};

export default withRouter(withMedia(Question));
