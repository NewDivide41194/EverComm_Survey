import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { withRouter } from "react-router-dom";
import HMT from '../../../assets/images/HMT.gif'

const ReportMenu = props => {
  const { ReportData } = props;
  // const surveyTitle = ReportData.length && ReportData[0].survery_title;
  // const pageNo = ReportData.length && ReportData[0].survey_sections.length;
  const buildingId=localStorage.getItem("buildingId")
  const userId=localStorage.getItem("userId")
  const surveyHeaderId=localStorage.getItem("SurveyHeaderId")

  const _handleMenu = () => {
    props.history.push(`/menu/${userId}`);
  };

  const _handleReview = () => {
  
    props.history.push(`/question/${userId}/${surveyHeaderId}/${buildingId}`);
  };
  const _ViewReport=()=>{
    props.history.push(`/report`);
  }
  return (
    <div className="container py-4 text-center text-success">
      <h3>*Your Answers are Posted!</h3>
      <img style={{width:'50%'}} src={HMT} alt="Post"/>
      <div className='row justify-content-center'>
        <div className='col-md-3 col-sm-12 py-2'>
        <ESButton text={"Review Your Survey"} onClick={() => _handleReview()} style={{background:'#9945C0',minWidth:177}} small/>
        </div>
        <div className='col-md-3 col-sm-12 py-2'>
        <ESButton text={"Back to Menu"} onClick={() => _handleMenu()} style={{minWidth:177}} small/>
        </div>
        <div className='col-md-3 col-sm-12 py-2'>
        <ESButton text={"View Report"} onClick={() => _ViewReport()} style={{background:'#3a6b1b', minWidth:177}} small/>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ReportMenu);
