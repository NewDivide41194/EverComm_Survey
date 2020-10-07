import React, { useEffect, useState, useRef } from "react";
import ReportG1 from "../component/graph/graphReport1";
import Report from "../component/graph/graphReport";
import {
  UserReportAnswers,
  FetchGraphReport,
} from "../../../api/FetchReportAnswers";
import ReactToPrint from "react-to-print";
import { ESButton } from "../../../tools/ES_Button";
import Cover from "../component/Cover";
import BackCover from "../component/BackCover";
import { ChartTheme1 } from "../../../config/Color.config";
import TextContainer from "./TextReportContainer";
import ESLoading from "../../../tools/ES_Loading";

const ReportContainer = (props) => {
  const [reportData, setReportData] = useState([]);
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
  const token = localStorage.getItem("token");
  const [typeAndArea, setTypeAndArea] = useState([]);
  const [BMS, setBMS] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [TreeMapData, setTreeData] = useState([]);
  const [chillerInstallation, setChillerInstallation] = useState([]);
  const bTypeId = localStorage.getItem("bTypeId");
  const countryId = localStorage.getItem("countryId");
  const surveySectionId = localStorage.getItem("surveySectionId");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userId = localStorage.getItem("userId");
  const viewType = localStorage.getItem("viewType");
  const userLevel = parseInt(localStorage.getItem("userLevel"));
  const [surveyData, setSurveyData] = useState([]);
  const [answerData, setAnswerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const buildingId=localStorage.getItem("buildingId")
  const buildingTypeId=localStorage.getItem("buildingTypeId")
  const [graph, setGraph] = useState(false);
  useEffect(() => {
    // const countryId = 48;
    // surveyHeaderId === 10
    //   ?
    setIsLoading(true);
    UserReportAnswers(
      {
        userId,
        surveyHeaderId,
        viewType,
        countryId,
        buildingId,
        buildingTypeId,
        token,
      },
      (err, data) => {
        setReportData(data.payload);
        setIsLoading(false);
      }
    );
  }, []);

  const _handleGraphClick = () => {
    FetchGraphReport(
      { userId, surveyHeaderId, viewType, token },
      (err, data) => {
        setTypeAndArea(data.payload[1]);
        setBMS(data.payload[2]);
        setAgeData(data.payload[0]);
        setTreeData(data.payload[3]);
        setChillerInstallation(data.payload[4]);
      }
    );
  };
  const AgeData1 = ageData.length && ageData.map((v, k) => v.categories);

  const AgeData2 = new Array(5).fill(null).map((v, k) => ({
    "less than 10": 0,
    "10-20": 0,
    "20-30": 0,
    "30-40": 0,
    "40-50": 0,
    "More than 50": 0,
  }));

  let AgeData3 =
    AgeData2.length &&
    AgeData2.map((item, i) => Object.assign({}, item, AgeData1[i]));

  const BMSdata = BMS.map((v, k) => ({
    y: v.y,
    color: ChartTheme1[k],
    drilldown: { name: v.name, categories: v.categories, data: v.data },
  }));

  const modifiedAgeData =
    ageData.length &&
    ageData.map((v, k) => ({
      name: v.building_type,
      data: AgeData3.map((v1, k1) => Object.values(v1))[k],
    }));
  const TypeData = typeAndArea.map((v, k) => ({
    Area: v.option_choice_name,
    Factory: v.categories.Factory,
    Hotel: v.categories.Hotel,
    "Residential Building": v.categories.ResidentialBuilding,
    "Office Building": v.categories.OfficeBuilding,
    ShoppingMall: v.categories.ShoppingMall,
  }));

  const chillerInstallationData = chillerInstallation.map((v, k) => ({
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

  const yearCount = Math.max.apply(
    Math,
    chillerInstallation.map(function (o) {
      return o.count;
    })
  );
  const typeCount = Math.max.apply(
    Math,
    typeAndArea.map(function (o) {
      return o.count;
    })
  );

  const categoriesData = BMS.map((v, k) => v.name);
  const componentGraphRef = useRef();
  const componentTextRef = useRef();
  
  return isLoading ? (
    <ESLoading />
  ) : (
    <div className="container">
      <h3 className="text-primary">Report</h3>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a
            href="#reportText"
            role="tab"
            className="nav-link active"
            data-toggle="tab"
          >
            Report with Text
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#reportGraph"
            role="tab"
            className="nav-link"
            data-toggle="tab"
            onClick={() => _handleGraphClick()}
          >
            Report
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="mt-4 tab-pane active" id="reportText">
          <ReactToPrint
            trigger={() => (
              <div className="col-3 py-2 px-0" style={{ minWidth: 172 }}>
                <ESButton
                  text={"Print"}
                  leftIcon={<i className="fa fa-print pr-2" />}
                />
              </div>
            )}
            content={() => componentTextRef.current}
            pageStyle="{size: A4 portrait;}"
          />
          <div ref={componentTextRef}>
            <Cover
              reportData={reportData}
              viewType={userLevel === 2 ? null : viewType}
            />
            <br /> 
            {reportData && reportData.length > 0 && (
              <TextContainer
                reportData={reportData}
                answerData={answerData}
                surveyData={surveyData}
              />
            )}
            <br />
            <BackCover reportData={reportData} />
          </div>
        </div>
        {/* {surveyHeaderId !== 10 && (
          <GraphReport
            componentGraphRef={componentGraphRef}
            reportData={reportData}
            userLevel={userLevel}
            viewType={viewType}
            BMSdata={BMSdata}
            categoriesData={categoriesData}
            TypeData={TypeData}
            typeCount={typeCount}
            yearCount={yearCount}
            chillerInstallationData={chillerInstallationData}
            TreeMapData={TreeMapData}
            modifiedAgeData={modifiedAgeData}
          />
        )} */}
      </div>
    </div>
  );
};

export default ReportContainer;

const GraphReport = (props) => {
  const {
    componentGraphRef,
    reportData,
    userLevel,
    viewType,
    BMSdata,
    categoriesData,
    TypeData,
    typeCount,
    yearCount,
    chillerInstallationData,
    TreeMapData,
    modifiedAgeData,
  } = props;
  return (
    <div className="tab-pane mt-4" id="reportGraph">
      <ReactToPrint
        trigger={() => (
          <div className="col-3 py-2 px-0" style={{ minWidth: 172 }}>
            <ESButton
              text={"Print"}
              leftIcon={<i className="fa fa-print pr-2" />}
            />
          </div>
        )}
        content={() => componentGraphRef.current}
        pageStyle="{ size: A4 portrait;}"
      />
      <div ref={componentGraphRef}>
        <Cover
          reportData={reportData}
          viewType={userLevel === 2 ? null : viewType}
        />
        <Report
          reportData={reportData}
          modifiedAgeData={modifiedAgeData}
          BMSdata={BMSdata}
          categories={categoriesData}
          typeAndArea={TypeData}
          buildingTypeCount={typeCount}
        />
        <ReportG1
          reportData={reportData}
          TreeData={TreeMapData}
          BarData={chillerInstallationData}
          yearCount={yearCount}
        />
        <BackCover reportData={reportData} />
      </div>
    </div>
  );
};
