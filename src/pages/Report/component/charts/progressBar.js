import React, { Component} from 'react';

// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


class ProgressBar extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    
      function am4themes_mytheme(target) {
        if (target instanceof am4core.ColorSet) {
          target.list = [
            am4core.color(""),
            am4core.color("#E7DA4F"),
            am4core.color("blue"),
            am4core.color("#DF3520"),
            am4core.color("#64297B"),
            am4core.color("#232555")
          ];
        }
      }
      


    am4core.useTheme(am4themes_mytheme);
    
    // Themes end

    /**
     * Chart design taken from Samsung health app
     */

    var chart = am4core.create("chartdiv1", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    // chart.disabled = true;

    // chart.paddingRight = 30;
    chart.paddingLeft = 0;

    chart.data = this.props.data;

    // TotalBuilding = data && reportData.building_count[0].Number_of_buildings;
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.minWidth = 30;
    categoryAxis.renderer.tooltip.dx = -40;
    categoryAxis.renderer.grid.template.disabled = false;

    // categoryAxis.renderer.disabled = true;

    categoryAxis.renderer.labels.template.fontSize = 10;
    categoryAxis.renderer.labels.template.dx = -10;
    // categoryAxis.renderer.labels.template.verticalCenter = "middle";
    // categoryAxis.renderer.labels.template.horizontalCenter = "left";
    chart.logo.disabled = true;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.fillOpacity = 0.3;
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.baseGrid.strokeOpacity = 0;
    valueAxis.renderer.labels.template.dy = 0;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.labels.template.disabled = true; //good place


    // valueAxis.disabled = true;

    var series = chart.series.push(new am4charts.ColumnSeries);
    series.dataFields.valueX = "data";

    series.dataFields.categoryY = "name";
    series.tooltipText = "{valueX.value}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.dy = -30;
    // series.calculatePercent = true; //
    series.columnsContainer.zIndex = 100;
    am4core.percent(60);
  
    series.columns.template.adapter.add("fill", (fill, target) => {
      return target.dataItem ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    
  // series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{data.va}: [bold]{valueY.percent}%[/] ({valueY}M)";
    // series.disabled = true;

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text ="{data} ({percentage}%)"
    valueLabel.label.paddingLeft=5
    valueLabel.label.fontSize = 10;
    valueLabel.label.horizontalCenter = "left";
    valueLabel.label.truncate=false

    var columnTemplate = series.columns.template;
    columnTemplate.height = 10;
    columnTemplate.column.cornerRadius(60, 10, 60, 10);
    columnTemplate.strokeOpacity = 0;
    chart.colors.list = [
      
      am4core.color("#fae3b2"),
      am4core.color("#d8b26b"),
      am4core.color('#3b8bbe'),
      am4core.color("#004ea8"),
      am4core.color("#7bbf34"),
      
    ];
    //  columnTemplate.fill =am4core.useTheme('bvlue');
    // series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueX", min: am4core.color("blue"), max: am4core.color("#5faa46") });
    // columnTemplate.disabled = true;

    // series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueX", min: am4core.useTheme(am4themes_myTheme), max: am4core.color("#0066cc") });
    series.mainContainer.mask = undefined;

    var cursor = new am4charts.XYCursor();
    chart.cursor = cursor;
    cursor.lineX.disabled = true;
    cursor.lineY.disabled = true;
    cursor.behavior = "none";
    cursor.disabled = true;
    var hoverState = columnTemplate.states.create("hover");

    var bullet = columnTemplate.createChild(am4charts.CircleBullet);
    bullet.circle.radius = 8;
    bullet.valign = "middle";
    bullet.align = "left";
    bullet.isMeasured = true;
    bullet.interactionsEnabled = false;
    bullet.horizontalCenter = "right";
    bullet.interactionsEnabled = false;
    
    // bullet.disabled = true;

    var image = bullet.createChild(am4core.Image);
    image.width = 60;
    image.height = 60;
    image.horizontalCenter = "middle";
    image.verticalCenter = "middle";
    image.propertyFields.href = "{data.percent}%";

    image.adapter.add("mask", function (mask, target) {
      var circleBullet = target.parent;

      return circleBullet.circle;
    })


    var outlineCircle = bullet.createChild(am4core.Circle);
    outlineCircle.adapter.add("radius", function (radius, target) {
      var circleBullet = target.parent;
      return circleBullet.circle.pixelRadius + 10;
    })
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return ( <
      div id = "chartdiv1"
      style = {
        {
          height: 280
        }
      } /> 
    );
  }
}

export default ProgressBar;