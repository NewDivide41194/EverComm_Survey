import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { QuestionFetch } from "../../../api/FetchQuestions";
import Loader from "../../../assets/images/loading.gif";

const QuestionContainer = () => {
  const token = 123;
  const [surveyData, setSurveyData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    QuestionFetch(token, (err, data) => {
      setSurveyData(data.payload);
      setIsLoading(false);
    });
  }, []);

  return IsLoading ? (
    <div
      className="w-100 text-light text-center position-absolute"
      style={{
        background: "rgba(0,0,0,0.3)",
        height: "100vh",
        paddingTop: "50vh",
        zIndex: 3000
      }}
    >
      <div className="w-100">
        <img src={Loader} style={{ width: 70 }} alt="loading" />
      </div>
      <div className="w-100">Loading...</div>
    </div>
  ) : (
    <Question surveyData={surveyData} />
  );
  // </div>
};

export default QuestionContainer;
