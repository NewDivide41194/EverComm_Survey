import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import * as Colors from "../../../config/Color.config";

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
        position: 'relative',
        transform: "translateY(150px)",
      }}
    >
      <div className="justify-content-center d-flex flex-fill flex-wrap flex-row">
        <MenuCard
          onClick={_handleSurveyClick}
          header={"Survey Questions"}
          text={"Answer survey questions for each building."}
          id={"Survey"}
        />
        <MenuCard
          onClick={_handleReportClick}
          header={"Survey Reporting"}
          text={"View reports for Answered questions."}
          id={"Report"}
        />
      </div>
    </div>
    </div>
  );
};

const MenuCard = (props) => {

  const _handleMouseOver = (e) => {
    document.getElementById(props.id).className = "p-2 card text-light bg-dark";
  };
  const _handleMouseLeave = (e) => {
    document.getElementById(props.id).className = "p-2 card text-light";
  };
  return (
    <div className="p-4">
      <div
        id={props.id}
        className="p-2 card text-light"
        style={{
          minWidth: "180px",
          width: "300px",
          minHeight: "200px",
          borderRadius: "15px",
          background: Colors.PrimaryColor,
          cursor: "pointer",
        }}
        onClick={props.onClick}
        onMouseEnter={(e) => _handleMouseOver(e)}
        onMouseLeave={(e) => _handleMouseLeave(e)}
      >
        {
          <div className="py-1 card-header">
            <h4>{props.header}</h4>
          </div>
        }
        <div className="card-body">
          {<p className="card-text">{props.text}</p>}
        </div>
      </div>
    </div>
  );
};
export default withRouter(MainMenu);
