import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { QuestionFetch } from "../../../api/FetchQuestions";
import Loader from "../../../assets/images/loading.gif";

const QuestionContainer = () => {
  const token = 123;
  const [surveyData, setSurveyData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const userId=JSON.parse(localStorage.getItem("userData"))[0].login_user_id
  const [buildingId,setBuildingId]=useState(localStorage.getItem("buildingId"))

  const surveyHeaderId=localStorage.getItem("SurveyHeaderId")
  const [answers,setAnswers]=useState([])
  useEffect(() => {
    setIsLoading(true);
    QuestionFetch(userId,surveyHeaderId,buildingId, (err, data) => {
      console.log('BBBBBBB',buildingId);
      
      setSurveyData(data.payload);
      setAnswers(data.payload[0].answers)
      setIsLoading(false);
    });
  }, []);
  
  return IsLoading ? (
    <div
      className="w-100 text-light text-center position-absolute"
      style={{
        background: "rgba(0,0,0,0.3)",
        height: "100%",
        paddingTop: "50vh",
        zIndex: 3000,
        top: 0
      }}
    >
      <img src={Loader} style={{ width: 70 }} alt="loading" />
      <div className="w-100">Loading...</div>
    </div>
  ) : (
    <Question surveyData={surveyData} answers={answers} userId={userId} surveyHeaderId={surveyHeaderId} buildingId={buildingId}/>
  );
};

export default QuestionContainer;
