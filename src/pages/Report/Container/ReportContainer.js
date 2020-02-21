import React, { useEffect, useState } from 'react'
import Report from '../Components/Report'
import { QuestionFetch } from '../../../api/FetchQuestions'

const ReportContainer=()=>{
    const [reportData,setReportData]=useState([])
    useEffect(()=>{
        const token=111
        QuestionFetch(token,(err,data)=>{setReportData(data.payload)
        })
    },[])
    return(<div>
            <Report ReportData={reportData}/>
    
    </div>
    )
}

export default ReportContainer