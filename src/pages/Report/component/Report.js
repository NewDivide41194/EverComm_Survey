import React from "react";
import * as Colors from "../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../helper/reportHelper";
import PieChart from './Piechart';
import Bar from './Barchart';
//import Barchart from './RechartBar';
import moment from "moment";


const Report = (props) => {
  const { reportData, startDate, endDate, viewType } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;

  const Buildingdata = reportData.map((v, k) =>
    v.survey_sections[0].questions.map((v1, k1) => v1.option_choices)[0].map((v2, k2) => ({ name: v2.option_choice_name, value: v2.totalAns === null ? 0 : v2.totalAns }))
  )[0]
  console.log("building", Buildingdata);

  const brandData = reportData.map((v, k) =>
    v.survey_sections[0].questions.map((v1, k1) => v1.option_choices)[4].map((v2, k2) => ({ id: v2.option_choice_name, label: v2.option_choice_name, value: v2.totalAns === null ? 0 : v2.totalAns }))
  )[0]
  console.log("brand", brandData);

  const AreaData = reportData.map((v, k) =>
    v.survey_sections[0].questions.map((v1, k1) => v1.option_choices)[1].map((v2, k2) => ({ id: v2.option_choice_name, label: v2.option_choice_name, value: v2.totalAns === null ? 0 : v2.totalAns }))
  )[0]

  const BMSData = reportData.map((v, k) =>
    v.survey_sections[0].questions.map((v1, k1) => v1.option_choices)[3].map((v2, k2) => ({ id: v2.option_choice_name, label: v2.option_choice_name, value: v2.totalAns === null ? 0 : v2.totalAns }))
  )[0]

  const AgeBuildingData = reportData.map((v, k) =>
    v.survey_sections[0].questions.map((v1, k1) => v1.option_choices)[2].map((v2, k2) => ({ name: v2.option_choice_name, value: v2.totalAns === null ? 0 : v2.totalAns }))
  )[0]

  return (
    <div className="container py-2">

      {reportData && reportData.length ? (
        reportData.map((v, k) => (
          <div className="mt-4" key={k}>
            <h2 className="text-center " style={{ color: Colors.PrimaryColor }}>
              Report for {v.survey_name}
            </h2>
            {/* <div className="text-center font-weight-bold"><p>Answered By {viewType}</p></div> */}
            {startDate ? (
              <h4 className="text-center text-secondary">
                From {moment(startDate).format("YYYY-MMM-DD")} to{" "}
                {moment(endDate).format("YYYY-MMM-DD")}
              </h4>
            ) : (
                <h4 className="text-center text-secondary">Overall Report</h4>
              )}
            {viewType ? <div className='row justify-content-end text-dark'>{`View Type: ${viewType === "all" ? "All Users" : "Only Me"}`}</div> : null}
            <div className="py-3 row">
              <div className="col-lg-6" style={{ height: 350 }}>
                <h2 style={{ color: Colors.PrimaryColor, fontSize: '20px' }}>
                  Type of Building
                </h2>
                <Bar data={Buildingdata} axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legendPosition: 'middle',
                  legendOffset: -25,
                  legend: 'Amount of Buildings',
                  
                  tickValues:Buildingdata.length

                }}
                
                margin={{ top: 30, right: 35, bottom: 20, left: 35 }} />
              </div>
              <div className="col-lg-6" style={{ height: 350 }}>
                <h2 style={{ color: Colors.PrimaryColor, fontSize: '20px' }}>
                  Brands of BMS
              </h2>
                <PieChart data={brandData} startAngle={0} padAngle={0.7}
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      translateY: 56,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000'
                          }
                        }
                      ]
                    }
                  ]}
                />
              </div>
              
            </div>
            <div className=" row pt-5 pb-0 mb-0">
              <div className="col-lg-6" style={{ height: 275 }}>
                <h2 style={{ color: Colors.PrimaryColor, fontSize: '20px' }}>
                  Building Area (sqm)
              </h2>
                <PieChart data={AreaData} startAngle={90} endAngle={-90} innerRadius={0.75} cornerRadius={0}
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      translateY: 30,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000'
                          }
                        }
                      ]
                    }
                  ]}

                />
              </div>
              <div className="col-lg-6" style={{ height: 350 }}>
                <h2 style={{ color: Colors.PrimaryColor, fontSize: '20px' }}>
                  Building Management System (BMS)
              </h2>
                <PieChart data={BMSData} innerRadius={0.75} cornerRadius={0}
                  legends={[
                    {
                      anchor: 'left',
                      direction: 'column',
                      translateY: 56,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000'
                          }
                        }
                      ]
                    }
                  ]}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6" style={{ height: 350 }}>
                <h2 style={{ color: Colors.PrimaryColor, fontSize: '20px' }}>
                  Age of Building
                </h2>
                <Bar data={AgeBuildingData} layout={"horizontal"}  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: 'middle',
                    legendOffset: 32,
                    legend:"Amount of Buildings",
                    tickValues:AgeBuildingData.length
                  }}  
                  margin={{ top: 5, right: 50, bottom: 40, left: 90 }}
                />
              </div>
            </div>

            {/*             
            {v.survey_sections.map((v1, k1) => (
              <div key={k1} className="text-dark">
                <h4 className="pt-2" style={{ color: Colors.PrimaryColor }}>
                  {v1.section_name}
                </h4>
                <hr />

                <Barchart
                  data={data}
                 />
                <div className="d-flex flex-row flex-wrap">
                  {v1.questions
                    ? v1.questions.map((v2, k2) => (
                        <div key={k2} className="col-lg-6 pb-4">
                          <div className="d-flex flex-row font-weight-bold pb-2">
                            {k2 + 1}. {v2.question_name}
                          </div>
                          {v2.input_type_id !== 6 ? (
                            <div className="d-flex flex-row font-weight-bold">
                              <div className="w-50">Total Buildings</div>

                          <div className="w-50">{`- ${TotalBuilding} ${TotalBuilding===0?"(0%)":"(100%)"} `}</div>
                            </div>
                          ) : null}

                          {v2.option_choices.map((v3, k3) =>
                            v2.input_type_id !== 6 ? (
                              <div
                                key={k3}
                                className="d-flex flex-row flex-wrap"
                              >
                                <div className="w-50">
                                  {v3.option_choice_name}
                                </div>
                                <div className="w-50">
                                  {v3.totalAns == null
                                    ? "- 0"
                                    : `- ${v3.totalAns}`}{" "}
                                  ({isNaN(Percentage(v3.totalAns, TotalBuilding))?0:Percentage(v3.totalAns, TotalBuilding)}%)
                                </div>
                              </div>
                            ) : (
                              <div
                                key={k3}
                                className="d-flex flex-row flex-wrap"
                              >
                                <div className="w-50 font-weight-bold">
                                  {Object.keys(v3.other)[0]}
                                </div>
                                <div className="w-50 font-weight-bold">
                                  {Object.keys(v3.other)[1]}
                                </div>
                                <div className="w-50">
                                  {v3.other.YearOfManufacturing}
                                </div>
                                <div className="w-50">
                                  {v3.other.YearOfInstallation}
                                </div>
                              </div>
                            )
                          )}

                          {v2.input_type_id === 1 ||
                          v2.input_type_id === 6 ? null : (
                            <div className="d-flex flex-row flex-wrap">
                              <div className="w-50">Not Answered</div>
                              <div className="w-50">
                                - {NotAnswered(v2.totalAnsCount, TotalBuilding)}{" "}
                                (
                                {isNaN(Percentage(
                                  NotAnswered(v2.totalAnsCount, TotalBuilding),
                                  TotalBuilding
                                ))?0:Percentage(
                                  NotAnswered(v2.totalAnsCount, TotalBuilding),
                                  TotalBuilding
                                )}
                                %)
                              </div>
                            </div>
                          )}
                        </div>
                      ))
                    : null}
                </div>
              </div>
            ))} */}
          </div>
        ))
      ) : (
          <h3 className="mt-5 text-center text-warning">
            No Data!
          </h3>
        )}
    </div>
  );
};
export default Report;
