import React from "react";
import ESCheckBox from "../../../../tools/ES_CheckBox";
import { ESRadio } from "../../../../tools/ES_Radio";
import { ESDropDown } from "../../../../tools/ES_DropDown";

import { withMedia } from "react-media-query-hoc";
import { ESInput } from "../../../../tools/ES_Inputs";
import ESDatePicker from "../../../../tools/ES_DatePicker";

// import "../App.css"

const TextCompound = (props) => {
  const {
    QuestionData,
    _handleRadioChange,
    _handleCheckChange,
    _handleInputChange,
    _handleStartChange,
    _handleSelect,
    isQuestion,
    pageno,
    media,
    selectedOption,
    AnswerData,
    amountOfDevice,
    sessionId,
    otherAns,
    otherOfQuestion,
    surveyHeaderId,
    reportData
  } = props;
  const buildingId = localStorage.getItem("buildingId");
  const deviceIndexValue = amountOfDevice && Object.values(amountOfDevice[0]);
  const addedQuestionId = 1000;

  const deviceOption = new Array(99)
    .fill(null)
    .map((v, k) => ({ label: k + 1, value: k + 1 }));

  const pageDeviceIndex =
    pageno === 0 ? 1 : 5 ? deviceIndexValue[0] : deviceIndexValue[pageno - 1];

  const MultiplyQuestions = new Array(pageDeviceIndex).fill(null).map((v, k3) => {
    return (
      <div
        key={k3}
        className="d-flex my-3 p-2 pt-2 rounded bg-light border"
        style={{
          fontSize: media.mobile ? "12px" : "15px",
        }}
      >
        {surveyHeaderId === 1 ? (
          <div className="py-2 font-weight-bold">
            {k3 + 1`Device No.` + (k3 + 1)}
          </div>
        ) : null}

        <div className="flex-fill pr-2 ">
          {QuestionData &&
            QuestionData.map((ques, k2) => {
              const remakeQuestionId =
                pageDeviceIndex > 1
                  ? Object.keys(amountOfDevice[0])[
                      pageno === 5 ? 0 : pageno - 1
                    ] +
                    addedQuestionId +
                    k3 +
                    buildingId +
                    ques.question_id
                  : ques.question_id.toString();
              return (
                <div
                  className="d-flex flex-row flex-fill flex-wrap w-100 py-0"
                  key={k2}
                  id={ques.questionId}
                  style={{
                    fontSize: media.mobile ? "12px" : "15px",
                  }}
                >
                  <div className="d-flex flex-row flex-wrap w-100" key={k2}>
                    <div className="d-flex flex-row pb-2 w-100 justify-content-between">
                      <div className="w-25 align-self-center">
                        {ques.question_name}
                      </div>
                      <div className="w-75">
                        {ques.input_type_id === 1 ? (
                          <div>
                            <ESCheckBox
                              quesId={remakeQuestionId}
                              value={ques.option_choices}
                              _handleChange={_handleCheckChange}
                              isAnswer={AnswerData}
                              isQuestion={isQuestion}
                              keys={ques.question_id}
                              className={
                                ques.option_group_id === 10
                                  ? `${
                                      media.mobile ? null : "mr-4"
                                    } text-center  font-weight-bold`
                                  : null
                              }
                              vertical={
                                ques.option_group_id === 10 ? true : false
                              }
                            />
                          </div>
                        ) : ques.input_type_id === 2 ? (
                          <div>
                            <ESRadio
                              value={ques.option_choices}
                              _handleRadioChange={_handleRadioChange}
                              quesId={remakeQuestionId}
                              isAnswer={AnswerData}
                              subQuesId={undefined}
                              isQuestion={isQuestion}
                              keys={ques.question_id}
                            />
                            {/* {otherAns(
                              remakeQuestionId,
                              ques.question_id,
                              otherOfQuestion(k2)
                            ).length > 0 ? (
                              <ESInput
                                maxLength={30}
                                placeHolder={"Please Specify"}
                                id={remakeQuestionId}
                                value={AnswerData.filter(
                                  (d) => d.questionId === remakeQuestionId
                                ).map((v, k) => v.other)}
                                onChange={(e) => {
                                  _handleInputChange(
                                    e,
                                    remakeQuestionId,
                                    ques.question_id,
                                    otherOfQuestion(k2)
                                  );
                                }}
                              />
                            ) : null} */}
                          </div>
                        ) : ques.input_type_id === 5 ? (
                          ques.option_choices.length === 1 ? (
                            <ESDropDown
                              quesId={remakeQuestionId}
                              options={deviceOption}
                              _handleSelect={_handleSelect}
                              selectedOption={
                                AnswerData.filter(
                                  (d) => d.questionId === remakeQuestionId
                                )
                                  ? AnswerData.filter(
                                      (d) => d.questionId === remakeQuestionId
                                    ).map((v, k) => v.other)
                                  : selectedOption
                              }
                              keys={ques.question_id}
                            />
                          ) : (
                            <div>
                              <ESDropDown
                                quesId={remakeQuestionId}
                                subQuesId={null}
                                options={ques.option_choices.map((v, k) => ({
                                  value: v.option_choice_id,
                                  label: v.option_choice_name,
                                }))}
                                _handleSelect={_handleSelect}
                                selectedOption={
                                  AnswerData.filter(
                                    (d) => d.questionId === remakeQuestionId
                                  )
                                    ? AnswerData.filter(
                                        (d) => d.questionId === remakeQuestionId
                                      ).map(
                                        (v, k) =>
                                          ques.option_choices.filter(
                                            (x, y) =>
                                              x.option_choice_id ===
                                              v.optionChoiceId
                                          )[0]
                                      )
                                    : selectedOption
                                }
                                keys={ques.question_id}
                              />
                              {/* {otherAns(
                                remakeQuestionId,
                                ques.question_id,
                                otherOfQuestion(k2)
                              ).length > 0 ? (
                                <div className="pt-2">
                                  <ESInput
                                    maxLength={30}
                                    placeHolder={"Please Specify"}
                                    id={remakeQuestionId}
                                    value={
                                      AnswerData.filter(
                                        (d) => d.questionId === remakeQuestionId
                                      ).length && AnswerData.length
                                        ? AnswerData.filter(
                                            (d) =>
                                              d.questionId === remakeQuestionId
                                          ).map((v, k) => v.other)[0]
                                        : null
                                    }
                                    onChange={(e) => {
                                      _handleInputChange(
                                        e,
                                        remakeQuestionId,
                                        null,
                                        ques.question_id,
                                        otherOfQuestion(k2)
                                      );
                                    }}
                                  />
                                </div>
                              ) : null} */}
                            </div>
                          )
                        ) : ques.input_type_id === 4 ? (
                          <ESInput
                            maxLength={30}
                            placeHolder={"Fill Your Answer"}
                            id={remakeQuestionId}
                            value={AnswerData.filter((d) => {
                              return d.questionId === remakeQuestionId;
                            }).map((v, k) => v.other)}
                            onChange={(e) => {
                              _handleInputChange(
                                e,
                                remakeQuestionId,
                                null,
                                ques.question_id
                              );
                            }}
                          />
                        ) : ques.input_type_id === 6 ? (
                          <ESDatePicker
                            quesId={remakeQuestionId}
                            placeHolder={ques.question_name}
                            startDate={
                              AnswerData.filter(
                                (d) => d.questionId === remakeQuestionId
                              ).length && AnswerData.length
                                ? AnswerData.filter(
                                    (d) => d.questionId === remakeQuestionId
                                  ).map((v, k) => new Date(v.other))[0]
                                : null
                            }
                            _handleStartChange={_handleStartChange}
                            keys={ques.question_id}
                            type={ques.question_name}
                          />
                        ) : null}
                      </div>
                      <div>
                        {AnswerData.map((v, k) => v.questionId).filter(
                          (v) => v === remakeQuestionId
                        )[0] === remakeQuestionId ? (
                          <QuestionCardInfo info={"Answered"} media={media} />
                        ) : (
                          <QuestionCardInfo info={"Pending"} media={media} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  });
  return MultiplyQuestions;
};

export default withMedia(TextCompound);

const QuestionCardInfo = (props) => {
  const { info, media } = props;
  return (
    <div className="self-align-center">
      {/* {media.mobile || (
        <span style={{ fontSize: 10 }} className="text-secondary pr-1">
          {info}
        </span>
      )} */}
      <i
        className={`pl-2 pt-2 fa ${
          info === "Answered"
            ? "fa-check-circle text-success"
            : "fa-exclamation-circle text-warning"
        }`}
        style={{ fontSize: 18, opacity: 0.9 }}
        title="Answered"
      />
    </div>
  );
};
// import React from "react";
// import * as Colors from "../../../../config/Color.config";
// import { NotAnswered, Percentage } from "../../../../helper/reportHelper";
// import Logo from "../../../../assets/images/Logo.png";
// import "../../../../App.css";

// const Text = (props) => {
//   const { reportData, startDate, endDate, viewType, section } = props;
//   const surveyHeaderId = parseInt(localStorage.getItem("SurveyHeaderId"));

//   const TotalBuilding =
//     reportData &&
//     reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0];

//   const TotalChiller =
//     reportData && reportData.map((v, k) => v.building_count[0].chiller)[0];
//   const TotalCondenser =
//     reportData && reportData.map((v, k) => v.building_count[0].condenser)[0];
//   const TotalEvaporator =
//     reportData && reportData.map((v, k) => v.building_count[0].evaporator)[0];
//   const TotalCoolingTower =
//     reportData &&
//     reportData.map((v, k) => v.building_count[0].cooling_tower)[0];
//   const TotalCountry =
//     reportData &&
//     reportData.map((v,k) => v.building_count[0].Number_of_countrys)[0]
//   console.log('total country >> ', TotalCountry)

//   return (
//     <div className="">
//       {section.length &&
//         section.map((v, k) => (
//           <div
//             key={v.key}
//             className="container text-dark"
//             style={{
//               width: "8.27in",

//             }}
//           >
//            <div className="row justify-content-between border-bottom">
//                 Cooling System
//               <div className="text-right " style={{ width: "50%" }}>
//                 <img
//                   src={Logo}
//                   style={{
//                     height: "18px",
//                   }}
//                   alt="logo"
//                 />
//               </div>
//             </div>
//             <h4 className="pt-2" style={{ color: Colors.PrimaryColor }}>
//               {v.section_name}
//             </h4>
//             <hr />
//             <div
//               className="row d-fle
//                 x flex-row flex-wrap"
//             >
//               <div className="col-12 font-weight-bold text-success">
//                 {v.survey_section_id === 1 ? (
//                   <div>
//                     Total Buildings
//                     {` - ${TotalBuilding} ${
//                       TotalBuilding === 0 ? "(0%)" : "(100%)"
//                     } `}
//                   </div>
//                 ) : v.survey_section_id === 2 ? (
//                   <div>
//                     Total Chillers
//                     {` - ${TotalChiller} ${
//                       TotalChiller === 0 ? "(0%)" : "(100%)"
//                     } `}
//                   </div>
//                 ) : v.survey_section_id === 3 ? (
//                   <div>
//                     Total Condenser
//                     {` - ${TotalCondenser} ${
//                       TotalCondenser === 0 ? "(0%)" : "(100%)"
//                     } `}
//                   </div>
//                 ) : v.survey_section_id === 5 ? (
//                   <div>
//                     Total Evaporator
//                     {` - ${TotalEvaporator} ${
//                       TotalEvaporator === 0 ? "(0%)" : "(100%)"
//                     } `}
//                   </div>
//                 ) : (
//                   <div>
//                     Total Cooling Tower
//                     {` - ${TotalCoolingTower} ${
//                       TotalCoolingTower === 0 ? "(0%)" : "(100%)"
//                     } `}
//                   </div>
//                 )}
//               </div>
//               {v.questions.map((v2, k2) => (
//                 <div key={k2} className="col-6 py-2">
//                   <div className="d-flex flex-row font-weight-bold pb-2">
//                     {k2 + 1}. {v2.question_name}
//                   </div>
//                   {v2.option_choices.map((v3, k3) =>
//                     v2.input_type_id !== 6 ? (
//                       <div key={k3} className="d-flex flex-row flex-wrap">
//                         <div className="w-50">{v3.option_choice_name}</div>
//                         <div className="w-50">
//                           {v3.totalAns == null ? "- 0" : `- ${v3.totalAns}`} (
//                           {Percentage(
//                             v3.totalAns,
//                             v.survey_section_id === 1
//                               ? TotalBuilding
//                               : surveyHeaderId === 10
//                               ? TotalCountry
//                               : v.survey_section_id === 2
//                               ? TotalChiller
//                               : v.survey_section_id === 3
//                               ? TotalCondenser
//                               : v.survey_section_id === 5
//                               ? TotalEvaporator
//                               : TotalCoolingTower
//                           )}
//                           %)
//                         </div>
//                       </div>
//                     ) : (
//                       <div key={k3} className="d-flex flex-row flex-wrap">
//                         <div className="w-50">
//                           {v3.other.YearOfInstallation}
//                         </div>
//                       </div>
//                     )
//                   )}
//                   {v2.input_type_id === 1 ||
//                   v.survey_section_id !== 1 ? null : (
//                     <div className="d-flex flex-row flex-wrap">
//                       <div className="w-50">Not Answered</div>
//                       <div className="w-50">
//                         -{" "}
//                         {isNaN(NotAnswered(v2.totalAnsCount, TotalBuilding))
//                           ? 0
//                           : NotAnswered(v2.totalAnsCount, TotalBuilding)}{" "}
//                         (
//                         {isNaN(
//                           Percentage(
//                             NotAnswered(v2.totalAnsCount, TotalBuilding),
//                             TotalBuilding
//                           )
//                         )
//                           ? 0
//                           : Percentage(
//                               NotAnswered(v2.totalAnsCount, TotalBuilding),
//                               TotalBuilding
//                             )}
//                         %)
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="page-break">.</div>

//           </div>
//         ))}
//     </div>
//   );
// };
// export default Text;
