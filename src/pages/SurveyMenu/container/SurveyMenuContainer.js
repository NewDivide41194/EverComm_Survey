import React, { useState, useEffect } from "react";
import SurveyMenu from "../component/SurveyMenu";
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import { TrancateAns } from "../../../api/FetchTrancate";
import Loading from "../../../assets/images/loading1.gif";
import * as Colors from "../../../config/Color.config";

const SurveyMenuContainer = props => {
  const [menuData, setMenuData] = useState([]);
  const userId = localStorage.getItem("userId")
  const [IsLoading,setIsLoading]=useState(false);
 
  const _handleChoose = (e,header )=> {
    localStorage.setItem("SurveyHeaderId", e.target.id);
    localStorage.setItem("SurveyHeaderName", header);
    props.history.push("/surveylist");
  };
  const token=localStorage.getItem("token")

  useEffect(() => {
    setIsLoading(true);
    MenuInfoFetch({ userId,token }, (err, data) => {      
      setMenuData(data.payload);
      setIsLoading(false);
    });
  }, []);
  const _handleReset = survey_header_id => {
    TrancateAns({ userId, survey_header_id }, (err, data) => {
      window.location.reload()
    });
  };

  return (
    
    <div className="container justify-content-center">
      <div
         className="w-100"
         style={{
           margin: 0,
           position: "relative",
           color:Colors.PrimaryColor
         }}
      >
        <h2>{"Select Survey Name"}</h2>
        { IsLoading &&
        <div className="text-center" style={{
          height: "100%",
          paddingTop: "25vh",
        }}>
            <img src={Loading} style={{ width: 150 }} alt="loading" />
            <div className="w-100 font-weight-bold">Loading...</div>
        </div>  
      }
        {menuData.map((v, k) => (
          <SurveyMenu
            key={k}
            handleChoose={_handleChoose}
            header={v.survey_name}
            handleReset={_handleReset}
            amountOfSurvey={v.amount_of_survey}
            id={v.survey_header_id}
          />
        ))}
      </div>
   </div>
  );
};

export default SurveyMenuContainer ;