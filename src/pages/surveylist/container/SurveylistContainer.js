import React from 'react'
import Surveylist from "../component/Surveylist"
import { ESButton } from '../../../tools/ES_Button';

const SurveylistContainer=props=>{
    const _handleSurvey = () => {
        props.history.push("/building");
        window.location.reload();
      };
   return(
    <div className="container" >
    <div className="d-flex flex-row flex-fill">
                <div className="">
                    <h2>Building List</h2>
                </div>
                <div className="">
                    <ESButton
                    text={"Create Survey"}
                    onClick={_handleSurvey}
                    small   
                    />
                </div>
            </div>
        {
           SurveyList.map((v,k)=>
           <Surveylist buildingName={v.Building_Name} 
           progress={
              v.questions === v.answers
                ? "Completed"
                : `${v.answers} of ${v.questions} Answered`
            }/>

           )
        
       }   
       </div>
       
   )
}
export default SurveylistContainer;

const SurveyList=[
    {
       "Survey_Header_Id":1,
       "Building_Id":1,
       "Building_Name":"Mandalay convention Centre",
       "questions":42,
       "answers":4
    },
    {
       "Survey_Header_Id":1,
       "Building_Id":12,
       "Building_Name":"Man Myanmar Palaza",
       "questions":42,
       "answers":4
    }
 ]