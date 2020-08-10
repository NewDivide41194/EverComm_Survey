import React, { useEffect, useState } from "react";
import Surveylist from "../component/Surveylist";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config";
import { SurveyListFetch } from "../../../api/FetchSurveyList";
import { Building_Type } from "../../../api/url";

const SurveylistContainer = (props) => {
  const [surveyList, setSurveyList] = useState([]);
  const [buildingList, setBuildingList] = useState([]);
  const [buildingType, setBuildingType]=useState(null);
  const userId = localStorage.getItem("userId");
  const [expend,setExpend]=useState(false)
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

  const handleExpend=() => setExpend(!expend)
  const BuildingSurveyData =
    surveyList.length &&
    surveyList.filter((d) => d.survey_header_id === JSON.parse(SurveyHeaderId));

  const PendingSurvey =
    BuildingSurveyData.length &&
    BuildingSurveyData.filter((v, k) => v.answers !== v.total_question_count);

  const CompletedSurvey =
    BuildingSurveyData.length &&
    BuildingSurveyData.filter((v, k) => v.answers === v.total_question_count);
  const SurveyHeaderName = localStorage.getItem("SurveyHeaderName");

  var ReduceData = ["building_id", "building_name","building_type","building_type_id"];

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

  return (
    // <div className={`${expend?'':'fullHeight'} container`}>
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
          HoverBgColor={Colors.purple}
          handleCardClick={handleCardClick}
          handleExpend={handleExpend}
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
          handleExpend={handleExpend}
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
          handleExpend={handleExpend}
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
    handleExpend,
    expend
  } = props;
console.log(SurveyData);
  return (
    <div className="">
      <div
        className="w-100 text-left py-2"
        data-toggle="collapse"
        href={`#${id}`}
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={handleExpend}
        style={{
          borderBottom: `1px solid ${Colors.purple}`,
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
              buildingType={v.building_type}
              bTypeId={v.building_type_id}
              key={k}
              id={v.building_id}
              progress={
                v.answers !== undefined && v.answers === v.total_question_count ? (
                  <i className="fa fa-check" id={v.building_id}>
                    {" "}
                    Completed
                  </i>
                ) : (
                  <i className="fa fa-edit" id={v.building_id}>
                    &nbsp;{v.answers ? v.answers : "0"} of {v.total_question_count} Answered
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
