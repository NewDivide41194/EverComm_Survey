import React from 'react';
import { ResponsivePie } from '@nivo/pie'

const PieChart = ({ data,startAngle,endAngle,legends,innerRadius,cornerRadius,padAngle}) => {
    return(
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 30, bottom: 80, left: 50 }}
        startAngle={startAngle}
        endAngle={endAngle}
        padAngle={padAngle}
        innerRadius={innerRadius}
        cornerRadius={cornerRadius}
        colors={["#4084d2","#56afff","#898989","#dedede","#8ecc6a"]}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}   
        legends={legends}
       
    />)
    }
export default PieChart;