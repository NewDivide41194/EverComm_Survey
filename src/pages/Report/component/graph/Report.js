import React from "react";
import * as Colors from "../../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../../helper/reportHelper";
import PieChart from "../charts/Piechart";
import Bar from "../charts/Barchart";
import Logo from "../../../../assets/images/Logo.png";
import withMedia from "react-media-query-hoc/dist/with-media";

const Report = (props) => {
  const { reportData, startDate, endDate, viewType, media } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;

    const ChartData = (question_index, type) =>
    type === "pie"
      ? reportData.map((v, k) =>
          v.survey_sections[0].questions
            .map((v1, k1) => v1.option_choices)
            [question_index].map((v2, k2) => ({
              id: v2.option_choice_name,
              label: v2.option_choice_name,
              value: v2.totalAns === null ? 0 : v2.totalAns,
            }))
        )[0]
      : reportData.map((v, k) =>
          v.survey_sections[0].questions
            .map((v1, k1) => v1.option_choices)
            [question_index].map((v2, k2) => ({
              name: v2.option_choice_name,
              value: v2.totalAns === null ? 0 : v2.totalAns,
            }))
        )[0];
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
          Basic Information
        </h5>
      </div>

      {reportData && reportData.length ? (
        reportData.map((v, k) => (
          <div className="mt-4" key={k}>
            {/* <h2 className="text-center " style={{ color: Colors.PrimaryColor }}>
              Report for {v.survey_name}
            </h2> */}
            {/* <div className="text-center font-weight-bold"><p>Answered By {viewType}</p></div> */}
            {/* {startDate ? (
              <h4 className="text-center text-secondary">
                From {moment(startDate).format("YYYY-MMM-DD")} to{" "}
                {moment(endDate).format("YYYY-MMM-DD")}
              </h4>
            ) : (
                <h4 className="text-center text-secondary">Overall Report</h4>
              )} */}
            {/* {viewType ? <div className='row justify-content-end text-dark'>{`View Type: ${viewType === "all" ? "All Users" : "Only Me"}`}</div> : null} */}
            {/* style={{borderRight: "#665454",borderLeft:"#665454" ,borderTop:"0",borderRight:"0"}} */}
            <div
              className="justify-contents-center row"
              style={{ minWidth: 150 }}
            >
              <div
                className="py-3 border-dark"
                style={{
                  height: window.innerWidth <= 980 ? 300 : 310,
                  width: "50%",
                }}
              >
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Type of Building
                </h2>
                <Bar
                  data={ChartData(0)}
                  axisLeft={{
                    tickSize: 2,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: "middle",
                    legendOffset: -25,
                    legend: "Amount of Buildings",
                    tickValues: ChartData(0).length,
                  }}
                  axisBottom={{
                    tickRotation: -45,
                    tickSize: 0,
                    legendPosition: "middle",
                    legendOffset: 83,
                    // legend: 'Building Types',
                  }}
                  margin={{ top: 30, right: 35, bottom: 95, left: 35 }}
                />
              </div>
              <div
                className="row p-3"
                style={{
                  height: window.innerWidth <= 980 ? 300 : 310,
                  width: "50%",
                }}
              >
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Brands of BMS
                </h2>
                <PieChart
                  data={ChartData(4, "pie")}
                  startAngle={0}
                  padAngle={0.7}
                  legends={[
                    {
                      anchor: "bottom",
                      direction: "row",
                      translateY: 56,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: "#999",
                      symbolSize: 18,
                      symbolShape: "circle",
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemTextColor: "#000",
                          },
                        },
                      ],
                    },
                  ]}
                />
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
                  Building Area (sqm)
                </h2>
                <PieChart
                  data={ChartData(1, "pie")}
                  startAngle={90}
                  endAngle={-90}
                  innerRadius={0.75}
                  cornerRadius={0}
                  legends={[
                    {
                      anchor: "bottom",
                      direction: "row",
                      translateY: 30,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: "#999",
                      symbolSize: 18,
                      symbolShape: "circle",
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemTextColor: "#000",
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
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
                <PieChart
                  data={ChartData(3, "pie")}
                  innerRadius={0.75}
                  cornerRadius={0}
                  legends={[
                    {
                      anchor: "left",
                      direction: "column",
                      translateY: 56,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: "#999",
                      symbolSize: 18,
                      symbolShape: "circle",
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemTextColor: "#000",
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
            <div className="row">
              <div
                className="p-3"
                style={{
                  height: window.innerWidth <= 980 ? 300 : 310,
                  width: "50%",
                }}
              >
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Age of Building
                </h2>
                <Bar
                  data={ChartData(2)}
                  layout={"horizontal"}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: "middle",
                    legendOffset: 32,
                    legend: "Amount of Buildings",
                    tickValues: ChartData(2).length,
                  }}
                  margin={{ top: 5, right: 50, bottom: 40, left: 90 }}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 className="mt-5 text-center text-warning">No Data!</h3>
      )}
      {/* <div className="row justify-content-center ">Page-1</div> */}
    </div>
  );
};
export default withMedia(Report);
