import React, { useEffect, useState } from 'react'
import ReportMenu from '../Components/ReportMenu'
import { ReportAnswers } from '../../../api/FetchReportAnswers'

const ReportContainer=()=>{
    const [reportData,setReportData]=useState([])
    const surveyHeaderId=localStorage.getItem("SurveyHeaderId")
    const token=localStorage.getItem("token")
    useEffect(()=>{
      ReportAnswers({surveyHeaderId,token},(err,data)=>{
        setReportData(data)
      })
    },[])
    console.log(reportData);
    
    return(<div>
            <ReportMenu ReportData={reportData}/>
    
    </div>
    )
}

export default ReportContainer