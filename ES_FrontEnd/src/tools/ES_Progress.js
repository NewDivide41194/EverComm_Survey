import React from "react";
import * as Color from "../config/Color.config";
import withMedia from "react-media-query-hoc/dist/with-media";

const ESProgress = props => {
  const { Percent } = props;
  return (
    <div className="progress" style={{ height: "6px", borderRadius: "0px"}}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={Percent}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          width: `${Percent}%`,
          borderRadius:"0 20px 20px 0",
          background: Color.PrimaryColor,
          transition: "width .5s"
        }}
      ></div>
    </div>
  );
};

export default withMedia(ESProgress);
