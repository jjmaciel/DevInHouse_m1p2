import React from 'react';

import HorizontalBarChart from './HorizontalBar';
import LineChart from './Line';
import DoughnutChart from './Doughnut';
import PieChart from './Pie.js';


function Dashboard() {
    return (
        <div className="col-md-12">
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <HorizontalBarChart />
                </div>
            </div>
            <br/><br/>
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <LineChart />
                </div>
            </div>
            <br/><br/>
             <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <DoughnutChart />
                </div>
            </div>
            
            <br/><br/>
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <PieChart />
                </div>
            </div>



        </div >
    )
};

export default Dashboard;