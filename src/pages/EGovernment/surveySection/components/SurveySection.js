import React from 'react';
import * as Colors from '../../../../config/Color.config';
import '../../../../App.css';

const SurveySection = (props) => {
    const countryName = localStorage.getItem("countryName");
    const surveyHeaderName = localStorage.getItem("SurveyHeaderName");

    const {handleQuestionRoute} = props
    return (
        <div className="p-2">
            <div className="d-flex flex-row py-2">
                <h4 style={{color: Colors.PrimaryColor}}>{surveyHeaderName}</h4>
            </div>
            <div className="d-flex flex-row">
                <h5 style={{color:'#999999'}}>{countryName}</h5>
            </div>
           <hr />
           <SurveySectionList handleQuestionRoute={handleQuestionRoute} />
        </div>
    );
};

export default SurveySection;

const SurveySectionList = props => {
    const { handleQuestionRoute } = props
    return (
        <div className="">
        {data.map(v => 
            <div className="d-flex flex-row p-3 rounded justify-content-between my-2"
                id="surveyList"
                style={{
                    // background:Colors.PrimaryColor,
                    color:"white",
                    cursor: "pointer",
                }}
                onClick={handleQuestionRoute}
            >
                <div style={{ fontWeight:'bold', fontSize:'18px'}}>
                    {v.surveySection}
                </div> 
                <span><i className="fa fa-edit">&nbsp;{v.amountOfSurvey} of{" "} {v.totalSurvey} Answered</i></span>    
            </div>
        )}
        </div>
        
    )
}

const data = [
    {surveySection: 'The current situation of e-government', amountOfSurvey:2, totalSurvey:10 },
    {surveySection: 'Organization Background', amountOfSurvey:0 , totalSurvey:10},
    {surveySection: 'Legal', amountOfSurvey:1, totalSurvey:10 },
    {surveySection: 'Strategy', amountOfSurvey:0, totalSurvey:10}
]