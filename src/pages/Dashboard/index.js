import React from 'react';

import HorizontalBarChart from './HorizontalBar';
import LineChart from './Line';
// import DoughnutChart from './Doughnut';
// import PieChart from './Pie.js';

import api from '../../Services/Api';

const dataBar = {};
const dataLine = {};

async function handleChannels() {

    let lChannel = [];
    let dChannel = [];
    let res = await api.get('./messages');
    res.data.map((i) => {
        if (lChannel.indexOf(i.channel) < 0) {
            lChannel.push(i.channel);
            dChannel[lChannel.indexOf(i.channel)] = 1;
        } else {
            dChannel[lChannel.indexOf(i.channel)]++;
        }
    });

    dataBar.labels = lChannel;
    dataBar.datasets = [{
        label: 'Canais utilizados',
        backgroundColor: [
            'rgba(155, 230, 149)',
            'rgba(147, 158, 230)',
            'rgba(219, 143, 160)',
        ],
        data: dChannel,
    }];

};

async function handleTimes() {
    let res = await api.get('./messages');
    let arrayTimer = []
    res.data.map((i) => {
        arrayTimer.push((i.timer).replace(':', ''));
    });

    dataLine.labels = ['1', '2', '3', '4', '5', '6', '7', '8'];
    dataLine.datasets = [{
        label: 'Timer',
        data: arrayTimer,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
    }];

}



handleChannels();
handleTimes();


function Dashboard() {

    return (
        <div className="col-md-12">
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <HorizontalBarChart data={dataBar} />
                </div>
            </div>
            <br /><br />
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <LineChart data={dataLine} />
                </div>
            </div>
            <br /><br />
            {/* 
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <DoughnutChart />
                </div>
            </div>

            <br /><br />
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <PieChart />
                </div>
            </div> */}



        </div >
    )
};

export default Dashboard;