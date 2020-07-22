import React from "react";
import * as Colors from "../../../../config/Color.config";
import { NotAnswered, Percentage } from "../../../../helper/reportHelper";
import Logo from "../../../../assets/images/Logo.png";
import withMedia from "react-media-query-hoc/dist/with-media";
import { ESIcon } from "../../../../tools/ES_Icon";
import TreeMap from "../charts/treeMap"
import ColumnBar from "../../component/charts/columnbar"
import ResponsiveLine1 from "../charts/linechart";


const Report1 = (props) => {
  const {
    reportData,
    TreeData,
    BarData,
    media,
  } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;
  const TotalChiller = reportData
    ? reportData.map((v, k) => v.building_count[0].chiller)[0]
    : null;

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
            <div className="row py-3">

              <div className="mx-2 pt-2 border border-dark col-4 justify-content-start"
                style={{ color: "#1e0707", fontSize: "20px" }}
              >
                <ESIcon
                  size={"40px"}
                  Icon={
                    <i class="fa fa-city" aria-hidden="true"></i>
                  }
                />
                  Total Buildings
                  <div className="text-right font-weight-bold" style={{ color: "#1e0707", fontSize: "40px" }}>
                  {`  ${TotalBuilding} `}</div>
              </div>
              <div className="mx-2 pt-2 border border-dark col-4 justify-content-start"
                style={{ color: "#1e0707", fontSize: "20px" }}
              >
                <ESIcon
                  size={"40px"}
                  Icon={
                    <i class="fas fa-fan"></i>
                  }
                />
                  Total Chiller
                  <div className="text-right font-weight-bold" style={{ color: "#1e0707", fontSize: "40px" }}>

                  {`  ${TotalChiller} `}</div>
              </div>
            </div>
            <div
              className="row justify-contents-center"
              style={{ minWidth: 150 }}
            >
              <div className="w-50">
                <ESIcon
                  size={"40px"}
                  Icon={
                    <i class="fas fa-fan"></i>
                  }
                />

                <h2 className="" style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                  Brands of Chiller
                </h2>
                {TreeData && Object.keys(TreeData).length &&
                  <TreeMap data={TreeData} />
                }
                
                {/* <TreeMap /> */}

                {/* <RadialChart data={modifiedAgeData} /> */}
              </div>
            </div>
            
                
                {/* <TreeMap /> */}

                {/* <RadialChart data={modifiedAgeData} /> */}
              
            <div className="row pt-5 pb-0 mb-0">
              <ESIcon
                size={"40px"}
                Icon={
                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                }
              />

              <h2 className="pt-1" style={{ color: Colors.PrimaryColor, fontSize: "20px" }}>
                Year of Installation
                </h2>

              <div style={{ width: 750, height: 400 }}>
                <ResponsiveLine1 data={data} /></div>
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

const data = [
  {
    "id": "Office Building",
    "data": [
      {
        "x": "Daikin",
        "y": 10
      },
      {
        "x": "York",
        "y": 21
      },
      {
        "x": "Trane",
        "y": 31
      },
      {
        "x": "Carrier",
        "y": 22
      },
      {
        "x": "Haier",
        "y": 34
      },
      {
        "x": "Mitsubishi",
        "y": 11
      },
      {
        "x": "Johnson Controls",
        "y": 13
      },
      {
        "x": "Ingersoll",
        "y": 19
      }
      
    ]
  },
  {
    "id": "Hotel",
    "data": [
      {
        "x": "Daikin",
        "y": 10
      },
      {
        "x": "York",
        "y": 11
      },
      {
        "x": "Trane",
        "y": 32
      },
      {
        "x": "Carrier",
        "y": 38
      },
      {
        "x": "Haier",
        "y": 35
      },
      {
        "x": "Mitsubishi",
        "y": 17
      },
      {
        "x": "Johnson Controls",
        "y": 24
      },
      {
        "x": "Ingersoll",
        "y": 21
      }
      
    ]
  },
  {
    "id": "Shopping Mall",
    "data": [
      {
        "x": "Daikin",
        "y": 8
      },
      {
        "x": "York",
        "y": 29
      },
      {
        "x": "Trane",
        "y": 13
      },
      {
        "x": "Carrier",
        "y": 24
      },
      {
        "x": "Haier",
        "y": 29
      },
      {
        "x": "Mitsubishi",
        "y": 31
      },
      {
        "x": "Johnson Controls",
        "y": 36
      },
      {
        "x": "Ingersoll",
        "y": 26
      }
      
    ]
  },
  {
    "id": "Residential Building",
    "data": [
      {
        "x": "Daikin",
        "y": 16
      },
      {
        "x": "York",
        "y": 18
      },
      {
        "x": "Trane",
        "y": 25
      },
      {
        "x": "Carrier",
        "y": 14
      },
      {
        "x": "Haier",
        "y": 38
      },
      {
        "x": "Mitsubishi",
        "y": 14
      },
      {
        "x": "Johnson Controls",
        "y": 17
      },
      {
        "x": "Ingersoll",
        "y": 19
      }
      
    ]
  },
  {
    "id": "Factory",
    "data": [
      {
        "x": "Daikin",
        "y": 28
      },
      {
        "x": "York",
        "y": 17
      },
      {
        "x": "Trane",
        "y": 17
      },
      {
        "x": "Carrier",
        "y": 29
      },
      {
        "x": "Haier",
        "y": 11
      },
      {
        "x": "Mitsubishi",
        "y": 15
      },
      {
        "x": "Johnson Controls",
        "y": 19
      },
      {
        "x": "Ingersoll",
        "y": 17
      }
      
    ]
  }
]


export default withMedia(Report1);
