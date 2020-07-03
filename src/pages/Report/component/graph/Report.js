import React from "react";
import * as Colors from "../../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../../helper/reportHelper";
import PieChart from "../charts/Piechart";
import Bar from "../charts/Barchart";
import Logo from "../../../../assets/images/Logo.png";
import withMedia from "react-media-query-hoc/dist/with-media";
import { StackedBar } from "../charts/StackedBar";
import RadialChart from "../charts/radialbarchart";
import { ESIcon } from "../../../../tools/ES_Icon";
const Report = (props) => {
  const { reportData, startDate, endDate, viewType, media } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;


    const typesOfBuildings=reportData.map((v,k)=>v.survey_sections[0].questions[0].option_choices.map((v,k)=>v.option_choice_name))[0]
    console.log(typesOfBuildings);
    
  const ChartData = (question_index, type) =>
    reportData.map((v, k) =>
      v.survey_sections[0].questions
        .map((v1, k1) => v1.option_choices)
      [question_index].map((v2, k2) => type === "pie"
        ? {
          id: v2.option_choice_name,
          label: v2.option_choice_name,
          value: v2.totalAns === null ? 0 : v2.totalAns,
        } :type==="radial"?
        {
          name: v2.option_choice_name, uv: v2.totalAns, fill: Colors.ChartTheme1[k2],
        } :type==="stackedBar"?
      ({
          Area: v2.option_choice_name,
          "Office Building": v2.totalAns,
          Hotel:  v2.totalAns,
          ShoppingMall:  v2.totalAns,
          "Residential Building":  v2.totalAns,
          Factory: 158,
        })
        : {
          name: v2.option_choice_name,
          value: v2.totalAns === null ? 0 : v2.totalAns,
        })
    )[0]

  return (
    <div
      className="container shadow"
      style={{
        width: "8.27in",
        height: "15.66in",
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
            <div
              className="justify-contents-center row"
              style={{ minWidth: 150 }}
            >
              <div
                className="w-50"
              >
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Type of Building
                </h2>
              </div>
              <div className="w-50">
                <ESIcon size={'30px'} Icon={<i class="fa fa-calendar-check-o" aria-hidden="true"></i>} />
                <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Age of buildings
                </h2>
                <RadialChart data={ChartData(2,"radial")} />

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
                  Building Management System (BMS)
                </h2>

              </div>
            </div>
            <div className="w-100" style={{
              height: window.innerWidth <= 980 ? 300 : 310,
            }}>
              <ESIcon size={'30px'} Icon={<i class="pt-1 fas fa-expand-arrows-alt"></i>} />


              <h2 style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                Area of Building
                </h2>

              <div style={{ height: 400 }}>
                <StackedBar data={ChartData(0,"stackedBar")} />
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


const data1 = [
  {
    Area: "below 2000",
    "Office Building": 40,
    Hotel: 182,
    ShoppingMall: 101,
    "Residential Building": 82,
    Factory: 158,
  },
  {
    Area: "2000-5000",
    "Office Building": 116,
    Hotel: 5,
    ShoppingMall: 140,
    "Residential Building": 70,
    Factory: 33,
  },
  {
    Area: "5000-10000",
    "Office Building": 181,
    Hotel: 12,
    ShoppingMall: 97,
    "Residential Building": 75,
    Factory: 160,
  },
  {
    Area: "10000-15000",
    "Office Building": 18,
    Hotel: 75,
    ShoppingMall: 144,
    "Residential Building": 148,
    Factory: 131,
  },
  {
    Area: "above 15000",
    "Office Building": 1,
    Hotel: 32,
    ShoppingMall: 139,
    "Residential Building": 53,
    Factory: 6,
  }
];