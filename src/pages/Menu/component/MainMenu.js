import React from "react";

const MainMenu = props => {
  const { handleChoose, id } = props;

  const _handleMouseOver = () => {
    document.getElementById(id).className =
      "d-flex flex-row bg-dark text-light p-4 rounded justify-content-between my-3";
  };
  const _handleMouseLeave = () => {
    document.getElementById(id).className =
      "d-flex flex-row bg-light text-dark p-4 rounded justify-content-between my-3";
  };
  return (
    <div
      id={id}
      className="d-flex flex-row bg-light text-dark p-4 rounded justify-content-between my-3"
      style={{ cursor: "pointer", transition: ".5s" }}
      onMouseOver={_handleMouseOver}
      onMouseLeave={_handleMouseLeave}
      onClick={() => handleChoose()}
    >
      <div className="flex-column" >
        <div style={{ fontSize: 25 }}>{"Chiller Plant Survey"}</div>

        <div className="col-12">
          <div className="row">
            <i className="fa fa-check-circle pr-2 pt-1 text-success"></i>
            <div>{"Completed"}</div>
          </div>
        </div>
      </div>
      <div
        className="flex-column align-self-center"
        onClick={() => handleChoose()}
      >
        <div>
          <i className="col-6 fa fa-arrow-circle-right fa-2x pt-1"></i>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
