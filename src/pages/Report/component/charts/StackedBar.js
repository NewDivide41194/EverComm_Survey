import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import * as Colors from "../../../../config/Color.config"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const StackedBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={[
      "Office Building",
      "ShoppingMall",
      "Hotel",
      "Factory",
      "Residential Building",
    ].sort()}
    indexBy="Area"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    maxValue={data.length}
    padding={0.5}
    enableGridY={false}
  
    // layout="horizontal"
    colors={Colors.ChartTheme1}
    // defs={[
    //     {
    //         id: 'dots',
    //         type: 'patternDots',
    //         background: 'inherit',
    //         color: '#38bcb2',
    //         size: 4,
    //         padding: 1,
    //         stagger: true
    //     },
    //     {
    //         id: 'lines',
    //         type: 'patternLines',
    //         background: 'inherit',
    //         color: '#eed312',
    //         rotation: -45,
    //         lineWidth: 6,
    //         spacing: 10
    //     }
    // ]}
    // fill={[
    //     {
    //         match: {
    //             id: 'Factory'
    //         },
    //         id: 'dots'
    //     },
    //     {
    //         match: {
    //             id: 'ShoppingMall'
    //         },
    //         id: 'lines'
    //     }
    // ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "#Building Area",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "#Amount of Building",
      legendPosition: "middle",
      legendOffset: -40,
      format: (e) => Math.floor(e) === e && e,

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
