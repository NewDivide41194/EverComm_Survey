import React, { useState } from "react";
import { ESButton } from "../../../tools/ES_Button";
import { withRouter } from "react-router-dom";
import PostedIcon from "../../../assets/images/HMT.gif";
import { buildingId, surveyHeaderId, userId } from "../../../assets/userData";

const FinalPage = (props) => {
  const _handleMenu = () => {
    props.history.push(`/surveyMenu/${userId}`);
  };

  const _handleReview = () => {
    props.history.push(`/question/${userId}/${surveyHeaderId}/${buildingId}`);
  };
  return (
    <div className="container py-4 text-center text-success">
      <h3>*Your Answers are Posted!</h3>
      <img style={{ width: "50%" }} src={PostedIcon} alt="Post" />

      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-12 py-2">
          <ESButton
            text={"Review Survey"}
            onClick={() => _handleReview()}
            leftIcon={<i className="fa fa-caret-left pr-2" />}
          />
        </div>
        <div className="col-md-3 col-sm-12 py-2">
          <ESButton
            text={"Survey Menu"}
            onClick={() => _handleMenu()}
            rightIcon={<i className="fa fa-caret-right pl-2" />}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(FinalPage);
