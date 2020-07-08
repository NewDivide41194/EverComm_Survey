import React from "react";
import * as Colors from "../../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../../helper/reportHelper";
import withMedia from "react-media-query-hoc/dist/with-media";
import Logo from "../../../../assets/images/Logo.png";

const Report1 = (props) => {
  
  const { reportData, media,surveySection } = props;  
  const TotalBuilding = reportData && reportData.building_count[0].Number_of_buildings
                                   
  return (
    <div className="container">
          <div
            className="container text-dark"
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
                <div
                    className=""
                    style={{ fontSize: media.mobile ? "15px" : "15px" }}>
                      Cooling System
                </div>
              <div className="text-right " style={{ width: "50%" }}>
                <img
                    src={Logo}
                    style={{height: "18px",}}
                    alt="logo"
                />
              </div>
            </div>
            <h4 className="pt-2" style={{ color: Colors.PrimaryColor }}>
              {surveySection.section_name}
            </h4>
            <hr />
            <div
              className="row d-fle
                x flex-row flex-wrap"
            >
              <div className="col-12 font-weight-bold text-success">

              <div>
                    Total Buildings
                    {` - ${TotalBuilding} ${
                      TotalBuilding === 0 ? "(0%)" : "(100%)"
                    } `}
                  </div>
              </div>
              {/* {surveySection.questions.map((v2, k2) => ( */}
                {surveySection.questions.map((v2, k2) => (
                <div key={k2} className="col-lg-6 py-2">
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
                            v3.totalAns,TotalBuilding
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
                  surveySection.survey_section_id !== 1 ? null : (
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
    </div>
  );
};

export default withMedia(Report1);

