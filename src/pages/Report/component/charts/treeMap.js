import React, { Component } from 'react';

// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as Colors from "../../../../config/Color.config";


class Treemap extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

    function am4themes_animated(target) {
      if (target instanceof am4core.ColorSet) {
        target.list = Colors.ChartTheme1.map(v=>am4core.color(v))
      }
    }
    am4core.useTheme(am4themes_animated)


    // Themes end


    var data = this.props.data
    function processData(data) {
      var treeData = [];

      var smallBrands = { name: "Other", children: [] };

      for (var brand in data) {
        var brandData = { name: brand, children: [] }
        var brandTotal = 0;
        for (var model in data[brand]) {
          brandTotal += data[brand][model];
        }

        for (var model in data[brand]) {
          // do not add very small
          if (data[brand][model] > 0) {
            brandData.children.push({ name: model, count: data[brand][model] });
          }
        }

        // only bigger brands
        if (brandTotal > 0) {
          treeData.push(brandData);
        }
      }

      return treeData;
    }

    // create chart
    var chart = am4core.create("chartdiv", am4charts.TreeMap);
    chart.padding(0, 0, 0, 0);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    // only one level visible initially
    chart.maxLevels = 2;
    // define data fields
    chart.dataFields.value = "count";
    chart.dataFields.name = "name:count";
    chart.dataFields.children = "children";
    /* chart.homeText = "Chiller in Building"; */

    // enable navigation
    chart.navigationBar = new am4charts.NavigationBar();
    chart.zoomable = false;

    // level 0 series template
    var level0SeriesTemplate = chart.seriesTemplates.create("0");
    level0SeriesTemplate.strokeWidth = 4;

    // by default only current level series bullets are visible, but as we need brand bullets to be visible all the time, we modify it's hidden state
    level0SeriesTemplate.bulletsContainer.hiddenState.properties.opacity = 1;
    level0SeriesTemplate.bulletsContainer.hiddenState.properties.visible = true;
    // create hover state
    var columnTemplate = level0SeriesTemplate.columns.template;
    var hoverState = columnTemplate.states.create("hover");

    // darken

    chart.legend = new am4charts.Legend();


    hoverState.adapter.add("fill", function (fill, target) {
      if (fill instanceof am4core.Color) {
        return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
      }
      return fill;
    })

    // add logo
    var image = columnTemplate.createChild(am4core.Image);
    image.opacity = 0.15;
    image.align = "center";
    image.valign = "middle";
    image.width = am4core.percent(80);
    image.height = am4core.percent(80);

    // add adapter for href to load correct image
    /* image.adapter.add("href", function (href, target) {
        var dataItem = target.parent.dataItem;
        if (dataItem) {
            return "https://www.amcharts.com/lib/images/logos/" + dataItem.treeMapDataItem.name.toLowerCase() + ".png";
        }
    }); */

    // level1 series template
    var level1SeriesTemplate = chart.seriesTemplates.create("1");
    level1SeriesTemplate.columns.template.fillOpacity = 0;
    level1SeriesTemplate.columns.template.strokeOpacity = 0.4;

    var bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
    bullet1.locationX = 0.5;
    bullet1.locationY = 0.5;
    bullet1.label.text = "{name} : {value}";
    bullet1.label.fill = am4core.color("#000000");
    bullet1.label.background.fill=am4core.color("#ffffff")
    bullet1.label.fontSize = 12;
    bullet1.label.truncate=false
    // bullet1.label.fullWords

    // bullet1.label.fillOpacity = 0.7;

    chart.data = processData(data);
    chart.logo.disabled = true;
    console.log(chart.data);

    chart.sorting="none"
  }
  omponentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (<
      div id="chartdiv"
      style={
        {
          width: "750px",
          height: "432px"
        }
      }
    />
    );
  }
}

export default Treemap;





