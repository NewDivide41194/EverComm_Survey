import React from 'react'
import Surveylist from "../component/Surveylist"
import { ESButton } from '../../../tools/ES_Button';
import * as Colors from "../../../config/Color.config"
const SurveylistContainer=props=>{
    const _handleSurvey = () => {
        props.history.push("/building");
        window.location.reload();
      };
      const CompletedSurvey=SurveyList.filter((v,k)=>v.answers===v.questions)
      const PendingSurvey=SurveyList.filter((v,k)=>v.answers!==v.questions)

      console.log(CompletedSurvey);
      
   return(
    <div className="container">
    <div className="d-flex flex-row justify-content-between flex-fill py-3 ">
                <div className="font-weight-bold" style={{color:Colors.PrimaryColor}}>
   <h2>{'Cooling System Survey List'}</h2>
                </div>
                <div className="">
                    <ESButton
x                    text={"Create Survey"}
                    onClick={_handleSurvey}
                    small   
                    />
                </div>
            </div>
            <div style={{borderBottom:`1px solid ${Colors.skyBlue}`,fontSize:"18px",color:`${Colors.PrimaryColor}`,fontWeight:'bold'}} className="py-2">Pending Survey</div>
        {
           PendingSurvey.map((v,k)=>
           <Surveylist buildingName={v.Building_Name} 
           id={v.Building_Id}
           progress={
              v.questions === v.answers
                ? "Completed"
                : `${v.answers} of ${v.questions} Answered`
            }
            BgColor={Colors.PaleYellow}
            TxtColor={Colors.PrimaryColor}/>

           )
        
       }   
       <div style={{borderBottom:`1px solid ${Colors.skyBlue}`,fontSize:"18px",color:`${Colors.PrimaryColor}`,fontWeight:'bold'}} className="py-2">Completed Survey</div>
       {
           CompletedSurvey.map((v,k)=>
           <Surveylist buildingName={v.Building_Name} 
           id={v.Building_Id}
           progress={
              v.questions === v.answers
                ? "Completed"
                : `${v.answers} of ${v.questions} Answered`
            }
            BgColor={Colors.skyBlue}
            TxtColor={"white"}/>

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
    },
    {
        "Survey_Header_Id":1,
        "Building_Id":12,
        "Building_Name":"Man Myanmar Palaza",
        "questions":42,
        "answers":42
     }
 ]