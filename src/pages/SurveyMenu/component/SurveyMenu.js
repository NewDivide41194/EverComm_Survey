import React,{ useState } from "react";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config";

const SurveyMenu = (props) => {
  const { handleChoose, id, header, amountOfSurvey, handleReset, countryCount } = props;
  const [isHover,setIsHover]=useState(false);

  const _handleMouseOver = () => {
    setIsHover(true);
    document.getElementById(id).className =
      "d-flex flex-row text-light bg-dark p-3 rounded justify-content-between my-3"; 
  };
  const _handleMouseLeave = () => {
    setIsHover(false);
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
        <div className="d-flex flex-row flex-fill" id={id} style={{ fontSize: 25 }}>
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
            <div id={id}>{countryCount} {countryCount<=1?"Organization":"Organizations"}</div>
          </div>
          {
            isHover&&
              <i id={id} className="fa fa-arrow-circle-right" style={{color:Colors.SecondaryColor,float: 'right', marginTop: "-50px",
              fontSize: "40px",}}></i> 
        } 
        </div>
      </div>

      {/* <div className='align-self-center'>
          <ESButton id={id} small text={"Reset Answers"} onClick={()=>handleReset(id)}/>
        </div> */}
    </div>
  );
};

export default SurveyMenu;
