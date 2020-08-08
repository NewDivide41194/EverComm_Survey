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
      className="w-100 container fullHeight"
      style={{
        // marginTop:0,
        marginTop: "8rem",
        // position: "absolute",
        // transform: "translateY(-50%)",
      }}
    >
      <div className="justify-content-center d-flex flex-row flex-fill flex-wrap">
        <MenuCard
          onClick={_handleSurveyClick}
          header={"Survey Questions"}
          text={"Answer survey questions for each building."}
          id={"Survey"}
          icon={"fas fa-tasks fa-2x"}
        />
        <MenuCard
          onClick={_handleReportClick}
          header={"Reporting"}
          text={"View reports for Answered questions."}
          id={"Report"}
          icon={"far fa-chart-bar fa-2x"}
        />
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
        <div className="py-1 card-header d-flex flex-row py-2" style={{borderBottom:`1px solid rgba(255,255,255,.3)`}}>
        <i className={`${props.icon} pr-2 text-light`}></i><h4>{props.header}</h4>
        </div>

        <div className="card-body">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};
export default withRouter(MainMenu);
