import React, { useEffect, useState, useRef } from "react";
import ReportG1 from "../component/graph/Report1";
import Report from "../component/graph/graphReport";
import {
  UserReportAnswers,
  FetchGraphReport,
} from "../../../api/FetchReportAnswers";
import ReactToPrint from "react-to-print";
import { ESButton } from "../../../tools/ES_Button";
import * as Colors from "../../../config/Color.config";

import Cover from "../component/Cover";
import BackCover from "../component/BackCover";
import Text from "../component/text/textReport";
import { ChartTheme1 } from "../../../config/Color.config";

const ReportContainer = (props) => {
  const [reportData, setReportData] = useState([]);
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");
  const [typeAndArea, setTypeAndArea] = useState([]);
  const [BMS, setBMS] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [TreeMapData, setTreeData] = useState([]);
  const [Bardata, setBarData] = useState([]);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const startDate = urlParams.get("startDate");
  const endDate = urlParams.get("endDate");
  const userId = localStorage.getItem("userId");
  const viewType = localStorage.getItem("viewType");
  const userLevel = parseInt(localStorage.getItem("userLevel"));

  useEffect(() => {
    UserReportAnswers(
      { userId, surveyHeaderId, startDate, endDate, viewType, token },
      (err, data) => {
        setReportData(data.payload);
      }
    );
    FetchGraphReport(
      { userId, surveyHeaderId, startDate, endDate, viewType, token },
      (err, data) => {
        setTypeAndArea(data.payload[1]);
        setBMS(data.payload[2]);
        setAgeData(data.payload[0]);
        setTreeData(data.payload[3]);
        setBarData(data.payload[4]);
      }
    );
  }, []);
 

  const AgeData1 =
    ageData.length && ageData.map((v, k) => ( v.categories ))

  const AgeData2 =
    new Array(5).fill(null).map((v, k) => ({"less than 10":0,"10-20":0,"20-30":0,"30-40":0,"40-50":0,"More than 50":0 }));

    let AgeData3 = AgeData2.length&&AgeData2.map((item, i) => Object.assign({}, item, AgeData1[i]));

  console.log("5555555", AgeData1,AgeData3);
  const BMSdata = BMS.map((v, k) => ({
    y: v.y,
    color: ChartTheme1[k],
    drilldown: { name: v.name, categories: v.categories, data: v.data },
  }));

  const modifiedAgeData =
  ageData.length &&
  ageData.map((v, k) => ({
    name: v.building_type,
    data: AgeData3.map((v1,k1)=>Object.values(v1))[k],
  }));
  console.log("AGE====>", modifiedAgeData);
  const TypeData = typeAndArea.map((v, k) => ({
    Area: v.option_choice_name,
    Factory: v.categories.Factory,
    Hotel: v.categories.Hotel,
    ShoppingMall: v.categories.ShoppingMall,
    "Residential Building": v.categories.ResidentialBuilding,
    "Office Building": v.categories.OfficeBuilding,
  }));

  const BarData = Bardata.map((v, k) => ({
    years: v.years,
    Daikin: v.categories.Daikin,
    York: v.categories.York,
    Trane: v.categories.Trane,
    Carrier: v.categories.Carrier,
    Haier: v.categories.Haier,
    Mitsubishi: v.categories.Mitsubishi,
    "Johnson Controls": v.categories.JohnsonControls,
    Ingersoll: v.categories.Ingersoll,
  }));

  // const TreeMapData = TreeMapData.map((v, k) => ({
  //   Chiller: v.option_choice_name,
  //   Factory: v.categories.Factory,
  //   ShoppingMall: v.categories.ShoppingMall,
  //   Hotel: v.categories.Hotel,
  //   "Residential Building": v.categories.ResidentialBuilding,
  //   "Office Building": v.categories.OfficeBuilding,
  // }));

  // console.log("TreeMapData", TreeMapData);

  const categoriesData = BMS.map((v, k) => v.name);
  const componentRefChart = useRef();
  const componentRefTest = useRef();
  const range = (start, stop, step = 1) =>
    Array(Math.ceil((stop - start) / step))
      .fill(start)
      .map((x, y) => x + y * step);
  console.log(ageData);

  return (
    <div className="container">
      <h3 className="text-primary">Report</h3>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a
            href="#reportTest"
            role="tab"
            className="nav-link active"
            data-toggle="tab"
          >
            Report with Text
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#reportChart"
            role="tab"
            className="nav-link"
            data-toggle="tab"
          >
            Report
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="mt-4 tab-pane active" id="reportTest">
          <ReactToPrint
            trigger={() => (
              <div className="col-3 py-2 px-0" style={{ minWidth: 172 }}>
                <ESButton
                  text={"Print"}
                  small
                  leftIcon={<i className="fa fa-print pr-2" />}
                />
              </div>
            )}
            content={() => componentRefTest.current}
            pageStyle="{size: A4 portrait;}"
          />
          <div ref={componentRefTest} componentref={componentRefTest}>
            <Cover
              reportData={reportData}
              startDate={startDate}
              endDate={endDate}
              viewType={userLevel === 2 ? null : viewType}
            />
            <Text reportData={reportData} />
            <BackCover
              reportData={reportData}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
        <div className="tab-pane " id="reportChart">
          <div className="mt-4">
            <ReactToPrint
              trigger={() => (
                <div className="col-3 py-2 px-0" style={{ minWidth: 172 }}>
                  <ESButton
                    text={"Print"}
                    small
                    leftIcon={<i className="fa fa-print pr-2" />}
                  />
                </div>
              )}
              content={() => componentRefChart.current}
              // ref={el => (this.componentRef = el)}
              pageStyle="{ size: A4 portrait;}"
              // removeAfterPrint={true}
            />
            <div ref={componentRefChart} componentRef={componentRefChart}>
              <Cover
                reportData={reportData}
                startDate={startDate}
                endDate={endDate}
                viewType={userLevel === 2 ? null : viewType}
              />
              <Report
                reportData={reportData}
                modifiedAgeData={modifiedAgeData}
                BMSdata={BMSdata}
                categories={categoriesData}
                typeAndArea={TypeData}
              />
              <ReportG1
                reportData={reportData}
                TreeData={TreeMapData}
                BarData={BarData}
              />

              {/* <Report1 reportData={reportData} /> */}
              <BackCover
                reportData={reportData}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportContainer;
