import React, { useState, useEffect } from "react";
import MainMenu from "../component/MainMenu";
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import { TrancateAns } from "../../../api/FetchTrancate";
const MenuContainer = props => {
  const [menuData, setMenuData] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const _handleChoose = e => {
    console.log("id----->", e.target.id);

    props.history.push("/surveylist");
    localStorage.setItem("SurveyHeaderId", e.target.id);
  };
  const userId = userData[0].login_user_id;

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

  return (
    <div className="row justify-content-center">
      <div
        className="container"
        style={{
          margin: 0,
          position: "absolute",
          top: "50%",
          transform: "translateY(-190px)"
        }}
      >
        <h2>{"Select Survey Name"}</h2>
        {menuData.map((v, k) => (
          <MainMenu
            key={k}
            handleChoose={_handleChoose}
            header={v.survey_header_name}
            handleReset={_handleReset}
            progress={
              v.questions === v.answers
                ? "Completed"
                : `${v.answers} of ${v.questions} Answered`
            }
            id={v.survey_header_id}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
