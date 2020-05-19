import React from "react";
import * as Colors from "../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../helper/reportHelper";
import moment from "moment";

const Report = (props) => {
  const { reportData, startDate, endDate } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;

  return (
    <div className="container py-2">
      {reportData && reportData.length ? (
        reportData.map((v, k) => (
          <div className="mt-4" key={k}>
            <h2 className="text-center" style={{ color: Colors.PrimaryColor }}>
              Report for {v.survey_name}
            </h2>
            <h4 className="text-center text-secondary">
              From {moment(startDate).format("YYYY-MMM-DD")} to{" "}
              {moment(endDate).format("YYYY-MMM-DD")}
            </h4>
            {v.survey_sections.map((v1, k1) => (
              <div key={k1} className="text-dark">
                <h4 className="pt-2" style={{ color: Colors.PrimaryColor }}>
                  {v1.section_name}
                </h4>
                <hr />
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

                              <div className="w-50">{`- ${TotalBuilding} (100%)`}</div>
                            </div>
                          ) : null}

                          {v2.option_choices.map((v3, k3) =>
                            v2.input_type_id !== 6 ? (
                              <div key={k3} className="d-flex flex-row flex-wrap">
                                <div className="w-50">
                                  {v3.option_choice_name}
                                </div>
                                <div className="w-50">
                                  {v3.totalAns == null
                                    ? "- 0"
                                    : `- ${v3.totalAns}`}{" "}
                                  ({Percentage(v3.totalAns, TotalBuilding)}%)
                                </div>
                              </div>
                            ) : (
                              <div key={k3} className="d-flex flex-row flex-wrap">
                                <div className="w-50 font-weight-bold">
                                  {Object.keys(v3.other)[0]}
                                </div>
                                <div className="w-50 font-weight-bold">
                                  {Object.keys(v3.other)[1]}
                                </div>
                                <div className="w-50">
                                  {moment(v3.other.YearOfManufacturing).format(
                                    "YYYY-MMM-DD"
                                  )}
                                </div>
                                <div className="w-50">
                                  {moment(v3.other.YearOfInstallation).format(
                                    "YYYY-MMM-DD"
                                  )}
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
                                {Percentage(
                                  NotAnswered(v2.totalAnsCount, TotalBuilding),
                                  TotalBuilding
                                )}%)
                              </div>
                            </div>
                          )}
                        </div>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <h3 className="mt-5 text-center text-warning">
          No Data! Please Select Correct Date
        </h3>
      )}
    </div>
  );
};
export default Report;
