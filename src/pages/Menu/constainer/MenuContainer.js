import React, { useState, useEffect } from "react";
import MainMenu from "../component/MainMenu";
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import { TrancateAns } from "../../../api/FetchTrancate";

const MenuContainer = props => {
  const [menuData, setMenuData] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const userId = userData[0].login_user_id;

  const _handleChoose = (e,header )=> {
    localStorage.setItem("SurveyHeaderId", e.target.id);
    localStorage.setItem("SurveyHeaderName", header);
    props.history.push("/surveylist");
  };

  useEffect(() => {
    MenuInfoFetch({ userId }, (err, data) => {
      setMenuData(data.payload);
    });
  }, []);
  const _handleReset = survey_header_id => {

    TrancateAns({ userId, survey_header_id }, (err, data) => {
      window.location.reload()
    });
  };
console.log("Menu----->",menuData);

  return (
    <div className="container justify-content-center">
      <div
         className="w-100"
         style={{
           margin: 0,
           position: "relative",
         
         }}
      >
        <h2>{"Select Survey Name"}</h2>
        {menuData.map((v, k) => (
          <MainMenu
            key={k}
            handleChoose={_handleChoose}
            header={v.survey_name}
            handleReset={_handleReset}
            amountOfSurvey={v.amount_of_survey}
            id={v.survey_header_id}
          />
        ))}
      </div>
   </div>
  );
};

export default MenuContainer;