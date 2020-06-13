import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { QuestionFetch } from "../../../api/FetchQuestions";
import { PostAnswer } from "../../../api/PostAnswer";
import { AnswerCount, windowScrollTop } from "../../../helper/questionHelper";
import ESLoading from "../../../tools/ES_Loading.js";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import moment from "moment";

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
  const [total, setTotal] = useState(null);
  const [indexPage, setIndexPage] = useState([{ pageno: pageno, index: 1 }]);
  const [index, setIndex] = useState(1);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const buildingId = localStorage.getItem("buildingId");
  const buildingName = localStorage.getItem("buildingName");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const Ans = {
    other: "",
    optionChoiceId: null,
    userId: userId,
    questionId: null,
    survey_headers_id: surveyHeaderId,
    building_id: buildingId,
  };
  // const totalByUser=parseInt(localStorage.getItem(buildingId))

  useEffect(() => {
    setIsLoading(true);
    QuestionFetch(
      { userId, surveyHeaderId, buildingId, token },
      (err, data) => {
      
        setSurveyData(data.payload);
        setAnswerData(data.payload[0].answers);
        setTotal(
          // data.payload[0].answers.length > 0
          // ? allCount
          data.payload[0].question_count +
            data.payload[0].survey_sections[1].questions.length * 2 +
            data.payload[0].survey_sections[2].questions.length * 2
        );
        // console.log(data.payload[0].survey_sections[1]);

        setIsLoading(false);
      }
    );
  }, []);

  const obtained = AnswerCount(AnswerData).length;

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
              history.push("/finalPage");
              // localStorage.setItem(`${buildingId}`,total)
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
    console.log(quesId, ansId);

    const RadioAns = { ...Ans, optionChoiceId: ansId, questionId: quesId };

    if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1, RadioAns);
    } else {
      AnswerData.push(RadioAns);
    }
    setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
  };

  const handleCheckChange = (quesId, answerId) => {
    console.log(quesId, answerId);

    const isQuesId =
      // AnswerData.length &&
      AnswerData.filter(
        (e) => e.questionId === quesId && e.optionChoiceId === answerId
      );
    const isQuesIdIndex = AnswerData.findIndex(
      (e) => e.optionChoiceId === answerId && e.questionId === quesId
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
    const ImportText = e.target.value.replace(/\s+/g, " ").trimStart();
    const TextAnswer = {
      ...Ans,
      other: ImportText,
      questionId: quesId,
    };
    if (ImportText === "" && isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1);
    } else if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1, TextAnswer);
    } else {
      AnswerData.push(TextAnswer);
    }
  };

  const handleSelect = (quesId, e) => {
    setSelectedOption(e);
    if (e !== null) {
      let ansId = e.value;
      const SelectAnswer = {
        ...Ans,
        optionChoiceId: ansId,
        questionId: quesId,
      };
      if (isQuesId(quesId).length >= 1) {
        AnswerData.splice(isQuesIdIndex(quesId), 1, SelectAnswer);
      } else {
        AnswerData.push(SelectAnswer);
      }
      setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
    } else if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1);
      setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
    }
  };

  const handleStartChange = (date, quesId) => {
    if (date === null) {
      AnswerData.splice(isQuesIdIndex(quesId), 1);
      setStartDate(null);
      setEndDate(null);
    } else if (endDate !== null && endDate < date) {
      alert("Year of Installation is Later Than Year of Manufacturing!");
    } else {
      setStartDate(date);
      const StartDateAnswer = {
        ...Ans,
        other: JSON.stringify({
          YearOfManufacturing: moment(date).format("YYYY-MMM-DD"),
          YearOfInstallation: endDate
            ? moment(endDate).format("YYYY-MMM-DD")
            : moment().format("YYYY-MMM-DD"),
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
    if (date === null) {
      AnswerData.splice(isQuesIdIndex(quesId), 1);
      setEndDate(null);
      setStartDate(null);
    } else if (startDate !== null && startDate > date) {
      alert("Year of Installation is Older Than Year of Manufacturing");
    } else {
      setEndDate(date);
      const EndDateAnswer = {
        ...Ans,
        other: JSON.stringify({
          YearOfManufacturing: startDate
            ? moment(startDate).format("YYYY-MMM-DD")
            : moment(date).subtract(10, "days").calendar(),
          YearOfInstallation: moment(date).format("YYYY-MMM-DD"),
        }),
        questionId: quesId,
      };
      if (isQuesId(quesId).length >= 1) {
        AnswerData.splice(isQuesIdIndex(quesId), 1, EndDateAnswer);
      } else {
        AnswerData.push(EndDateAnswer);
      }
      setAnswerData(AnswerData);
    }
  };
  const Data1 =
    surveyData.length && surveyData[0].survey_sections[pageno].questions;

  // let flattened = surveyData.length&&Data1.reduce(function (accumulator, currentValue) {
  //   return accumulator.concat(currentValue);
  // }, []);
  // console.log(Data1);
  const QuestionData =
    // surveyData.length&&AnswerData.length===0?
    //    surveyData[0].survey_sections[pageno].questions

    //   :
    Data1;

  const filteredIndex = indexPage.filter((d) => d.page === pageno);
  var maxIndex =
    filteredIndex.length === 0
      ? 1
      : Math.max.apply(
          Math,
          filteredIndex.map((o) => o.index)
        );

  const _handleAnotherDevice = () => {
    indexPage.push({ page: pageno, index: maxIndex + 1 });
    setIndex(index + 1);

    //Add Questions
    QuestionData.push(
      ...surveyData[0].survey_sections[pageno].devicesQuestions[maxIndex]
        .questions
    );
    //Remove Question
    const isActionIndex = QuestionData.findIndex((d) => d.input_type_id === 8);
    QuestionData.splice(isActionIndex, 1);
    //Add Question Count
    const AddedQuestionsLength = surveyData[0].survey_sections[
      pageno
    ].devicesQuestions[maxIndex].questions.filter((v) => v.input_type_id !== 8)
      .length;
    setTotal(total + AddedQuestionsLength);
  };
  const amountOfDevice = surveyData.length && surveyData[0].amountOfDevice;
  // console.log("----->", QuestionData);

  return IsLoading ? (
    <ESLoading />
  ) : (
    <Question
      buildingName={buildingName}
      surveyData={surveyData}
      QuestionData={QuestionData}
      userId={userId}
      pageno={pageno}
      AnswerData={AnswerData}
      startDate={startDate}
      endDate={endDate}
      selectedOption={selectedOption}
      obtained={obtained}
      total={total}
      percent={percent}
      amountOfDevice={amountOfDevice}
      _handleSelect={handleSelect}
      _handleCheckChange={handleCheckChange}
      _handleRadioChange={handleRadioChange}
      _handleInputChange={handleInputChange}
      _handleStartChange={handleStartChange}
      _handleEndChange={handleEndChange}
      _handleNext={_handleNext}
      _handlePrevious={_handlePrevious}
      _handleSubmit={_handleSubmit}
      _handleAnotherDevice={_handleAnotherDevice}
    />
  );
};

export default QuestionContainer;
