import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { QuestionFetch } from "../../../api/FetchQuestions";
import { PostAnswer } from "../../../api/PostAnswer";
import { AnswerCount, windowScrollTop } from "../../../helper/questionHelper";
import ESLoading from "../../../tools/ES_Loading.js";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const QuestionContainer = (props) => {
  const { history } = props;
  const [surveyData, setSurveyData] = useState([]);
  const [pageno, setPageno] = useState(0);
  const [AnswerData, setAnswerData] = useState([]);
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isAnswer, setIsAnswer] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const buildingId = localStorage.getItem("buildingId");
  const buildingName=localStorage.getItem("buildingName")
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const Ans = {
    other: "",
    optionChoiceId: null,
    userId: userId,
    questionId: null,
    survey_headers_id: surveyHeaderId,
    building_id: buildingId,
   
  };

  useEffect(() => {
    setIsLoading(true);
    QuestionFetch(
      { userId, surveyHeaderId, buildingId, token },
      (err, data) => {
        setSurveyData(data.payload);
        setIsLoading(false);
        setAnswerData(data.payload[0].answers);
      }
    );
  }, []);

  const obtained = AnswerCount(AnswerData).length;
  const total = surveyData.length && surveyData[0].question_count;
  const percent = (obtained * 100) / total;
  const oneQuestion = total - obtained === 1;
  const fullQuestion = total - obtained === 0;

  const _handleNext = () => {
    setPageno(pageno + 1);
    windowScrollTop();
  };

  const _handlePrevious = () => {
    setPageno(pageno - 1);
    windowScrollTop();
  };

  const _handleSubmit = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: `${
        oneQuestion
          ? "One question Remains to Answer!"
          : fullQuestion
          ? "All questions are Answered!"
          : `${total - obtained} questions are Remain to Answer!`
      } `,
      buttons: [
        {
          label: "Submit",
          onClick: () => {
            setIsLoading(true);
            PostAnswer({ data: AnswerData, token }, (err, data) => {
              setIsLoading(false);
              history.push("/reportMenu");
            });
          },
        },
        {
          label: "Back to Question",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };
  const isQuesId = (quesId) => {
    return AnswerData.filter((e) => e.questionId === quesId);
  };
  const isQuesIdIndex = (quesId) => {
    return AnswerData.findIndex((e) => e.questionId === quesId);
  };

  const handleRadioChange = (ansId, quesId) => {
    const RadioAns = { ...Ans, optionChoiceId: ansId, questionId: quesId };
    console.log(RadioAns);

    if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1, RadioAns);
    } else {
      AnswerData.push(RadioAns);
    }
    setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
  };

  const handleCheckChange = (quesId, answerId) => {
    const isQuesId =
      AnswerData.length &&
      AnswerData.filter(
        (e) => e.questionId === quesId && e.optionChoiceId === answerId
      );
    const isQuesIdIndex = AnswerData.findIndex(
      (e) => e.optionChoiceId === answerId
    );
    const CheckAns = { ...Ans, optionChoiceId: answerId, questionId: quesId };
    if (isQuesId.length >= 1) {
      AnswerData.splice(isQuesIdIndex, 1);
    } else {
      AnswerData.push(CheckAns);
    }
    setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
  };

  const handleInputChange = (e, quesId) => {
    setValue(e.target.value);
console.log(value);

    const TextAnswer = {
      ...Ans,
      other: e.target.value.replace(/\s+/g, " ").trimStart(),
      questionId: quesId,
    };
    if (
      e.target.value.replace(/\s+/g, " ").trimStart() === "" &&
      isQuesId(quesId).length < 1
    ) {
      return;
    } else if (
      e.target.value.replace(/\s+/g, " ").trimStart() === "" &&
      isQuesId(quesId).length >= 1
    ) {
      AnswerData.splice(isQuesIdIndex(quesId), 1);
    } else if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1, TextAnswer);
    } else {
      AnswerData.push(TextAnswer);
    }
  };

  const handleSelect = (quesId, e) => {
    setSelectedOption(e);
    let ansId = e.value;
    const SelectAnswer = { ...Ans, optionChoiceId: ansId, questionId: quesId };
    if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1, SelectAnswer);
    } else {
      AnswerData.push(SelectAnswer);
    }
    setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
  };

  const handleStartChange = (date, quesId) => {
    if (date > endDate) {
      alert("Year of Installation is Later Than Year of Manufacturing!");
    } else {
      setStartDate(date);

      const StartDateAnswer = {
        ...Ans,
        other: JSON.stringify({
          YearOfManufacturing: date,
          YearOfInstallation: endDate,
        }),
        questionId: quesId,
      };
      if (isQuesId(quesId).length >= 1) {
        AnswerData.splice(isQuesIdIndex(quesId), 1, StartDateAnswer);
      } else {
        AnswerData.push(StartDateAnswer);
      }
      setAnswerData(AnswerData);
    }
  };

  const handleEndChange = (date, quesId) => {
    if (startDate > date) {
      alert("Year of Installation is Older Than Year of Manufacturing");
      return null;
    } else {
      setEndDate(date);

      const EndDateAnswer = {
        ...Ans,
        other: JSON.stringify({
          YearOfManufacturing: startDate,
          YearOfInstallation: date,
        }),
        questionId: quesId,
      };
      if (isQuesId(quesId).length >= 1) {
        AnswerData.splice(isQuesIdIndex(quesId), 1, EndDateAnswer);
      } else {
        AnswerData.push(EndDateAnswer);
      }
    }
  };
  console.log("ANS------>", AnswerData);

  return IsLoading ? (
    <ESLoading />
  ) : (
    <Question
      buildingName={buildingName}
      surveyData={surveyData}
      userId={userId}
      pageno={pageno}
      AnswerData={AnswerData}
      startDate={startDate}
      endDate={endDate}
      selectedOption={selectedOption}
      obtained={obtained}
      total={total}
      percent={percent}
      buildingName={buildingName}
      _handleSelect={handleSelect}
      _handleCheckChange={handleCheckChange}
      _handleRadioChange={handleRadioChange}
      _handleInputChange={handleInputChange}
      _handleStartChange={handleStartChange}
      _handleEndChange={handleEndChange}
      _handleNext={_handleNext}
      _handlePrevious={_handlePrevious}
      _handleSubmit={_handleSubmit}
    />
  );
};

export default QuestionContainer;
