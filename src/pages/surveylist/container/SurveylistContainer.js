import React, { useEffect, useState } from "react";
import Surveylist from "../component/Surveylist";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config";
import { SurveyListFetch } from "../../../api/FetchSurveyList";
const SurveylistContainer = (props) => {
  const [surveyList, setSurveyList] = useState([]);
  const buildingId = localStorage.getItem("buildingId");
  const userId = localStorage.getItem("userId");
  const SurveyHeaderId = localStorage.getItem("SurveyHeaderId");

  const _handleNewSurvey = () => {
    props.history.push(`/building`);
    // window.location.reload();
  };

  const handleCardClick = () => {
    props.history.push(`/question/${userId}/${SurveyHeaderId}/${buildingId}`);
  };
  useEffect(() => {
    SurveyListFetch(userId, SurveyHeaderId, (err, data) => {
      setSurveyList(data.payload);
    });
  }, []);
  const BuildingSurveyData =
    surveyList.length &&
    surveyList.filter((d) => d.survey_header_id === JSON.parse(SurveyHeaderId));

  const PendingSurvey =
    BuildingSurveyData.length &&
    BuildingSurveyData.filter((v, k) => v.answers !== v.questions);

  const CompletedSurvey =
    BuildingSurveyData.length &&
    BuildingSurveyData.filter((v, k) => v.answers === v.questions);
  const SurveyHeaderName = localStorage.getItem("SurveyHeaderName");
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between flex-fill py-3 ">
        <div
          className="font-weight-bold"
          style={{ color: Colors.PrimaryColor }}
        >
          <h2>{SurveyHeaderName}</h2>
        </div>
        <div>
          <ESButton text={"+ Create New Survey"} onClick={_handleNewSurvey} small />
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
      {PendingSurvey
        ? PendingSurvey.map((v, k) => (
            <Surveylist
              buildingName={v.building_name}
              key={k}
              id={v.building_id}
              progress={
                <i className="fa fa-edit" id={v.building_id}>
                  &nbsp;{v.answers} of {v.questions} Answered
                </i>
              }
              BgColor={Colors.PaleYellow}
              TxtColor={Colors.PrimaryColor}
              HoverBgColor={Colors.MoonLight}
              HoverTxtColor={Colors.PrimaryColor}
              handleCardClick={handleCardClick}
            />
          ))
        : null}
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
      {CompletedSurvey
        ? CompletedSurvey.map((v, k) => (
            <Surveylist
              buildingName={v.building_name}
              key={k}
              id={v.building_id}
              progress={
                <i className="fa fa-check-circle" id={v.building_id}>
                  {" "}
                  Completed
                </i>
              }
              BgColor={Colors.skyBlue}
              TxtColor={"white"}
              HoverBgColor={Colors.PrimaryColor}
              HoverTxtColor={Colors.PaleYellow}
              handleCardClick={handleCardClick}
            />
          ))
        : null}
    </div>
  );
};
export default SurveylistContainer;

// const SurveyList = [
//   {
//     Survey_Header_Id: 1,
//     Building_Id: 1,
//     Building_Name: "Mandalay convention Centre",
//     questions: 42,
//     answers: 4,
//   },
//   {
//     Survey_Header_Id: 1,
//     Building_Id: 12,
//     Building_Name: "Man Myanmar Palaza",
//     questions: 42,
//     answers: 4,
//   },
//   {
//     Survey_Header_Id: 1,
//     Building_Id: 13,
//     Building_Name: "Man Myanmar Palaza",
//     questions: 42,
//     answers: 42,
//   },
// ];
