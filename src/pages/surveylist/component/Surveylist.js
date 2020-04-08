import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { withRouter } from "react-router-dom";
import withMedia from "react-media-query-hoc/dist/with-media";

const Surveylist = (props) => {
  const {
    progress,
    buildingName,
    BgColor,
    TxtColor,
    HoverBgColor,
    HoverTxtColor,
    id,
  } = props;
  const _handleMouseOver = () => {
    const Card = document.getElementById(id);
    Card.className =
      "d-flex flex-row p-3 rounded justify-content-between my-2 shadow-sm";
    Card.style.background = HoverBgColor;
    Card.style.color = HoverTxtColor;
    
    console.log(id);
  };
  const _handleMouseLeave = () => {
    const Card = document.getElementById(id);

    Card.className = "d-flex flex-row p-3 rounded justify-content-between my-2";
    Card.style.background = BgColor;
    Card.style.color = TxtColor;
  };

  return (
    <div
      className="d-flex flex-row p-3 rounded justify-content-between my-2"
      id={id}
      style={{
        background: BgColor,
        color: TxtColor,
        cursor:"pointer"
      }}
      onMouseOver={_handleMouseOver}
      onMouseLeave={_handleMouseLeave}
    >
      <span
        style={{
          fontSize: "22px",
          // fontWeight:"bold",
        }}
      >
        {buildingName}{" "}
      </span>

      <span> {progress}</span>
    </div>
  );
};
export default withRouter(withMedia(Surveylist));
