import React,{useState} from 'react';
import { ESButton } from "../../../tools/ES_Button";
import {ESDropDown} from "../../../tools/ES_DropDown";
import { withRouter } from "react-router-dom";
import * as Colors from "../../../config/Color.config";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

const ReportMenu=(props)=>{

  const [startDate,setStartDate]=useState(null);
  const [endDate,setEndDate]=useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const  _handleReport = () => {
    if (startDate !== null && endDate !== null) {
      props.history.push(`/report/?startDate=${startDate}&endDate=${endDate}`);
    } else {
      window.alert("Date Not Selected");
    }
  };

  const handleDatesChange=({ startDate, endDate })=>{
    setStartDate(moment(startDate).format("YYYY-MM-DD"));
    setEndDate(moment(endDate).format("YYYY-MM-DD"));
  }
  console.log(startDate,endDate);
  
  return(
    <div className="container text-center" style={{marginTop: '20vh'}}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h4 style={{color:Colors.PrimaryColor}}>Select Survey Name for Report</h4>
          <div className="pt-3 container col-lg-8 col-md-6">
            <ESDropDown/> 
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h4 style={{color:Colors.PrimaryColor}}>Select Date Range (optional)</h4>
          <div className="container col-lg-8 col-md-6 pt-3">
            < DateRangePicker
              numberOfMonths={1}
              startDate={startDate}
              startDateId="tata-start-date"
              endDate={endDate}
              endDateId="tata-end-date"
              focusedInput={focusedInput}
              onFocusChange={focusedInput => setFocusedInput(focusedInput)}
              onDatesChange={handleDatesChange}
            />
        </div>
        </div>
        
      </div>
      <div className="row justify-content-center py-5">
        <div className="col-md-4 col-lg-3 col-sm-12 ">
          <ESButton text={"View report"} onClick={() => _handleReport()} 
            rightIcon={<i className="fas fa-arrow-circle-right pl-5" style={{color:Colors.SecondaryColor, marginTop: "-18px",
            fontSize: "20px"}}></i> }
           />
        </div> 
      </div>
    </div>
  )
}
export default withRouter(ReportMenu);