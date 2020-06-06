import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data, country, graphType}) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(initialDailyData);
        fetchAPI();
        window.scrollTo(0, 0); // this prevents the webapge from scrolling to the top when the different graphs are selected
    }, []); // this will only happen once 

    let countryName = country;
    let message = `Current state in ${country}`;
    if (!country) {
        countryName = "Global";
        message = "Current Global state";
    }

    const lineChart = (
        dailyData[0] ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: 
                    [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, 
                    {
                        data: dailyData.map((data) => data.recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        fill: true,
                    }, 
                    {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5',
                        fill: true,
                    },
                    ],
                }}
                options=
                {{
                    scales: {
                        yAxes: [{
                          scaleLabel: {
                            display: true,
                            labelString: 'Number of cases per category'
                          }
                        }],
                        xAxes: [{
                          scaleLabel: {
                            display: true,
                            labelString: 'Date data was recieved'
                          }
                        }],
                    },
                    title: { display: true, text:`Line graph - ${message}`}     
                }}
            />
            ) : "Line Graph Unavailable"
    );

    console.log("Line - This is in Chart.js and this is data for infected: " + dailyData.map((data) => data.confirmed));
    console.log("Line - This is in Chart.js and this is data for recovered: " + dailyData.map((data) => data.recovered));
    console.log("Line - This is in Chart.js and this is data for deaths: " + dailyData.map((data) => data.deaths));

    const barChart = (
        data.confirmed ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: 
                    [{
                        label: 'People',
                        backgroundColor: 
                        [
                            'rgba(0, 0, 255, 0.5', // infected = blue
                            'rgba(0, 255, 0, 0.5', // recovered = green
                            'rgba(255, 0, 0, 0.5', // deaths = red
                        ], 
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options=
                {{
                    scales: {
                        yAxes: [{
                          scaleLabel: {
                            display: true,
                            labelString: 'Number of cases per category'
                          }
                        }],
                        },     
                    legend: { display: false},
                    title: { display: true, text:`Bar Graph - ${message}`}
                }}
            />
        ) : "Bar Graph Unavailable"
    );

    // if there is a country chosen, then we display a bar chart for that country
    // otherwise display the line chart for the global values
    return (
        <div className={styles.container}>
            {graphType=="barGraph" ? barChart : lineChart} 
        </div>
    )
}

export default Chart;