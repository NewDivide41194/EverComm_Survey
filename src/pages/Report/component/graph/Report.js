import React from "react";
import * as Colors from "../../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../../helper/reportHelper";
import PieChart from "../charts/Piechart";
import Bar from "../charts/Barchart";
import Logo from "../../../../assets/images/Logo.png";
import withMedia from "react-media-query-hoc/dist/with-media";
import { StackedBar } from "../charts/StackedBar";
import RadialChart from "../charts/radialbarchart";
import { ESIcon } from "../../../../tools/ES_Icon";
import ProgressBar from "../charts/progressBar";
// import Sunburst from "../charts/Sunburst";
const Report = (props) => {
  const {
    reportData,
    startDate,
    endDate,
    viewType,
    typeAndArea,
    media,
  } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;

  const typesOfBuildings = reportData.map((v, k) =>
    v.survey_sections[0].questions[0].option_choices.map(
      (v, k) => v.option_choice_name
    )
  )[0];

  const ChartData = (question_index, type) =>
    reportData.map((v, k) =>
      v.survey_sections[0].questions
        .map((v1, k1) => v1.option_choices)
        [question_index].map((v2, k2) =>
          type === "pie"
            ? {
                id: v2.option_choice_name,
                label: v2.option_choice_name,
                value: v2.totalAns === null ? 0 : v2.totalAns,
              }
            : type === "radial"
            ? {
                name: v2.option_choice_name,
                uv: v2.totalAns,
                fill: Colors.ChartTheme1[k2],
              }
            : type === "stackedBar"
            ? {
                Area: v2.option_choice_name,
                "Office Building": v2.totalAns,
                Hotel: v2.totalAns,
                ShoppingMall: v2.totalAns,
                "Residential Building": v2.totalAns,
                Factory: 158,
              }
            : {
                name: v2.option_choice_name,
                data: v2.totalAns === null ? 0 : v2.totalAns,
                percentage:Percentage(v2.totalAns,TotalBuilding)
              }
        )
    )[0];
    console.log("RP------>",reportData);

  const below2000 =
    typeAndArea && typeAndArea.filter((v) => v.option_choice_id === 6);
  const to5000 =
    typeAndArea && typeAndArea.filter((v) => v.option_choice_id === 7);
  const to10000 =
    typeAndArea && typeAndArea.filter((v) => v.option_choice_id === 8);
  const to15000 =
    typeAndArea && typeAndArea.filter((v) => v.option_choice_id === 9);
  const above =
    typeAndArea && typeAndArea.filter((v) => v.option_choice_id === 10);
console.log(">>>>>>",typeAndArea);

    const to5000OptionCount = (type) =>
    to5000.length &&
    to5000.filter((v) => v.building_type === type)[0].optionCount;

    const belowOptionCount = (type) =>
    below2000.length &&
    below2000.filter((v) => v.building_type === type)[0].optionCount;

    const to10000OptionCount = (type) =>
    to10000.length &&
    to10000.filter((v) => v.building_type === type)[0].optionCount;

    const to15000OptionCount = (type) =>
    to15000.length &&
    to15000.filter((v) => v.building_type === type)[0].optionCount;

    const above15000OptionCount = (type) =>
    above.length &&
    above.filter((v) => v.building_type === type)[0].optionCount;
    
  function getUnique(arr, index) {
    const unique = arr
      .map((e) => e[index])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  const modifiedTypeData = getUnique(typeAndArea, "option_choice_id").map(
    (v, k) => {
      return {
        Area: v.option_choice_name,
        "Office Building":
        //   v.option_choice_name === "below 2000"
        //     ? belowOptionCount("Office Building")
            //  v.option_choice_name === "2000-5000"
            // ? to5000OptionCount("Office Building")
             v.option_choice_name === "5000 - 10000"
            ? to10000OptionCount("Office Building")
             :v.option_choice_name === "Above 15000"
            ? above15000OptionCount("Office Building")
            : 0,
        Factory:
          v.option_choice_name === "below 2000"
            ? belowOptionCount("Factory")
             :v.option_choice_name === "2000-5000"
            ? to5000OptionCount("Factory")
            : v.option_choice_name === "5000 - 10000"
            ? to10000OptionCount("Factory")
             :v.option_choice_name === "Above 15000"
            ? above15000OptionCount("Factory")
            : 0,
            ShoppingMall:
        v.option_choice_name === "10000 - 15000"
          ? to15000OptionCount("Shopping Mall")
          : 0,
          Hotel:
        v.option_choice_name === "below 2000"
          ? belowOptionCount("Hotel")
          : 0,
          "Residential Building":v.option_choice_name === "below 2000"
          ? belowOptionCount("Residential Building")
          : 0,
      };
    }
  );
  

  console.log("======>", ChartData(0));

  return (
    <div
      className="container shadow"
      style={{
        width: "8.27in",
        height: "15.66in",
        position: "relative",
        // boxShadow:"0px 10 4px 0"
      }}
    >
      <div className="row py-3 justify-content-between border-bottom">
        <div className="pl-4" style={{ width: "50%" }}>
          <img
            src={Logo}
            style={{
              height: "30px",
            }}
            alt="logo"
          />
        </div>
        <div
          className="pr-4 pt-2"
          style={{
            fontSize: media.mobile ? "10px" : "15px",
            color: Colors.SecondaryColor,
          }}
        >
          COOLING SYSTEM
        </div>
      </div>
      <div
        className="py-2 px-4 row border-bottom pdfBg"
        style={{ background: Colors.PrimaryColor }}
      >
        <span
          style={{
            color: "#fafafa",
            fontSize: media.mobile ? "18px" : "20px",
          }}
        >
          Basic Information
        </span>
      </div>
      {reportData && reportData.length ? (
        reportData.map((v, k) => (
          <div className="mt-4 px-4" key={k}>
            <div
              className="justify-contents-center row"
              style={{ minWidth: 150 }}
            >
              <div className="w-50">
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Type of Building
                </h2>
                <ProgressBar data={ChartData(0)}/>
              </div>
              <div className="w-50">
                <ESIcon
                  size={"30px"}
                  Icon={
                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                  }
                />
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Age of buildings
                </h2>
                <RadialChart data={ChartData(2, "radial")} />
              </div>
            </div>
            <div className="row pt-5 pb-0 mb-0">
              <div
                className="p-3"
                style={{
                  height: window.innerWidth <= 980 ? 300 : 310,
                  width: "50%",
                }}
              >
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Building Management System (BMS)
                </h2>
                {/* <Sunburst/> */}
              </div>
            </div>
            <div
              className="w-100"
              style={{
                height: window.innerWidth <= 980 ? 300 : 310,
              }}
            >
              <ESIcon
                size={"30px"}
                Icon={<i class="pt-1 fas fa-expand-arrows-alt"></i>}
              />

              <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                Area of Building
              </h2>

              <div style={{ height: 400 }}>
                <StackedBar data={modifiedTypeData} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 className="mt-5 text-center text-warning">No Data!</h3>
      )}
      <div
        className="row justify-content-center py-2 text-light"
        style={{
          background: Colors.PrimaryColor,
          position: "absolute",
          bottom: 0,
          width: "100%",
          fontSize: 12,
        }}
      >
        Page-1
      </div>
    </div>
  );
};
export default withMedia(Report);
