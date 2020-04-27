import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config";

const MainMenu = (props) => {
  const { handleChoose, id, header, amountOfSurvey, handleReset } = props;

  const _handleMouseOver = () => {
    document.getElementById(id).className =
      "d-flex flex-row text-light bg-dark p-3 rounded justify-content-between my-3";
  };
  const _handleMouseLeave = () => {
    document.getElementById(id).className =
      "d-flex flex-row bg-light text-dark p-3 rounded justify-content-between my-3";
  };

  return (
    <div
      id={id}
      className="d-flex flex-row bg-light text-dark p-3 rounded justify-content-between my-3"
      style={{ cursor: "pointer", transition: ".5s" }}
      onMouseOver={_handleMouseOver}
      onMouseLeave={_handleMouseLeave}
    >
      <div
        className="flex-column flex-fill "
        id={id}
        onClick={(e) => handleChoose(e,header)}
      >
        <div id={id} style={{ fontSize: 25 }}>
          {header}
        </div>

        <div className="col-12" id={id}>
          <div className="row" id={id}>
            {amountOfSurvey === "Completed" ? (
              <i
                id={id}
                className="fa fa-check-circle pr-2 pt-1 text-success"
              ></i>
            ) : (
              <i
                id={id}
                className="fa fa-edit  pr-2 pt-1 text-primary font-weight-bold"
              ></i>
            )}
            <div id={id}>{amountOfSurvey} {amountOfSurvey<=1?"Survey":"Surveys"} Answered</div>
          </div>
        </div>
      </div>

      {/* <div className='align-self-center'>
          <ESButton id={id} small text={"Reset Answers"} onClick={()=>handleReset(id)}/>
        </div> */}
    </div>
  );
};

export default MainMenu;
