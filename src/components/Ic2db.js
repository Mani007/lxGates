import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import moment from 'moment';

function Ic2db() {
  // State to store chart data and loading/error states
 const [chartData, setChartData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get('http://localhost:5000/ic2db100');
       const fetchedData = response.data;

       // Assuming the fetched data structure is something like this:
       // {
       //   timestamps: ['2024-12-01', '2024-12-02', ...],
       //   values: [20, 22, 19, 24, 23, ...]
       // }

       // Mapping over the data to prepare the chart format
       setChartData({
         labels: fetchedData.map((rows)=> moment(rows[1]).format('MMMM Do YYYY, h:mm:ss a')), // Timestamps (X axis)
         datasets: [
           {
             label: 'Vehicle Entering at a point', // Dataset label
             data: fetchedData.map((rows)=> rows[0]), // Data for the Y axis
             borderColor: 'rgb(75, 35, 155)',
             backgroundColor: 'rgba(75, 192, 192, 0.2)',
             fill: true, // Fill the area under the line
             tension: 0.1, // Line smoothness
             pointRadius: 5, // Radius of the data points
           },
         ],
       });

       setLoading(false);
     } catch (err) {
       setError('Failed to fetch data');
       setLoading(false);
     }
   };

   fetchData();
 }, []);

 // Handle loading state
 if (loading) return <div>Loading...</div>;

 // Handle error state
 if (error) return <div>{error}</div>;

 // Chart.js options
 const options = {
   responsive: true,
   plugins: {
     title: {
       display: true,
       text: 'Vehicles entering at IC2',
     },
     tooltip: {
       mode: 'index',
       intersect: false,
     },
   },
   scales: {
     x: {
       type: 'category', // For categorical (e.g., date) values
       title: {
         display: true,
         text: 'Date',
       },
     },
     y: {
       type: 'linear', // Y-axis should be linear for numerical data
       title: {
         display: true,
         text: 'Number of vehicle entering at a point',
       },
       // min: 0, // Optional: set minimum Y-axis value
       // max: 30, // Optional: set maximum Y-axis value
     },
   },
 };

 return (
   <div>
     {/* <h2>Vehicles entering at Ponte Vasco da Gama</h2> */}
     <Line data={chartData} options={options} />
   </div>
 );
}

export default Ic2db