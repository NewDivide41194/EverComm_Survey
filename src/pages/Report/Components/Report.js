import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { withRouter } from "react-router-dom";
import HMT from '../../../assets/images/HMT.gif'

const Report = props => {
  const { ReportData } = props;
  const surveyTitle = ReportData.length && ReportData[0].survery_title;
  const pageNo = ReportData.length && ReportData[0].survey_sections.length;
  const _handleMenu = () => {
    props.history.push("/menu");
  };

  const _handleReview = () => {
    const buildingId=localStorage.getItem("buildingId")
    const userId=JSON.parse(localStorage.getItem("userData"))[0].login_user_id
    const surveyHeaderId=localStorage.getItem("SurveyHeaderId")
    props.history.push(`/question/${userId}/${surveyHeaderId}/${buildingId}`);
  };
  return (
    <div className="container py-4 text-center text-success">
      <h3>*Your Answers are Posted!</h3>
      <img style={{width:'50%'}} src={HMT} alt="Post"/>
      <div className='row justify-content-center'>
        <div className='col-md-4 col-sm-12 py-2'>
        <ESButton text={"Review Your Survey"} onClick={() => _handleReview()} style={{background:'#9945C0',minWidth:177}} small/>
        </div>
        <div className='col-md-4 col-sm-12 py-2'>
        <ESButton text={"Back to Menu"} onClick={() => _handleMenu()} style={{minWidth:177}} small/>
        </div>
        
      </div>
    </div>
  );
};

export default withRouter(Report);
