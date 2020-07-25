import React, { Component, useEffect, useState } from "react";
import Highcharts from "highcharts/highcharts";
import HighChartsMore from "highcharts/highcharts-more";
import * as Colors from "../../../../config/Color.config";

HighChartsMore(Highcharts);

class RadialBarChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    HighChartsMore(Highcharts);
    Highcharts.chart("radialBar", {
      colors: Colors.ChartTheme2,
      chart: {
        type: "column",
        inverted: true,
        polar: true,
      },
      dataLabels: [
        {
          enabled: true,
          inside: true,
          style: {
            fontSize: "10px",
          },
        },
      ],

      title: {
        text: undefined,
      },
      tooltip: {
        // outside: true
      },
      credits: {
        enabled: false,
      },
      pane: {
        size: "100%",
        innerSize: "15%",
        endAngle: 270,
      },
      xAxis: {
        tickInterval: 0,
        labels: {
          align: "right",
          useHTML: true,
          allowOverlap: true,
          step: 0,
          y: 0,
          style: {
            fontSize: "10px",
          },
        },
        lineWidth: 4,
        categories: [
          "Less than 10",
          "10-20",
          "20-30",
          "30-40",
          "40-50",
          "More than 50",
        ],
      },
      yAxis: {
        crosshair: {
          enabled: false,
          color: "#333",
        },
        lineWidth: 0,
        tickInterval: 0,
        reversedStacks: true,
        endOnTick: true,
        showLastLabel: true,
      },
      legend: { padding: 0,enabled:false },
      plotOptions: {
        column: {
          stacking: "normal",
          borderWidth: 0,
          pointPadding: 0,
          groupPadding: 0,
          dataLabels: {
            enabled: true,
            allowOverlap: true,
          },
        },
      },

      series: this.props.data.reverse(),
    });
  }

  // componentWillUnmount() {
  //   this.chart.destroy();
  // }
  render() {

    return <div className="w-100" id="radialBar" style={{height:280}}></div>;
  }
}

export default RadialBarChart;
