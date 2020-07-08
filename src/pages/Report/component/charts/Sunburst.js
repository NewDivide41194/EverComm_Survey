
import React from "react"
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Sunburst extends React.Component {
    componentDidMount() {

        var colors = Highcharts.getOptions().colors,
        categories = [
            'Office Building',
            'Hotel',
            'Shopping Mall',
            'Factory',
            'Resendial Building'
        ],
        data = [
            {
                y: 90,
                color: '#276bb9',
                drilldown: {
                    name: 'Office Building',
                    categories: [
                        'Siemens',
                        'Johnson Controls',
                        'Daikin',
                        'Haier',
                        'Mitsubishi'
                    ],
                    data: [
                        20,
                        30,
                        15,
                        15,
                        10
                    ]
                }
            },
            {
                y: 150,
                color: '#45a1e0',
                drilldown: {
                    name: 'Hotel',
                    categories: [
                        'Siemens',
                        'Johnson Controls',
                        'Daikin',
                        'Haier',
                        'Mitsubishi'
                    ],
                    data: [
                        40,
                        20,
                        30,
                        25,
                        35
                    ]
                }
            },
            {
                y: 210,
                color: '#d8b26a',
                drilldown: {
                    name: 'Shopping Mall',
                    categories: [
                        'Siemens',
                        'Johnson Controls',
                        'Daikin',
                        'Haier',
                        'Mitsubishi'
                    ],
                    data: [
                       50,
                       20,
                       30,
                       80,
                       30
                    ]
                }
            },
            {
                y: 180,
                color: "#82c937",
                drilldown: {
                    name: 'Factory',
                    categories: [
                        'Siemens',
                        'Johnson Controls',
                        'Daikin',
                        'Haier',
                        'Mitsubishi'
                    ],
                    data: [
                        20,
                        40,
                        30,
                        50,
                        40
                    ]
                }
            },
            {
                y: 240,
                color: 'gray',
                drilldown: {
                    name: 'Resendial Building',
                    categories: [
                        'Siemens',
                        'Johnson Controls',
                        'Daikin',
                        'Haier',
                        'Mitsubishi'
                    ],
                    data: [
                        40,
                        45,
                        45,
                        50,
                        60
                    ]
                }
            }
        ],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;
    
    
    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {
    
        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
    
        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.color(data[i].color).brighten(brightness).get()
            });
        }
    }
    
    // Create the chart
    Highcharts.chart('container', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Pie chart for Basic Information'
        },
        
        plotOptions: {
            pie: {
             startAngle: -120,
                endAngle: 120,
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Browsers',
            data: browserData,
            size: '70%',
            innerSize:"70%",
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -30
            }
        }, {
            name: 'Versions',
            data: versionsData,
            size: '100%',
            innerSize: '80%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                        this.y + '%' : null;
                }
            },
            id: 'versions'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    series: [{
                    }, {
                        id: 'versions',
                        dataLabels: {
                            enabled: false
                        }
                    }]
                }
            }]
        }
    });
    }
   
    render() {
      return <HighchartsReact  ref="chart"></HighchartsReact>;
    }
  }
export default Sunburst