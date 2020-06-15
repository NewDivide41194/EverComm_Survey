import React, { useEffect, useState } from "react";
import Surveylist from "../component/Surveylist";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config";
import { SurveyListFetch } from "../../../api/FetchSurveyList";
const SurveylistContainer = (props) => {
  const [surveyList, setSurveyList] = useState([]);
  const [buildingList, setBuildingList] = useState([]);

  const userId = localStorage.getItem("userId");
  const SurveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");

  const _handleNewSurvey = () => {
    props.history.push(`/addBuilding`);
  };

  const handleCardClick = () => {
    const buildingId = localStorage.getItem("buildingId");
    props.history.push(`/question/${userId}/${SurveyHeaderId}/${buildingId}`);
  };

  useEffect(() => {
    SurveyListFetch(userId, SurveyHeaderId, token, (err, data) => {
      setSurveyList(data.payload.survey_list);
      setBuildingList(data.payload.new_survey_list);
    });
    // NewSurveyListFetch(userId, SurveyHeaderId, token, (err, data) => {
    //   setBuildingList(data.payload);
    // });
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

  var ReduceData = ["building_id", "building_name"];

  var NewSurvey = buildingList
    .filter(function (o1) {
      // filter out (!) items in result2
      return !surveyList.some(function (o2) {
        return o1.building_id === o2.building_id;
        // assumes unique id
      });
    })
    .map(function (o) {
      // use reduce to make objects with only the required properties
      // and map to apply this to the filtered array as a whole
      return ReduceData.reduce(function (newo, building_name) {
        newo[building_name] = o[building_name];
        return newo;
      }, {});
    });
  console.log("Filter=====>", NewSurvey);
  console.log("surveyList---->", surveyList);
  console.log("Building----->", buildingList);

  return (
    <div className="container">
      <div className="row justify-content-between py-3">
        <div
          className="col-sm-12 col-lg-9 col-md-8"
          style={{ color: Colors.PrimaryColor }}
        >
          <h2>{SurveyHeaderName}</h2>
        </div>
        <div className="col-sm-12 col-lg-3 col-md-4">
          <ESButton
            text={"+ Create New Survey"}
            onClick={_handleNewSurvey}
            small
          />
        </div>
      </div>
      {NewSurvey ? (
        <CollapseSurveyList
          id={"New"}
          SurveyData={NewSurvey}
          surveyName={"New Survey"}
          BgColor={Colors.PrimaryColor}
          TxtColor={"white"}
          HoverBgColor={Colors.skyBlue}
          handleCardClick={handleCardClick}
        />
      ) : null}
      {PendingSurvey ? (
        <CollapseSurveyList
          id={"Pending"}
          SurveyData={PendingSurvey}
          surveyName={"Pending Survey"}
          BgColor={Colors.MoonLight}
          TxtColor={Colors.PrimaryColor}
          HoverBgColor={Colors.PaleYellow}
          handleCardClick={handleCardClick}
        />
      ) : null}
      {CompletedSurvey ? (
        <CollapseSurveyList
          id={"Completed"}
          SurveyData={CompletedSurvey}
          surveyName={"Completed Survey"}
          BgColor={Colors.SparkGreen}
          TxtColor={"white"}
          HoverBgColor={Colors.PaleGreen}
          handleCardClick={handleCardClick}
        />
      ) : null}
    </div>
  );
};
export default SurveylistContainer;

const CollapseSurveyList = (props) => {
  const {
    id,
    SurveyData,
    handleCardClick,
    surveyName,
    BgColor,
    TxtColor,
    HoverBgColor,
  } = props;
  const [expend, setIsExpend] = useState(false);
  console.log("=====>",SurveyData);

  return (
    <div className="">
      <div
        className="w-100 text-left py-2"
        data-toggle="collapse"
        href={`#${id}`}
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={() => setIsExpend(!expend)}
        style={{
          borderBottom: `1px solid ${Colors.skyBlue}`,
          fontSize: "18px",
          color: `${Colors.PrimaryColor}`,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {surveyName}
        <i
          className={`fas fa-angle-double-${
            expend ? "up" : "down"
          } float-right pt-1`}
        ></i>
      </div>

      <div className="collapse" id={id}>
        {SurveyData.length !== 0 ? (
          SurveyData.map((v, k) => (
            <Surveylist
              buildingName={v.building_name}
              key={k}
              id={v.building_id}
              progress={
                v.answers !== undefined && v.answers === v.questions ? (
                  <i className="fa fa-check" id={v.building_id}>
                    {" "}
                    Completed
                  </i>
                ) : (
                  <i className="fa fa-edit" id={v.building_id}>
                    &nbsp;{v.answers ? v.answers : "0"} Answered
                  </i>
                )
              }
              BgColor={BgColor}
              TxtColor={TxtColor}
              HoverBgColor={HoverBgColor}
              handleCardClick={handleCardClick}
            />
          ))
        ) : (
          <div className="d-flex flex-row p-3 rounded my-2 text-danger bg-light">
            <i className="fas fa-exclamation-circle pt-1 px-2"></i>
            No Survey Data.
          </div>
        )}
      </div>
    </div>
  );
};
