import React from "react";
import * as Color from "../config/Color.config";
import withMedia from "react-media-query-hoc/dist/with-media";

const ESProgress = props => {
  const { media } = props;
  return (
    <div
      className='progress'
      style={{ height: "6px", borderRadius: "0px" }}
    >
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="40"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: "75%", background: Color.PrimaryColor }}
      ></div>
    </div>
  );
};

export default withMedia(ESProgress);
