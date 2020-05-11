import React, { useState } from "react";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config"
import { withRouter } from "react-router-dom";
import PostedIcon from "../../../assets/images/HMT.gif";
import { PickerWithCustomePlaceholder } from "../../../tools/ES_DateRangePicker";
import moment from "moment";

const ReportMenu = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const buildingId = localStorage.getItem("buildingId");
  const userId = localStorage.getItem("userId");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");

  const _handleMenu = () => {
    props.history.push(`/menu/${userId}`);
  };

  const _handleReview = () => {
    props.history.push(`/question/${userId}/${surveyHeaderId}/${buildingId}`);
  };

  const _ViewReport = () => {
    if (startDate !== null && endDate !== null) {
      props.history.push(`/report/?startDate=${startDate}&endDate=${endDate}`);
    } else {
      window.alert("Date Not Selected");
    }
  };

  const onDateChange = (startdate, enddate) => {
    setStartDate(moment(startdate).format("YYYY-MM-DD"));
    setEndDate(moment(enddate).format("YYYY-MM-DD"));
  };

  console.log(startDate, endDate);

  return (
    <div className="container py-4 text-center text-success">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-12 py-2">
          <ESButton
            text={"Review Survey"}
            onClick={() => _handleReview()}
            small
          />
        </div>
        <div className="col-md-4 col-sm-12 py-2">
          <ESButton text={"Back to Menu"} onClick={() => _handleMenu()} small />
        </div>
        <PickerWithCustomePlaceholder
          onDateChange={onDateChange}
          viewReport={_ViewReport}
        />
      </div>
      <img style={{ width: "50%" }} src={PostedIcon} alt="Post" />
      <h3>*Your Answers are Posted!</h3>

    </div>
  );
};

export default withRouter(ReportMenu);
