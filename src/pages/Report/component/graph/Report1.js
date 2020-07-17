import React from "react";
import * as Colors from "../../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../../helper/reportHelper";
import Logo from "../../../../assets/images/Logo.png";
import withMedia from "react-media-query-hoc/dist/with-media";
import { ESIcon } from "../../../../tools/ES_Icon";
import TreeMap from "../charts/treeMap"
import ColumnBar from "../../component/charts/columnbar"

const Report1 = (props) => {
  const {
    reportData,
    TreeData,
    BarData,
    media,
  } = props;

  function getUnique(arr, index) {
    const unique = arr
      .map((e) => e[index])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  return (
    <div
      className="container border"
      style={{
        width: "8.27in",
        height: "15.66in",
        position: "relative",
        // boxShadow:"0px 10 4px 0"
      }}
    >
      <div className="row py-3 justify-content-between border-bottom">
        <div className="pl-4" style={{ width: "50%" }}>
          <img
            src={Logo}
            style={{
              height: "40px",
            }}
            alt="logo"
          />
        </div>
        <div
          className="pr-4 pt-2"
          style={{
            fontSize: media.mobile ? "10px" : "15px",
            color: Colors.SecondaryColor,
          }}
        >
          COOLING SYSTEM
        </div>
      </div>
      <div
        className="py-2 px-4 row border-bottom pdfBg"
        style={{ background: Colors.PrimaryColor }}
      >
        <span
          style={{
            color: "#fafafa",
            fontSize: media.mobile ? "18px" : "20px",
          }}
        >
          Chiller Information
        </span>
      </div>
      {reportData && reportData.length ? (
        reportData.map((v, k) => (
          <div className="mt-4 px-4" key={k}>
            <div
              className="row justify-contents-center"
              style={{ minWidth: 150 }}
            >
              <div className="w-50">
                <ESIcon
                  size={"40px"}
                  Icon={
                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                  }
                />
                
                <h2 className="pt-1" style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Age of buildings
                </h2>
                {TreeData && Object.keys(TreeData).length&&
                <TreeMap data={TreeData}/>
                }
                {/* <TreeMap /> */}
               
                {/* <RadialChart data={modifiedAgeData} /> */}
              </div>
            </div>
            <div className="row pt-5 pb-0 mb-0">
            <ESIcon
                  size={"40px"}
                  Icon={
                    <i class="fa fa-building" aria-hidden="true"></i>
                  }
                />
                <h2 className="pt-1" style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Building Management System (BMS)
                </h2>
                
                <div style = {{width: 750, height: 400}}>
                  <ColumnBar data = {BarData}/></div>
            </div>

          </div>
        ))
      ) : 
      (
        <h3 className="mt-5 text-center text-warning">No Data!</h3>
      )
      }
      <div
        className="row justify-content-center py-2 text-light pdfBg"
        style={{
          background: Colors.PrimaryColor,
          position: "absolute",
          bottom: 0,
          width: "100%",
          fontSize: 12,
        }}
      >
        Page-2
      </div>
    </div>
  );
};


export default withMedia(Report1);
