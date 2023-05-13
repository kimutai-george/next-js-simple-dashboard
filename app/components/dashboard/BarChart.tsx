'use client'

import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { useState,useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const  BarChart= () => {
    const [chartData,setChartData] = useState({
        labels: [],
        datasets: []
    })
    const [chartOptions,setChartOptions] = useState({})

    useEffect(() => {
      setChartData({
        labels: ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'],
        datasets: [
                // {
                //     label: 'Sales $',
                //     date: [12333,34323,45443,55643,23455,45453,54555],
                //     borderColor: 'rgb(53,162,235,0.4)'
                //     backgroundColor: 'rgb(53,162,235,0.4)',
                // },
        ]
      })
    }, [])
    
    return ( 
        <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bar data={chartData} options={chartOptions}/>
        </div>
        </>
     );
}
 
export default BarChart;