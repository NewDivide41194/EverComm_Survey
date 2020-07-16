import React, { useCallback } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import * as Colors from "../../../../config/Color.config"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const ColumnBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'Daikin', 'York', 'Trane','Carrier','Haier', 'Mitsubishi','Johnson Controls','Ingersoll' ]}
        indexBy="years"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        colors={Colors.ChartTheme1}
      
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: 'Years',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'No.of Chiller',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 23,
                translateY: 44,
                itemsSpacing: 0,
                itemWidth: 80,
                itemHeight: 10,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 17,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

export default ColumnBar;
