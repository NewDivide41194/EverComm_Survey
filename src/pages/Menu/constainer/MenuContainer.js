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
            // progress={
            //   v.questions === v.answers
            //     ? "Completed"
            //     : `${v.answers} of ${v.questions} Answered`
            // }
            amountOfSurvey={v.amount_of_survey}
            id={v.survey_header_id}
          />
        ))}
      </div>
   </div>
  );
};

export default MenuContainer;

const Menu=[
  {
     "survey_header_id":1,
     "survey_header_name":"Cooling System",
     "amount_of_survey":10
  },
  {
    "survey_header_id":2,
    "survey_header_name":"Basic Information",
    "amount_of_survey":40
 },
 {
  "survey_header_id":3,
  "survey_header_name":"Carbon Emission",
  "amount_of_survey":10
},
{
  "survey_header_id":11,
  "survey_header_name":"Cooling System",
  "amount_of_survey":10
},
{
 "survey_header_id":21,
 "survey_header_name":"Basic Information",
 "amount_of_survey":40
},
{
"survey_header_id":31,
"survey_header_name":"Carbon Emission",
"amount_of_survey":10
},
{
  "survey_header_id":31,
  "survey_header_name":"Cooling System",
  "amount_of_survey":10
},
{
 "survey_header_id":23,
 "survey_header_name":"Basic Information",
 "amount_of_survey":40
},
{
"survey_header_id":33,
"survey_header_name":"Carbon Emission",
"amount_of_survey":10
}
]