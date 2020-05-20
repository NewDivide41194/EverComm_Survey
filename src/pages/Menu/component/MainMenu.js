import React from "react";
import { withRouter } from "react-router-dom";

const MainMenu = (props) => {
  const _handleReportClick = () => {
    props.history.push(`/reportMenu`);
  };
  const _handleSurveyClick=()=>{
    props.history.push(`/surveyMenu`)
  }
  return (
    <div
      style={{
        margin: 0,
        position: "",
        top: "50%",
        transform: "translateY(190px)",
      }}
    >
      <div className="d-flex flex-row justify-content-center card-deck">
        <div className="d-flex col-md-4 align-item-center">
          <div
            className="p-2 card text-light text-left"
            style={{
              maxwidth: "18rem",
              width: "40%",
              backgroundColor: "#276BB9",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={_handleSurveyClick}

          >
            <div className="py-1 card-header border-light">
              <h4>Survey Questions</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                Answer survey questions for each building.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex col-md-4 align-item-center">
          <div
            className="p-2 card text-light text-left"
            style={{
              maxwidth: "18rem",
              width: "40%",
              backgroundColor: "#276BB9",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={_handleReportClick}
          >
            <div className="py-1 card-header border-light">
              <h4>Reporting</h4>
            </div>
            <div className="card-body">
              <p className="card-text">View reports for Answered questions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(MainMenu);
