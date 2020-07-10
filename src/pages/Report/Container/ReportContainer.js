import React, { useEffect, useState, useRef } from "react";
import Report from "../component/graph/Report";
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
import Report1 from "../component/text/Report1";
import { ChartTheme1 } from "../../../config/Color.config";
const ReportContainer = (props) => {
  const [reportData, setReportData] = useState([]);
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");
  const [typeAndArea, setTypeAndArea] = useState([]);
  const [BMS, setBMS] = useState([]);
  const [ageData, setAgeData] = useState([]);

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
      }
    );
  }, []);
  const modifiedAgeData =
    ageData &&
    ageData.map((v, k) => ({
      name: v.optionChoiceName,
      uv: v.optionCount,
      fill: Colors.ChartTheme1[k],
    }));
  const BMSdata = BMS.map((v, k) => ({
    y: v.y,
    color: ChartTheme1[k],
    drilldown: { name: v.name, categories: v.categories, data: v.data },
  }));
  console.log("BMS====>", BMSdata);
  const TypeData = typeAndArea.map((v, k) => ({
    Area: v.option_choice_name,
    Factory: v.categories.Factory,
    ShoppingMall: v.categories.ShoppingMall,
    Hotel: v.categories.Hotel,
    "Residential Building": v.categories.ResidentialBuilding,
    "Office Building": v.categories.OfficeBuilding,
  }));
  console.log("Type", TypeData);

  const categoriesData = BMS.map((v, k) => v.name);
  // console.log("cat-->",categories);
  const componentRefChart = useRef();
  const componentRefTest = useRef();
  const range = (start, stop, step = 1) =>
    Array(Math.ceil((stop - start) / step))
      .fill(start)
      .map((x, y) => x + y * step);

  return (
    <div className="container">
      <h3 className="text-primary">Report</h3>
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a
            href="#reportTest"
            role="tab"
            class="nav-link active"
            data-toggle="tab"
          >
            Report with Text
          </a>
        </li>
        <li class="nav-item">
          <a href="#reportChart" role="tab" class="nav-link" data-toggle="tab">
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
            pageStyle="{ size: A4 portrait;}"
          />
          <div ref={componentRefTest} componentRef={componentRefTest}>
            <Cover
              reportData={reportData}
              startDate={startDate}
              endDate={endDate}
              viewType={userLevel === 2 ? null : viewType}
            />
            {/* {reportData.map((s, k) => {
              const surveyRange = range(0, s.survey_sections.length, 8);
              return surveyRange.map((r, index) => {
                return s.survey_sections
                  .slice(surveyRange[index], surveyRange[index + 1])
                  .map((survey, kk) => (
                    <Text
                    reportData={reportData}
                      // key={kk}
                      // surveySection={survey}
                      // reportData={s}
                      // startDate={startDate}
                      // endDate={endDate}
                      // viewType={userLevel === 2 ? null : viewType}
                    />
                  ));
              });
            })} */}
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
                startDate={startDate}
                endDate={endDate}
                viewType={userLevel === 2 ? null : viewType}
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
