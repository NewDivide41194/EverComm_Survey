import React, { Component } from "react";

import Highcharts from "highcharts/highcharts";
import Building from "../../../../assets/images/building.png";

class Sunburst extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var categories = this.props.categories,
      data = this.props.BMSdata,
      TypeData = [],
      BMSData = [],
      i,
      j,
      dataLen = data.length,
      drillDataLen,
      brightness;
console.log("=====>",data);

    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {
      // add browser data
      TypeData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color,
      });

      // add version data
      drillDataLen = data[i].drilldown.data.length;
      for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - j / drillDataLen / 5;
        BMSData.push({
          name: data[i].drilldown.categories[j],
          y: data[i].drilldown.data[j],
          color: Highcharts.color(data[i].color).brighten(brightness).get(),
        });
      }
    }

    // Create the chart
    Highcharts.chart("container", {
      chart: {
        type: "pie",
      },

      plotOptions: {
        pie: {
          startAngle: -120,
          endAngle: 120,
          shadow: false,
          center: ["50%", "50%"],
        },
      },
      tooltip: {
        valueSuffix: "%",
      },
      title: {
        text: undefined,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Types",
          data: TypeData,
          size: "70%",
          innerSize: "70%",
          dataLabels: {
            formatter: function () {
              return this.y > 0 ? this.point.name : null;
            },
            color: "#ffffff",
            distance: -30,
          },
        },
        {
          name: "Versions",
          data: BMSData,
          size: "100%",
          innerSize: "80%",
          dataLabels: {
            formatter: function () {
              // display only if larger than 1
              return this.y > 0
                ? "<b>" + this.point.name + ":</b> " + this.y + "%"
                : null;
            },
          },
          id: "versions",
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 400,
            },
            chartOptions: {
              series: [
                {},
                {
                  id: "versions",
                  dataLabels: {
                    enabled: false,
                  },
                },
              ],
            },
          },
        ],
      },
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }
  render() {
    return (
      <div style={{ height: 410, width: 700 }} className="py-2">
        <div id="container"></div>
        <div
          className="text-center"
          style={{
            width: 110,
            position: "absolute",
            marginTop: "-250px",
            marginLeft: "290px",
            fontWeight: "bold",
          }}
        >
          <img
            src={Building}
            className="w-100"
            style={{ opacity: 0.7 }}
            alt="building"
          />
          <div className="w-100">Total Building {this.props.totalBuilding}</div>
        </div>
      </div>
    );
  }
}

export default Sunburst;
