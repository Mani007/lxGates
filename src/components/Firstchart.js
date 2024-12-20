import React,  { useState, useEffect } from 'react'
import axios from 'axios';
function Firstchart() {
    // State to store fetched data and loading/error state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/vasco');  // API endpoint
        setData(response.data); // Assuming the API returns the data directly in response.data
        setLoading(false); // Stop loading when data is fetched
      } catch (err) {
        setError(err.message); // Handle errors
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  // Display loading state, error state, or fetched data
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
     <div>
      <h1>Fetched Data</h1>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Firstchart