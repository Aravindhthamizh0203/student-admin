import React from 'react'
import Card from './Card';
import { Doughnut, Line } from 'react-chartjs-2';
import { createSearchParams, useParams, useSearchParams } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);


function Dashboard() {
    const [searchParams, setParams] = useSearchParams()
    console.log([...searchParams]);
    console.log(Object.fromEntries([...searchParams]));
    return (<>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

        </div>
        <div className="row">
            <Card title="No.Students" value="4579" color="info" />
            <Card title="No.Teachers" value="136" color="primary" />
            <Card title="No.cleaners" value="19" color="warning" />
            <Card title="No.Office staff" value="26" color="success" />
        </div>
        <div className='row'>
            <div className='col-lg-8'>
                <Line options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'month',
                        },
                    },
                }} data={{
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July'
                    ],
                    datasets: [{
                        label: 'Income in thousand',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(240, 9, 9)',
                        tension: 0.1
                    }]
                }} />;
            </div>

            <div className='col-lg-4'>
                <Doughnut data={{
                    labels: [
                        'Student',
                        'Teacher',
                        'Cleaner',
                        'Office staff'
                    ],
                    datasets: [{
                        label: 'Staff',
                        data: [4579, 136, 19, 26],
                        backgroundColor: [
                            'rgb(0, 76, 135)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 0, 0)',
                            'rgb(0,255,0)'
                        ],
                        hoverOffset: 4
                    }]
                }} />

            </div>
        </div>

    </>

    )
}

export default Dashboard;