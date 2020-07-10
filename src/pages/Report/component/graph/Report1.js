import React from "react";
import * as Colors from "../../../../config/Color.config";
import ResponsiveBar from "../charts/Barchart";
import Logo from "../../../../assets/images/Logo.png";
import withMedia from "react-media-query-hoc/dist/with-media";
import RadialChart from "../charts/radialbarchart";

const Report1 = (props) => {
  const { reportData, media } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;

  const ChartData = (question_index, type) =>
    type === "pie"
      ? reportData.map((v, k) =>
          v.survey_sections[2].questions
            .map((v1, k1) => v1.option_choices)
            [question_index].map((v2, k2) => ({
              id: v2.option_choice_name,
              label: v2.option_choice_name,
              value: v2.totalAns === null ? 2 : v2.totalAns,
            }))
        )[0]
      : reportData.map((v, k) =>
          v.survey_sections[2].questions
            .map((v1, k1) => v1.option_choices)
            [question_index].map((v2, k2) => ({
              name: v2.option_choice_name,
              value: v2.totalAns === null ? 2 : v2.totalAns,
            }))
        )[0];

  console.log(ChartData(0));

  return (
    <div
      className="container"
      style={{
        border: "0.1px solid #cecece",
        width: "8.27in",
        height: "15.66in",
        paddingLeft: "0.5in",
        paddingTop: "0.3in",
        paddingRight: "0.5in",
        paddingBottom: "0.3in",
        backgroundColor: "",
      }}
    >
      <div className="row justify-content-between border-bottom">
        <div className="" style={{ fontSize: media.mobile ? "15px" : "15px" }}>
          Cooling System
        </div>
        <div className="text-right " style={{ width: "50%" }}>
          <img
            src={Logo}
            style={{
              height: "18px",
            }}
            alt="logo"
          />
        </div>
      </div>
      <div className="row border-bottom ">
        <h5
          style={{
            color: Colors.PrimaryColor,
            fontSize: media.mobile ? "20px" : "25px",
          }}
        >
          Chiller Information
        </h5>
      </div>

      <div className="mt-4">
        <div
          className="justify-contents-center row"
          style={{ minWidth: 150 }}
        ></div>
        <div className="row">
          <div
            className="p-3"
            style={{
              height: window.innerWidth <= 980 ? 300 : 300,
              width: "100%",
            }}
          >
            <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
              Brands of Chillers
            </h2>
            <RadialChart />

            <ResponsiveBar
              dotSize={0}
              enableGridX={false}
              enableGridY={false}
              data={ChartData(0)}
              layout="horizontal"
              padding={0.1}
              axisLeft={{
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 1,
                legend: "",
                legendPosition: "middle",
                legendOffset: -40,
              }}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                // tickRotation: -20,
                legendPosition: "middle",
                legendOffset: 32,
                // tickValues: ChartData(0).length,
              }}
              margin={{ top: 5, right: 40, bottom: 45, left: 95 }}
            />
          </div>
          <div style={{ height: 400 }}>
            </div>
        </div>
      </div>
    </div>
  );
};
export default withMedia(Report1);
