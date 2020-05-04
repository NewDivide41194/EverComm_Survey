import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { QuestionFetch } from "../../../api/FetchQuestions";
import { PostAnswer } from "../../../api/PostAnswer";
import ESLoading from "../../../tools/ES_Loading.js";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const QuestionContainer = (props) => {
  const { history } = props;
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const buildingId = localStorage.getItem("buildingId");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");

  const [surveyData, setSurveyData] = useState([]);
  const [pageno, setPageno] = useState(0);
  const [AnswerData, setAnswerData] = useState([]);
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isAnswer, setIsAnswer] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  const AnswerCount = [
    ...AnswerData.reduce((mp, o) => {
      if (!mp.has(o.questionId)) mp.set(o.questionId, { ...o, count: 0 });
      mp.get(o.questionId).count++;
      return mp;
    }, new Map()).values(),
  ];

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

  const obtained = AnswerCount.length;
  const total = surveyData.length && surveyData[0].question_count;
  const percent = (obtained * 100) / total;
  const oneQuestion = total - obtained === 1;
  const fullQuestion = total - obtained === 0;

  const _handleNext = () => {
    setPageno(pageno + 1);
    document.getElementById("style-1").scrollTop = 0;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const _handlePrevious = () => {
    setPageno(pageno - 1);
    document.getElementById("style-1").scrollTop = 0;
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
            setIsLoading(true)
            PostAnswer({ data: AnswerData, token }, (err, data) => {
              setIsLoading(false)
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
    // setValue("");
    const Ans = {
      other: "",
      optionChoiceId: ansId,
      userId: userId,
      questionId: quesId,
      survey_headers_id: surveyHeaderId,
      building_id: buildingId,
    };
    if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1, Ans);
    } else {
      AnswerData.push(Ans);
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
    const Ans = {
      other: "",
      optionChoiceId: answerId,
      userId: userId,
      questionId: quesId,
      survey_headers_id: surveyHeaderId,
      building_id: buildingId,
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
    // if (e.target.value===""){}

    const Ans = {
      other: e.target.value.replace(/\s+/g, " ").trimStart(),
      optionChoiceId: null,
      userId: userId,
      questionId: quesId,
      survey_headers_id: surveyHeaderId,
      building_id: buildingId,
    };
    if (e.target.value === " " || "") {
      // AnswerData.splice(isQuesIdIndex, 1);
      return;
    } else if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1, Ans);
    } else {
      AnswerData.push(Ans);
    }
  };

  const handleSelect = (quesId, e) => {
    setSelectedOption(e);
    let ansId = e.value;
    const Ans = {
      other: "",
      optionChoiceId: ansId,
      userId: userId,
      questionId: quesId,
      survey_headers_id: surveyHeaderId,
      building_id: buildingId,
    };
    if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1, Ans);
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

      const Ans = {
        other: JSON.stringify({
          YearOfManufacturing: date,
          YearOfInstallation: endDate,
        }),
        optionChoiceId: null,
        userId: userId,
        questionId: quesId,
        survey_headers_id: surveyHeaderId,
        building_id: buildingId,
      };
      if (isQuesId(quesId).length >= 1) {
        AnswerData.splice(isQuesIdIndex(quesId), 1, Ans);
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
      const Ans = {
        other: JSON.stringify({
          YearOfManufacturing: startDate,
          YearOfInstallation: date,
        }),
        optionChoiceId: null,
        userId: userId,
        questionId: quesId,
        survey_headers_id: surveyHeaderId,
        building_id: buildingId,
      };
      if (isQuesId(quesId).length >= 1) {
        AnswerData.splice(isQuesIdIndex(quesId), 1, Ans);
      } else {
        AnswerData.push(Ans);
      }
    }
  };
console.log("ANS------>",AnswerData);

  return IsLoading ? (
    <ESLoading />
  ) : (
    <Question
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
