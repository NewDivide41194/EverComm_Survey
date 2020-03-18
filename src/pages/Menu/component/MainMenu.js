import React from "react";

const MainMenu = props => {
  const { handleChoose, id, header, progress } = props;

  const _handleMouseOver = () => {
    // document.getElementsByClassName(`arrow${id}`).className =
    //   `arrow${id} col-6 fa fa-arrow-circle-right fa-2x pt-1`;
    document.getElementById(id).className =
      "d-flex flex-row bg-dark text-light p-3 rounded justify-content-between my-3";
  };
  const _handleMouseLeave = () => {
    // document.getElementsByClassName(`arrow${id}`).className = `arrow${id}`;

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
      onClick={e => handleChoose(e)}
    >
      <div className="flex-column" id={id}>
        <div id={id} style={{ fontSize: 25 }}>
          {header}
        </div>

        <div className="col-12" id={id}>
          <div className="row" id={id}>
            {progress === "Completed" ? (
              <i  id={id} className="fa fa-check-circle pr-2 pt-1 text-success"></i>
            ) : (
              <i  id={id} className="fa fa-edit  pr-2 pt-1 text-primary font-weight-bold"></i>
            )}
            <div id={id}>{progress}</div>
          </div>
        </div>
      </div>
      {/* <div className="flex-column align-self-center">
          <i className={`arrow${id}`} id={id}></i>
      </div> */}
    </div>
  );
};

export default MainMenu;
