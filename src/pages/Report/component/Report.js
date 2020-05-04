import React from "react";
import * as Colors from "../../../config/Color.config";

const Report = (props) => {
  const { reportData } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;
  const Percentage = (countAns) => ((countAns * 100) / TotalBuilding).toFixed(2);
  const NotAnswered = (totalAnsCount) => TotalBuilding - totalAnsCount;
  
  return (
    <div className="container py-2">
      {reportData
        ? reportData.map((v, k) => (
            <div key={k}>
              <h2
                className="text-center"
                style={{ color: Colors.PrimaryColor }}
              >
                Report for {v.survey_name}
              </h2>
              <h4 className="text-center text-secondary">
                From {`April-26-2020`} to {`April-30-2020`}
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
                            <div className="row font-weight-bold pb-2">
                              {v2.question_id}. {v2.question_name}  
                            </div>
                            <div className="row font-weight-bold">
                              <div className="w-75">Total Buildings</div>
                              <div className="W-25">{`- ${TotalBuilding} (100%)`}</div>
                            </div>
                            {v2.option_choices
                              ? v2.option_choices.map((v3, k3) => (
                                  <div key={k3} className="row">
                                    <div className="w-75">
                                      {v3.option_choice_name}
                                    </div>
                                    <div className="W-25">
                                      {v3.totalAns == null
                                        ? "- 0"
                                        : `- ${v3.totalAns}`}{" "}
                                      ({Percentage(v3.totalAns)} %)
                                    </div>
                                  </div>
                                ))
                              : null}
                           {v2.input_type_id===1|| <div className="row">
                              <div className="w-75">Not Answered</div>
                              <div className="W-25">
                                - {NotAnswered(v2.totalAnsCount)} (
                                {Percentage(NotAnswered(v2.totalAnsCount))} %)
                              </div>
                            </div>}
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              ))}
            </div>
          ))
        : null}
    </div>
  );
};
export default Report;