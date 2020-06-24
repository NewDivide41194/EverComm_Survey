import React from 'react';
import { ResponsivePie } from '@nivo/pie'

const PieChart = ({ data,startAngle,endAngle,legends,innerRadius,cornerRadius,padAngle,enableRadialLabels}) => {
    return(
    <ResponsivePie
        enableRadialLabels={enableRadialLabels}

        data={data}
        margin={{ top: 10, right: 70, bottom: 70, left: 70 }}
        startAngle={startAngle}
        endAngle={endAngle}
        padAngle={padAngle}
        innerRadius={innerRadius}
        cornerRadius={cornerRadius}
        colors={["#4084d2","#56afff","#898989","#dedede","#8ecc6a"]}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={0}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={-24}
        radialLabelsLinkDiagonalLength={32}
        radialLabelsLinkHorizontalLength={12}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}   
        legends={legends}
       
    />)
    }
export default PieChart;