import React, { useCallback } from 'react';
import { ResponsiveBar } from '@nivo/bar'


const Bar = ({ data,reverse,axisLeft,layout,margin,legends,axisBottom}) => (
    
    <ResponsiveBar
        data={data}
        keys={[ 'value']}
        // gridYValues={1}
        
        indexBy="name"
        margin={margin}
        padding={0.6}
        layout={layout}
        reverse={reverse}
        colors={["#4084d2","#56afff","#898989","#dedede","#8ecc6a"]}

        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={axisBottom}
        axisLeft={axisLeft}
        labelSkipWidth={12}
        labelSkipHeight={27}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={legends}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)
export default Bar

