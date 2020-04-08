import React from "react";
import Surveylist from "../component/Surveylist";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config";
const SurveylistContainer = (props) => {
  const _handleSurvey = () => {
    props.history.push("/building");
    window.location.reload();
  };
  const CompletedSurvey = SurveyList.filter(
    (v, k) => v.answers === v.questions
  );
  const PendingSurvey = SurveyList.filter((v, k) => v.answers !== v.questions);

  console.log(CompletedSurvey);

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between flex-fill py-3 ">
        <div
          className="font-weight-bold"
          style={{ color: Colors.PrimaryColor }}
        >
          <h2>{"Cooling System Survey List"}</h2>
        </div>
        <div>
          <ESButton text={"Create Survey"} onClick={_handleSurvey} small />
        </div>
      </div>
      <div
        style={{
          borderBottom: `1px solid ${Colors.skyBlue}`,
          fontSize: "18px",
          color: `${Colors.PrimaryColor}`,
          fontWeight: "bold",
        }}
        className="py-2"
      >
        Pending Survey
      </div>
      {PendingSurvey.map((v, k) => (
        <Surveylist
          buildingName={v.Building_Name}
          key={k}
          id={v.Building_Id}
          progress={
            <i className="fa fa-edit">
              &nbsp;{v.answers} of {v.questions} Answered
            </i>
          }
          BgColor={Colors.PaleYellow}
          TxtColor={Colors.PrimaryColor}
          HoverBgColor={Colors.MoonLight}
          HoverTxtColor={Colors.PrimaryColor}
        />
      ))}
      <div
        style={{
          borderBottom: `1px solid ${Colors.skyBlue}`,
          fontSize: "18px",
          color: `${Colors.PrimaryColor}`,
          fontWeight: "bold",
        }}
        className="py-2"
      >
        Completed Survey
      </div>
      {CompletedSurvey.map((v, k) => (
        <Surveylist
          buildingName={v.Building_Name}
          key={k}
          id={v.Building_Id}
          progress={<i className="fa fa-check-circle"> Completed</i>}
          BgColor={Colors.skyBlue}
          TxtColor={"white"}
          HoverBgColor={Colors.PrimaryColor}
          HoverTxtColor={Colors.PaleYellow}
        />
      ))}
    </div>
  );
};
export default SurveylistContainer;

const SurveyList = [
  {
    Survey_Header_Id: 1,
    Building_Id: 1,
    Building_Name: "Mandalay convention Centre",
    questions: 42,
    answers: 4,
  },
  {
    Survey_Header_Id: 1,
    Building_Id: 12,
    Building_Name: "Man Myanmar Palaza",
    questions: 42,
    answers: 4,
  },
  {
    Survey_Header_Id: 1,
    Building_Id: 13,
    Building_Name: "Man Myanmar Palaza",
    questions: 42,
    answers: 42,
  },
];
