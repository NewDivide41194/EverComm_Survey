import React, { useState,useEffect} from "react";
import ReportMenu from "../Components/ReportMenu";
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import moment from "moment";

const ReportMenuContainer = (props) => {
  const[surveyId,setSurveyId]=useState("");
  const [menuData, setMenuData] = useState([]);
  const userId = localStorage.getItem("userId")
  const token=localStorage.getItem("token")
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const StartDate = startDate && moment(startDate._d).format("YYYY-MM-DD");
  const EndDate = endDate && moment(endDate._d).format("YYYY-MM-DD");
  const _handleReport = () => {
    if (startDate !== null && endDate !== null) {
      props.history.push(`/report/?startDate=${StartDate}&endDate=${EndDate}`);
    } else {
      window.alert("Date Not Selected");
    }
  };
  useEffect(()=>{
    MenuInfoFetch({userId,token},(err,data)=>{
      setMenuData(data.payload);
    })
  },[]);
  console.log("menu data....",menuData);

  const SurrveyNameOptions = menuData.map((v, k) => ({
    value: v.survey_header_id,
    label: v.survey_name,
  }));
  
  const _handleSelectSurvey = (SurveyHeaderId, e) => {
    localStorage.setItem("SurveyHeaderId", e.value);
    setSurveyId(e.value);
    console.log("surveyheaderid",e.value);
  };
 
  
  const _handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const _handleFocusedInput =(focusedInput) => {setFocusedInput(focusedInput)}
  return (
    <ReportMenu
      startDate={startDate}
      endDate={endDate}
      SurrveyNameOptions={SurrveyNameOptions}
      focusedInput={focusedInput}
      surveyId={surveyId}
      _handleSelectSurvey={_handleSelectSurvey}
      _handleDatesChange={_handleDatesChange}
      _handleFocusedInput={_handleFocusedInput}
      _handleReport={_handleReport}
    />
  );
};
export default ReportMenuContainer;
