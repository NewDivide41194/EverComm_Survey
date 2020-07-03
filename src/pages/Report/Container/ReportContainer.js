import React, { useEffect, useState, useRef } from "react";
import Report from "../component/graph/Report";
import { UserReportAnswers } from "../../../api/FetchReportAnswers";
import ReactToPrint from "react-to-print";
import { ESButton } from "../../../tools/ES_Button";
import Cover from "../component/Cover";
import BackCover from "../component/BackCover";
import Text from "../component/text/TextReport";
import Report1 from "../component/text/Report1";
const ReportContainer = (props) => {
  const [reportData, setReportData] = useState([]);
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");

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
  }, []);

  console.log("Report Data---->", reportData);
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
        <div className="tab-pane" id="reportTest">
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

              {reportData.map((s, k) => {
                const surveyRange = range(0, s.survey_sections.length, 8);
                return surveyRange.map((r, index) => {
                  return s.survey_sections
                    .slice(surveyRange[index], surveyRange[index + 1])
                    .map((survey, kk) => (

                      <Report1
                        surveySection={survey}
                        reportData={s}
                        startDate={startDate}
                        endDate={endDate}
                        viewType={userLevel === 2 ? null : viewType}
                      />
                    ));
                });
              })}

              <BackCover
                reportData={reportData}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
        </div>
        <div className="tab-pane active" id="reportChart">
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
