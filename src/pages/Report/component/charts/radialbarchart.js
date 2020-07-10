import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';



const style = {
    top: 0,
    left: 200,
    lineHeight: '18px',
    fontSize:12,
};

const RadialChart = ({data}) => {
    return (
        <RadialBarChart width={200} fontSize={10} height={200} cx={100} cy={100} innerRadius={20} outerRadius={100} barSize={20} data={data} startAngle={90} endAngle={-180}>
            <RadialBar minAngle={15} label={{ position: 'end', fill: '#000' }} background dataKey="uv" />
            <Legend iconSize={10} width={200} height={100} layout="vertical" verticalAlign="middle" wrapperStyle={style} iconType={"circle"}/>
        </RadialBarChart>
    );
}

export default RadialChart;
