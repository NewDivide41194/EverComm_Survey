import React, { useState, useEffect } from "react";
import MainMenu from "../component/MainMenu";

const MenuContainer = props => {

  const _handleChoose = () => {
    props.history.push("/question");
  };
  return (
    <div className="container">
        <h2>{'Select Survey Name'}</h2>
      <MainMenu handleChoose={_handleChoose} id={"1"} />
      <MainMenu handleChoose={_handleChoose} id={"2"}/>
      <MainMenu handleChoose={_handleChoose} id={"3"}/>
      <MainMenu handleChoose={_handleChoose} id={"4"}/>

    </div>
  );
};

export default MenuContainer;
