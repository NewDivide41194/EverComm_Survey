import React, { useEffect, useState } from 'react'
import Question from '../components/Question'
import { QuestionFetch } from '../../../api/FetchQuestions'

const QuestionContainer=()=>{
    const token=123
    const [surveyData,setSurveyData]=useState([])
    useEffect(()=>{
       QuestionFetch(token,(err,data)=>{  
           setSurveyData(data.payload)     
       })        
    },[])
    return(
        <div className='py-4'>            
            <Question surveyData={surveyData}/>
        </div>
    )
}

export default QuestionContainer