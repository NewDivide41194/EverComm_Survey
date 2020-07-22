import React, { Component, useEffect, useState } from "react";
import Highcharts from "highcharts/highcharts";
import HighChartsMore from 'highcharts/highcharts-more';
import * as Colors from "../../../../config/Color.config"

class RadialBarChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("777777",this.props.data);
    HighChartsMore(Highcharts)
    Highcharts.chart('radialBar', {
      colors: Colors.ChartTheme1,
      chart: {
        type: 'column',
        inverted: true,
        polar: true
      },
      dataLabels: [{
        enabled: true,
        inside: true,
        style: {
          fontSize: '10px'
        }
      }],

      title: {
        text:undefined
      },
      tooltip: {
        // outside: true
      },
      credits: {
        enabled: false,
      },
      pane: {
        size: '80%',
        innerSize: '15%',
        endAngle: 270
      },
      xAxis: {
        tickInterval: 0,
        labels: {
          align: 'right',
          // useHTML: true,
          allowOverlap: true,
          step: 0,
          y: 0,
          style: {
            fontSize: '10px'
          }
        },
        lineWidth: 4,
        categories: [
          'Less than 10',
          '10-20',
          '20-30',
          '30-40',
          '40-50',
          'more than 50'
        ]
      },
      yAxis: {
        crosshair: {
          enabled: false,
          color: '#333'
        },
        lineWidth: 0,
        tickInterval: 0,
        reversedStacks: true,
        endOnTick: true,
        showLastLabel: true
      },


      plotOptions: {
        column: {
          stacking: 'normal',
          borderWidth: 0,
          pointPadding: 0,
          groupPadding:0.10,
          dataLabels: {
            enabled: true,
            allowOverlap: true
          }
        }
      },
  
      series:this.props.data
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }
  render() {
    return (
      <div id="radialBar"></div>
    )
  }
}

export default RadialBarChart