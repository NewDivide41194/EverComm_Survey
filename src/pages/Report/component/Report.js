import React from "react";
import * as Colors from "../../../config/Color.config";

const Report = (props) => {
  const { reportData } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;
  const Percentage = (countAns) => (countAns * 100) / TotalBuilding;

const TotalOption= reportData
? reportData.map((v, k) => v.survey_sections[0].questions.map(x=>x.option_choices)[k])[0]
: null;
const testarray=[9,8]

const reducer=(a,b)=>a+b
  const TotalOptionAns=(AnsCounts)=>{
      console.log("====>",AnsCounts);
      
    return AnsCounts.reduce(reducer)}
//   console.log(TotalOptionAns([9,3]));
  
//   otalOption&&TotalOption.map(v=>AnsCounts).reduce(reducer)
  
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
              {v.survey_sections.map((v1, k1) => (
                <div key={k1} className='text-dark'>
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
                                      {/* {TotalPercent(v3.totalAns)} */}
                                      {v3.option_choice_name}
                                    </div>
                                    <div className="W-25">
                                      {v3.totalAns == null ?"- 0" : `- ${v3.totalAns}`}{" "}
                                      ({Percentage(v3.totalAns).toFixed(0)}%)
                                    </div>
                                    {/* {TotalOptionAns((v3.totalAns))} */}
                                  </div>
                                ))
                              : null}
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