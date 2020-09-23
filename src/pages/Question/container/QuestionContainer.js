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

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const surveySectionId = localStorage.getItem("surveySectionId");
  const bTypeId = localStorage.getItem("bTypeId");
  const buildingId = localStorage.getItem("buildingId");
  const buildingName = localStorage.getItem("buildingName");
  const buildingType = localStorage.getItem("buildingType");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const countryId = localStorage.getItem("countryId");
  const Ans = {
    other: "",
    optionChoiceId: null,
    userId: parseInt(userId),
    questionId: null,
    survey_headers_id: parseInt(surveyHeaderId),
    building_id: buildingId,
    keyValue: null,
    subQuestionId: null,
    surveySectionId: parseInt(surveySectionId),
    countryId: parseInt(countryId),
    selected: false
  };
  const amountOfDevice = surveyData.length && surveyData[0].amountOfDevice;
  const deviceAmounts =
    amountOfDevice.length && Object.values(amountOfDevice[0]);
  const questionslength =
    surveyData.length &&
    surveyData[0].survey_sections.map((v) => v.questions.length);

  const idx = [0];
  const totalQues = idx.map((i) => questionslength[i]).reduce((p, c) => p + c);
  const totalQuesCount1 =
    deviceAmounts &&
    deviceAmounts.reduce((r, a, i) => {
      return r + a * questionslength.slice(1)[i];
    }, 0) + totalQues;
  let totalQuesCount =
    (questionslength.length == 6
      ? questionslength[questionslength.length - 1] * deviceAmounts[0]
      : 0) + totalQuesCount1;
  // console.log("Question Data", surveyData);

  useEffect(() => {
    setIsLoading(true);
    const typeId = 33;
    // surveyHeaderId === 10 ? countryId : buildingId;
    QuestionFetch(
      { userId, surveyHeaderId, typeId, bTypeId, surveySectionId, countryId,token },
      (err, data) => {
        setSurveyData(data.payload);
        setAnswerData(data.payload[0].answers);
        setIsLoading(false);
      }
    );
    setTotal(totalQuesCount);
  }, [totalQuesCount]);

  const surveyTotal = surveyData.length && surveyData[0].survey_header_id === 1 ? total :  surveyData.length && surveyData[0].survey_sections[0].questions.length
  const obtained = AnswerCount(AnswerData).length;

  const percent = (obtained * 100) / surveyTotal;
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
    const surveyTotal = surveyData.length && surveyData[0].survey_header_id === 1 ? total :  surveyData.length && surveyData[0].survey_sections[0].questions.length
    confirmAlert({
      title: "Confirm to submit",
      message: `${
        oneQuestion
          ? "One question Remains to Answer!"
          : fullQuestion
          ? "All questions are Answered!"
          : `${surveyTotal - obtained} questions are Remain to Answer!`
      } `,
      buttons: [
        {
          label: "Submit",
          onClick: () => {
            setIsLoading(true);
            PostAnswer(
              { data: AnswerData, total, buildingType, token },
              (err, data) => {
                setIsLoading(false);
                history.push("/finalPage");
                // localStorage.setItem(`${buildingId}`, total);
              }
            );
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
    const quesIdIndex = AnswerData.findIndex((e) => e.questionId === quesId && e.subQuestionId === null);
    return quesIdIndex;
  };

  const subIsQuesId = (quesId, subQuesId) => {
    return AnswerData.filter(
      (e) => e.questionId === quesId && e.subQuestionId === subQuesId
    );
  };
  const subIsQuesIdIndex = (quesId, subQuesId) => {
    return AnswerData.findIndex(
      (e) => e.questionId === quesId && e.subQuestionId === subQuesId
    );
  };
  const handleRadioChange = (ansId, quesId, subQuesId, keys,other) => {
    console.log('radio change >>> ', ansId, quesId, subQuesId, keys,other)
    const RadioAns = {
      ...Ans,
      optionChoiceId: ansId,
      questionId: quesId.toString(),
      subQuestionId: subQuesId || null,
      keyValue: keys || quesId,
      other:other
    };
    if (subQuesId !== undefined) {
      if (subIsQuesId(quesId, subQuesId).length >= 1) {
        AnswerData.splice(subIsQuesIdIndex(quesId, subQuesId), 1, RadioAns);
      } else {
        AnswerData.push(RadioAns);
      }
    } else {
      if (isQuesId(quesId).length >= 1) {
        AnswerData.splice(isQuesIdIndex(quesId), 1, RadioAns);
      } else {
        AnswerData.push(RadioAns);
      }
    }
    setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
  };

  const handleInputChange = (e, quesId, subQuesId, keys, optionId) => {
    // console.log('input change >>> ', e.target.value, quesId, subQuesId, keys, optionId)
    const ImportText = e.target.value.replace(/\s+/g, " ").trimStart();
    const TextAnswer = {
      ...Ans,
      other: ImportText,
      optionChoiceId: optionId || null,
      questionId: quesId.toString(),
      subQuestionId: subQuesId,
      keyValue: keys,
    };
    if (subQuesId === null) {
      if (ImportText === "" && isQuesId(quesId).length >= 1) {
        setValue(e.target.value);
        console.log('1');
        AnswerData.splice(isQuesIdIndex(quesId), 1);
      } else if (isQuesId(quesId).length >= 1) {
        console.log('2');
        setValue(e.target.value);
        AnswerData.splice(isQuesIdIndex(quesId), 1, TextAnswer);
      } else {
        console.log('3',e.target.value, TextAnswer);
        setValue(e.target.value);
        AnswerData.push(TextAnswer);
      }
    } else {
      if (ImportText === "" && subIsQuesId(quesId, subQuesId).length >= 1) {
        console.log('4')
        setValue(e.target.value);
        AnswerData.splice(subIsQuesIdIndex(quesId, subQuesId), 1);
      } else if (subIsQuesId(quesId, subQuesId).length >= 1) {
        console.log('5')
        setValue(e.target.value);
        AnswerData.splice(subIsQuesIdIndex(quesId, subQuesId), 1, TextAnswer);
      } else {
        console.log('6', e.target.value, TextAnswer)
        setValue(e.target.value);
        AnswerData.push(TextAnswer);
      }
    }
  };


  const handleCheckChange = (quesId, answerId, keys) => {
    const isQuesId =
      AnswerData.filter(
        (e) => e.questionId === quesId && e.optionChoiceId === answerId
      );
    const isQuesIdIndex = AnswerData.findIndex(
      (e) => e.optionChoiceId === answerId && e.questionId === quesId
    );
    const CheckAns = {
      ...Ans,
      optionChoiceId: answerId,
      questionId: quesId,
      keyValue: keys,
    };
    if (isQuesId.length >= 1) {
      AnswerData.splice(isQuesIdIndex, 1);
    } else {
      AnswerData.push(CheckAns);
    }
  
    setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
  };

  const handleSelect = (quesId, e, keys, subQuesId) => {
    setSelectedOption(e);
    
    if (e !== null && typeof e.label == "string") {
      let ansId = e.value;
      const SelectAnswer = {
        ...Ans,
        optionChoiceId: ansId,
        questionId: quesId,
        keyValue: keys,
        subQuestionId: subQuesId || null
      };
      if(subQuesId === null){
        if (isQuesId(quesId).length >= 1) {
          AnswerData.splice(isQuesIdIndex(quesId), 1, SelectAnswer);
        } else {
          AnswerData.push(SelectAnswer);
        }
        setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
      }
      else {
        if (subIsQuesId(quesId, subQuesId).length >= 1) {
          AnswerData.splice(subIsQuesId(quesId, subQuesId), 1, SelectAnswer);
        } else {
          AnswerData.push(SelectAnswer);
        }
        setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
      }
    } else if (e !== null && e.label !== "string") {
      let ansId = e.value;
      const SelectAnswer = {
        ...Ans,
        other: ansId,
        questionId: quesId,
        keyValue: keys,
        subQuestionId: subQuesId || null
      };
      if(subQuesId === null){
        if (isQuesId(quesId).length >= 1) {
          AnswerData.splice(isQuesIdIndex(quesId), 1, SelectAnswer);
        } else {
          AnswerData.push(SelectAnswer);
        }
        setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
      }
      else {
        if (subIsQuesId(quesId, subQuesId).length >= 1) {
          AnswerData.splice(subIsQuesIdIndex(quesId, subQuesId), 1, SelectAnswer);
        } else {
          AnswerData.push(SelectAnswer);
        }
        setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
      }
     
    } 
    else if (isQuesId(quesId).length >= 1) {
      AnswerData.splice(isQuesIdIndex(quesId), 1);
      setIsAnswer(AnswerData.map((v, k) => v.optionChoiceId));
    }
  };

  const handleStartChange = (date, quesId, keys, type) => {
    if (endDate < date) {
      alert("Year of Installation is Later Than Year of Manufacturing!");
    }
    if (type === "Year of Manufacture") {
      setStartDate(date);
      const StartDateAnswer = {
        ...Ans,
        other: moment(date).format("yyyy"),
        questionId: quesId,
        keyValue: keys,
      };
      if (isQuesId(quesId).length >= 1) {
        AnswerData.splice(isQuesIdIndex(quesId), 1, StartDateAnswer);
      } else {
        AnswerData.push(StartDateAnswer);
      }
    } else {
      setEndDate(date);
      const StartDateAnswer = {
        ...Ans,
        other: moment(date).format("yyyy"),
        questionId: quesId,
        keyValue: keys,
      };
      if (isQuesId(quesId).length >= 1) {
        AnswerData.splice(isQuesIdIndex(quesId), 1, StartDateAnswer);
      } else {
        AnswerData.push(StartDateAnswer);
      }
    }
  };

  const Data1 =
    surveyData &&
    surveyData.length &&
    surveyData[0].survey_sections[pageno].questions;

  const QuestionData = Data1;

  const OtherAns = (remakeQuesId, QuesId, OptionId) => {
    return AnswerData.filter(
      (a) =>
        a.keyValue === QuesId &&
        a.optionChoiceId === OptionId &&
        a.questionId === remakeQuesId
    );
  };

  const otherOfQuestion = (index) => {
    const isOther =
      QuestionData &&
      QuestionData.map((v, k) =>
        v.option_choices === undefined ? [] : v.option_choices
      )[index].filter((d) => d.option_choice_name === "Other");

    return isOther.length > 0 ? isOther[0].option_choice_id : [];
  };

  const weekQuestion = (index) => {
    const isWeek =
      QuestionData &&
      QuestionData.map((v, k) => v.option_choices)[index].filter(
        (d) => d.option_choice_id === 161
      );
    return isWeek.length > 0 ? isWeek[0].option_choice_id : null;
  };

  const weekAns = (remakeQuesId, QuesId, OptionId) => {
    return AnswerData.filter(
      (a) =>
        a.keyValue === QuesId &&
        a.optionChoiceId === OptionId &&
        a.questionId === remakeQuesId
    );
  };


  if (IsLoading) {
    return <ESLoading />;
  } else {
    return (
      <Question
        value={value}
        buildingName={buildingName}
        surveyData={surveyData}
        QuestionData={QuestionData}
        userId={userId}
        pageno={pageno}
        buildingType={buildingType}
        AnswerData={AnswerData}
        selectedOption={selectedOption}
        obtained={obtained}
        total={total}
        percent={percent}
        amountOfDevice={amountOfDevice}
        otherAns={OtherAns}
        otherOfQuestion={otherOfQuestion}
        _handleSelect={handleSelect}
        _handleCheckChange={handleCheckChange}
        _handleRadioChange={handleRadioChange}
        _handleInputChange={handleInputChange}
        _handleStartChange={handleStartChange}
        _handleNext={_handleNext}
        _handlePrevious={_handlePrevious}
        _handleSubmit={_handleSubmit}
        // isWeek={isWeek}
        weekAns={weekAns}
        weekQuestion={weekQuestion}
      />
    );
  }
};

export default QuestionContainer;
