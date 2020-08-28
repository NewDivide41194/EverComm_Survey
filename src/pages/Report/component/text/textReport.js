import React from "react";
import * as Colors from "../../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../../helper/reportHelper";
import Logo from "../../../../assets/images/Logo.png";

const Text = (props) => {
  const { reportData, startDate, endDate, viewType, section } = props;

  console.log('reportData >> ', reportData)
  console.log('section >>> ', section)
 
  const TotalBuilding =
    reportData &&
    reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0];
  const TotalChiller =
    reportData && reportData.map((v, k) => v.building_count[0].chiller)[0];
  const TotalCondenser =
    reportData && reportData.map((v, k) => v.building_count[0].condenser)[0];
  const TotalEvaporator =
    reportData && reportData.map((v, k) => v.building_count[0].evaporator)[0];
  const TotalCoolingTower =
    reportData &&
    reportData.map((v, k) => v.building_count[0].cooling_tower)[0];
  return (
    <div className="">
      {section.length &&
        section.map((v, k) => (
          <div
            key={v.key}
            className="container my-4 text-dark border"
            style={{
              width: "8.27in",
              height: "15.66in",
              paddingLeft: "0.5in",
              paddingTop: "0.3in",
              paddingRight: "0.5in",
              paddingBottom: "0.3in",
              backgroundColor: "",
              pageBreakInside: 'auto'
            }}
          >
           <div className="row justify-content-between border-bottom">
                Cooling System
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
            <h4 className="pt-2" style={{ color: Colors.PrimaryColor }}>
              {v.section_name}
            </h4>
            <hr />
            <div
              className="row d-fle
                x flex-row flex-wrap"
            >
              <div className="col-12 font-weight-bold text-success">
                {v.survey_section_id === 1 ? (
                  <div>
                    Total Buildings
                    {` - ${TotalBuilding} ${
                      TotalBuilding === 0 ? "(0%)" : "(100%)"
                    } `}
                  </div>
                ) : v.survey_section_id === 2 ? (
                  <div>
                    Total Chillers
                    {` - ${TotalChiller} ${
                      TotalChiller === 0 ? "(0%)" : "(100%)"
                    } `}
                  </div>
                ) : v.survey_section_id === 3 ? (
                  <div>
                    Total Condenser
                    {` - ${TotalCondenser} ${
                      TotalCondenser === 0 ? "(0%)" : "(100%)"
                    } `}
                  </div>
                ) : v.survey_section_id === 5 ? (
                  <div>
                    Total Evaporator
                    {` - ${TotalEvaporator} ${
                      TotalEvaporator === 0 ? "(0%)" : "(100%)"
                    } `}
                  </div>
                ) : (
                  <div>
                    Total Cooling Tower
                    {` - ${TotalCoolingTower} ${
                      TotalCoolingTower === 0 ? "(0%)" : "(100%)"
                    } `}
                  </div>
                )}
              </div>
              {v.questions.map((v2, k2) => (
                <div key={k2} className="col-6 py-2">
                  <div className="d-flex flex-row font-weight-bold pb-2">
                    {k2 + 1}. {v2.question_name}
                  </div>
                  {v2.option_choices.map((v3, k3) =>
                    v2.input_type_id !== 6 ? (
                      <div key={k3} className="d-flex flex-row flex-wrap">
                        <div className="w-50">{v3.option_choice_name}</div>
                        <div className="w-50">
                          {v3.totalAns == null ? "- 0" : `- ${v3.totalAns}`} (
                          {Percentage(
                            v3.totalAns,
                            v.survey_section_id === 1
                              ? TotalBuilding
                              : v.survey_section_id === 2
                              ? TotalChiller
                              : v.survey_section_id === 3
                              ? TotalCondenser
                              : v.survey_section_id === 5
                              ? TotalEvaporator
                              : TotalCoolingTower
                          )}
                          %)
                        </div>
                      </div>
                    ) : (
                      <div key={k3} className="d-flex flex-row flex-wrap">
                        <div className="w-50">
                          {v3.other.YearOfInstallation}
                        </div>
                      </div>
                    )
                  )}

                  {v2.input_type_id === 1 ||
                  v.survey_section_id !== 1 ? null : (
                    <div className="d-flex flex-row flex-wrap">
                      <div className="w-50">Not Answered</div>
                      <div className="w-50">
                        -{" "}
                        {isNaN(NotAnswered(v2.totalAnsCount, TotalBuilding))
                          ? 0
                          : NotAnswered(v2.totalAnsCount, TotalBuilding)}{" "}
                        (
                        {isNaN(
                          Percentage(
                            NotAnswered(v2.totalAnsCount, TotalBuilding),
                            TotalBuilding
                          )
                        )
                          ? 0
                          : Percentage(
                              NotAnswered(v2.totalAnsCount, TotalBuilding),
                              TotalBuilding
                            )}
                        %)
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
export default Text;
// import React from "react";
// import * as Colors from "../../../../config/Color.config";
// import { NotAnswered, Percentage } from "../../../../helper/reportHelper";
// import moment from "moment";

// const Report = (props) => {
//   const { reportData, startDate, endDate } = props;
//   const TotalBuilding = reportData
//     ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
//     : null;
//   console.log(TotalBuilding);

//   return (
//     <div className="container py-2">
//       {reportData && reportData.length ? (
//         reportData.map((v, k) => (
//           <div className="mt-4" key={k}>
//             <h2 className="text-center" style={{ color: Colors.PrimaryColor }}>
//               Report for {v.survey_name}
//             </h2>
//             {startDate ? (
//               <h4 className="text-center text-secondary">
//                 From {moment(startDate).format("YYYY-MMM-DD")} to{" "}
//                 {moment(endDate).format("YYYY-MMM-DD")}
//               </h4>
//             ) : (
//               <h4 className="text-center text-secondary">Overall Report</h4>
//             )}
//             {v.survey_sections.map((v1, k1) => (
//               <div key={k1} className="text-dark">
//                 <h4 className="pt-2" style={{ color: Colors.PrimaryColor }}>
//                   {v1.section_name}
//                 </h4>
//                 <hr />
//                 <div className="d-flex flex-row flex-wrap">
//                   {v1.questions
//                     ? v1.questions.map((v2, k2) => (
//                         <div key={k2} className="col-lg-6 pb-4">
//                           <div className="d-flex flex-row font-weight-bold pb-2">
//                             {k2 + 1}. {v2.question_name}
//                           </div>
//                           {v2.input_type_id !== 6 ? (
//                             <div className="d-flex flex-row font-weight-bold">
//                               <div className="w-50">Total Buildings</div>

//                               <div className="w-50">{`- ${TotalBuilding} ${
//                                 TotalBuilding === 0 ? "(0%)" : "(100%)"
//                               } `}</div>
//                             </div>
//                           ) : null}

//                           {v2.option_choices.map((v3, k3) =>
//                             v2.input_type_id !== 6 ? (
//                               <div
//                                 key={k3}
//                                 className="d-flex flex-row flex-wrap"
//                               >
//                                 <div className="w-50">
//                                   {v3.option_choice_name}
//                                 </div>
//                                 <div className="w-50">
//                                   {v3.totalAns == null
//                                     ? "- 0"
//                                     : `- ${v3.totalAns}`}{" "}
//                                   (
//                                   {isNaN(Percentage(v3.totalAns, TotalBuilding))
//                                     ? 0
//                                     : Percentage(v3.totalAns, TotalBuilding)}
//                                   %)
//                                 </div>
//                               </div>
//                             ) : (
//                               <div
//                                 key={k3}
//                                 className="d-flex flex-row flex-wrap"
//                               >
//                                 <div className="w-50 font-weight-bold">
//                                   {Object.keys(v3.other)[0]}
//                                 </div>
//                                 <div className="w-50 font-weight-bold">
//                                   {Object.keys(v3.other)[1]}
//                                 </div>
//                                 <div className="w-50">
//                                   {moment(v3.other.YearOfManufacturing).format(
//                                     "YYYY-MMM-DD"
//                                   )}
//                                 </div>
//                                 <div className="w-50">
//                                   {moment(v3.other.YearOfInstallation).format(
//                                     "YYYY-MMM-DD"
//                                   )}
//                                 </div>
//                               </div>
//                             )
//                           )}

//                           {v2.input_type_id === 1 ||
//                           v2.input_type_id === 6 ? null : (
//                             <div className="d-flex flex-row flex-wrap">
//                               <div className="w-50">Not Answered</div>
//                               <div className="w-50">
//                                 -{" "}
//                                 {isNaN(
//                                   NotAnswered(v2.totalAnsCount, TotalBuilding)
//                                 )
//                                   ? 0
//                                   : (v2.totalAnsCount, TotalBuilding)}{" "}
//                                 (
//                                 {isNaN(
//                                   Percentage(
//                                     NotAnswered(
//                                       v2.totalAnsCount,
//                                       TotalBuilding
//                                     ),
//                                     TotalBuilding
//                                   )
//                                 )
//                                   ? 0
//                                   : Percentage(
//                                       NotAnswered(
//                                         v2.totalAnsCount,
//                                         TotalBuilding
//                                       ),
//                                       TotalBuilding
//                                     )}
//                                 %)
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       ))
//                     : null}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))
//       ) : (
//         <h3 className="mt-5 text-center text-warning">No Data!</h3>
//       )}
//     </div>
//   );
// };
// export default Report;
