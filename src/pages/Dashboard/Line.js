
import React from 'react';
import { Line } from 'react-chartjs-2';


const options = {
    plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Gráfico do Timer',
        },
      },

    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const LineChart = (props) => (
    <>
        <Line data={props.data} options={options} />
    </>
);

export default LineChart;