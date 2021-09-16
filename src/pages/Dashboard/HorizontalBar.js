import React from 'react';
import { Bar } from 'react-chartjs-2';

// const data = {
//   labels: ['João', 'Juraci', 'Jael', 'Joel', 'Murilo', 'Maciel'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
      
//     },
//   ],
// };


const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Qual é o canal mais utilizado?',
    },
  },
};

const HorizontalBarChart = (props) => (
  <>
    <Bar data={props.data} options={options} />
  </>
);

export default HorizontalBarChart;