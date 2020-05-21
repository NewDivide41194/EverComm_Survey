import React from "react";
import { withRouter } from "react-router-dom";

const MainMenu = (props) => {
  const _handleReportClick = () => {
    props.history.push(`/reportMenu`);
  };
  const _handleSurveyClick = () => {
    props.history.push(`/surveyMenu`);
  };
  return (
    <div
      style={{
        margin: "0",
        top: "40%",
        transform: "translateY(150px)",
      }}
    >
      <div className="justify-content-center card-deck">
        <div className="d-flex col-md-3 justify-content-center flex-row ">
          <div
            className="p-2 card text-light text-left"
            style={{
              minWidth: "180px",
              width: "300px",
              minHeight: "200px",
              backgroundColor: "#276BB9",
              borderRadius: "15px",
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
        <div className="d-flex justify-content-center flex-wrap col-md-3">
          <div
            className="flex-wrap p-2 card text-light text-left"
            style={{
              minWidth: "180px",
              width: "300px",
              height: "200px",
              minHeight: "200px",
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
