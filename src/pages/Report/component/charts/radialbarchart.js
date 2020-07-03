import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
    {
        name: 'less than 10', uv: 200,  fill: '#9e9e9e',
    },
    {
        name: '10-20', uv:200, fill: '#7e7e7e',
    },
    {
        name: '20-30', uv: 100,  fill: '#fae3b2',
    },
    {
        name: '30-40', uv: 100,  fill: '#f7c972',
    },
    {
        name: '40-50', uv: 20, fill: '#45a1e0',
    },
    {
        name: 'More than 50', uv: 5,  fill: '#276bb9',
    }
];

const style = {
    top: 0,
    left: 320,
    lineHeight: '25px',
};

const RadialChart = () => {
    return (
        <RadialBarChart  width={500} fontSize={12} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={20} data={data} startAngle={90} endAngle={-180}>
            <RadialBar minAngle={15} label={{ position: 'end', fill: '#000' }} background dataKey="uv" />
            <Legend iconSize={15} width={200} height={160} layout="vertical" verticalAlign="middle" wrapperStyle={style} iconType={"circle"}/>
        </RadialBarChart>
    );

}




export default RadialChart;
