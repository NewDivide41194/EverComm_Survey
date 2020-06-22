import React from "react";
import * as Colors from "../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../helper/reportHelper";
import PieChart from "./Piechart";
import Bar from "./Barchart";
import moment from "moment";
import withMedia from "react-media-query-hoc/dist/with-media";

const Report = (props) => {
  const { reportData, startDate, endDate, viewType, media } = props;
  const halfPieStyle = {
    position: "absolute",
    top: 90,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    pointerEvents: "none",
    marginLeft: "40%",
  };
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
    <div className="container apy-2">
      {reportData.length ? (
        reportData.map((v, k) => (
          <div className="row mt-4 border p-2" key={k}>
            <h2 className="text-center ">
              Report for {v.survey_name}
            </h2>
            {startDate ? (
              <h4 className="text-center text-secondary">
                From {moment(startDate).format("YYYY-MMM-DD")} to{" "}
                {moment(endDate).format("YYYY-MMM-DD")}
              </h4>
            ) : (
              <h4 className="text-center text-secondary">Overall Report</h4>
            )}
            {viewType ? (
              <div className="d-flex flex-row justify-content-end text-dark">{`View Type: ${
                viewType === "all" ? "All Users" : "Only Me"
              }`}</div>
            ) : null}
            <div className="d-flex flex-row w-100 py-3">
              <div
                className=""
                style={{height:350,width:350}}

              >
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Type of Building
                </h2>
                <Bar
                  data={ChartData(0)}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: "middle",
                    legendOffset: -30,
                    legend: "#Amount of Buildings",

                    tickValues: ChartData(0).length,
                  }}
                  axisBottom={{
                    tickRotation: -45,
                    tickSize: 0,
                    legendPosition: "middle",
                    legendOffset: 43,
                    tickPadding: 8,
                  }}
                  margin={{ top: 10, right: 0, bottom: 80, left: 40 }}
                />
              </div>
              <div className=""
              style={{height:350,width:350}}
>
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Brands of BMS
                </h2>
                <PieChart
                  data={ChartData(4, "pie")}
                  startAngle={0}
                  enableRadialLabels={true}
                  // legends={[
                  //   {
                  //     anchor: 'left',
                  //     direction: 'row',
                  //     translateX: 0,
                  //     translateY: 30,
                  //     itemWidth: 90,
                  //     // itemDirection:"left-to-right",
                  //     itemHeight: 20,
                  //     itemTextColor: '#999',
                  //     symbolSize: 18,
                  //     symbolShape: 'circle',
                  //     effects: [
                  //       {
                  //         on: 'hover',
                  //         style: {
                  //           itemTextColor: '#000'
                  //         }
                  //       }
                  //     ]
                  //   }
                  // ]}
                />
              </div>
            </div>
            <div className=" row pt-5 pb-0 mb-0">
              <div className="col-lg-6" style={{ height: 275 }}>
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Building Area (sqm)
                </h2>
                <PieChart
                  data={ChartData(1, "pie")}
                  startAngle={90}
                  endAngle={-90}
                  innerRadius={0.75}
                  cornerRadius={0}
                  enableRadialLabels={false}
                  legends={[
                    {
                      anchor: "top-left",
                      direction: "column",
                      translateX: -50,
                      translateY: -40,
                      itemWidth: 80,
                      itemHeight: 23,
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
                <div style={halfPieStyle}>
                  <span>Total Building</span>
                  <span className="font-weight-bold" style={{ fontSize: 30 }}>
                    17
                  </span>
                </div>
              </div>
              <div className="col-lg-6" style={{ height: 350 }}>
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Building Management System (BMS)
                </h2>

                <PieChart
                  data={ChartData(3, "pie")}
                  innerRadius={0.75}
                  cornerRadius={0}
                  enableRadialLabels={false}
                  legends={[
                    {
                      anchor: "left",
                      direction: "column",
                      translateX: 10,
                      translateY: 50,
                      itemWidth: 100,
                      itemHeight: 24,
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
                <div
                  style={{
                    position: "absolute",
                    top: 25,
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 50,
                    color: "#4084d2",
                    textAlign: "center",
                    pointerEvents: "none",
                    marginLeft: "43%",
                  }}
                >
                  <span>5%</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 pr-0" style={{ height: 350 }}>
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
    </div>
  );
};
export default withMedia(Report);
