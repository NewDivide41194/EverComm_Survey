import React from "react";

const ESButtonGroup = () => {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary active">
        <input
          type="radio"
          name="options"
          id="option1"
        />
          <i className="fa fa-edit"/>
      </label>
      <label className="btn btn-secondary">
        <input type="radio" name="options" id="option2" />
          <i className="fa fa-trash"/>
      </label>
    </div>
  );
};

export default ESButtonGroup;
