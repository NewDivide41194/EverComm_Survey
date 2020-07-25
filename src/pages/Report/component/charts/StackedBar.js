import React from "react";
import { ResponsiveBar } from "@nivo/bar";

export const StackedBar = ({ data, horizontal, dataKeys, index, bottomLegend, leftLegend, chartTheme,maxCount /* see data tab */ }) => (
  console.log("Stack bar is ", maxCount),
  <ResponsiveBar
    data={data}
    keys={dataKeys}
    indexBy={index}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    maxValue={maxCount}
    padding={0.3}
    enableGridY={false}
    layout={horizontal ? "horizontal" : "vertical"}
    colors={chartTheme}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    
    axisBottom={{
      xAxis: {
        allowDecimals: false
      },
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend:  bottomLegend ,
      legendPosition: "middle",
      legendOffset: 32,
      format: horizontal?(e) => Math.floor(e) === e && e:e=>e,
    }}
    axisLeft={{
      xAxis: {
        allowDecimals: false
      },
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend:  leftLegend ,
      legendPosition: "middle",
      legendOffset: -40,
      format: horizontal?e=>e:(e) => Math.floor(e) === e && e,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "top-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100, 
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);