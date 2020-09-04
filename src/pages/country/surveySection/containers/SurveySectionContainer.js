import React from 'react';
import SurveySection from '../components/SurveySection'

const SurveySectionContainer = (props) => {
   
    const surveyHeaderId = localStorage.getItem("SurveyHeaderId")
    const userId = localStorage.getItem("userId")
    const buildingId = 35
    const handleQuestionRoute = () => {
        props.history.push(`question/${userId}/${surveyHeaderId}`)
    }
    return (
        <div className="container">
           <SurveySection handleQuestionRoute={handleQuestionRoute} />
        </div>
    );
};

export default SurveySectionContainer;