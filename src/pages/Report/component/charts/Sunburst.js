import React from 'react';
// import { ResponsivePie } from '@nivo/pie'
import { ResponsiveSunburst } from '@nivo/sunburst'

const PieChart = ({ data, enableRadialLabels}) => {
    console.log("=====>",data);
    
    return(
    <ResponsiveSunburst
        enableRadialLabels={enableRadialLabels}
        data={data}
        colors={["#4084d2","#56afff","#898989","#dedede","#8ecc6a"]}
        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
        identity="name"
        value="loc"
        cornerRadius={2}
        borderWidth={1}
        borderColor="white"
        childColor={{ from: 'color' }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
    />)
    }
export default PieChart;