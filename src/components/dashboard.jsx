import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plotly from 'plotly.js-dist-min';

const Dashboard = () => {
  const [data, setData] = useState({
    'UserID': ['user1', 'user2', 'user3', 'user4', 'user5'],
    'CPU_Usage': [60, 45, 75, 30, 90],
    'Memory_Usage': [70, 65, 80, 40, 85],
    'Network_Usage': [80, 35, 70, 60, 55],
    'Login_Time': [10, 12, 8, 14, 6],
    'File_Access_Count': [12, 8, 15, 7, 10],
  });

  // Function to render the Plotly graphs
  const renderPlotlyGraphs = () => {
    Plotly.newPlot('cpu-usage-chart', [
      {
        x: data.UserID,
        y: data.CPU_Usage,
        type: 'bar',
        name: 'CPU Usage',
      },
    ]);

    Plotly.newPlot('memory-usage-chart', [
      {
        labels: data.UserID,
        values: data.Memory_Usage,
        type: 'pie',
        name: 'Memory Usage',
      },
    ]);

    Plotly.newPlot('network-usage-chart', [
      {
        x: data.UserID,
        y: data.Network_Usage,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Network Usage',
        line: { shape: 'spline' },
      },
    ]);

    Plotly.newPlot('login-time-chart', [
      {
        x: data.UserID,
        y: data.Login_Time,
        type: 'line',
        name: 'Login Time',
      },
    ]);

    Plotly.newPlot('file-access-chart', [
      {
        x: data.UserID,
        y: data.File_Access_Count,
        type: 'bar',
        name: 'File Access Count',
        marker: { color: 'rgba(58, 71, 80, 0.6)' },
      },
    ]);
  };

  useEffect(() => {
    // Call render function after component mounts
    renderPlotlyGraphs();
  }, [data]); // Re-render charts when data changes

  // Function to call the predict API
  const handlePredict = async () => {
    try {
      // Replace with the actual API URL
      const response = await axios.post('/api/predict');
      const newData = response.data;

      // Update the table and chart data with the new predicted data
      setData({
        UserID: newData.UserID,
        CPU_Usage: newData.CPU_Usage,
        Memory_Usage: newData.Memory_Usage,
        Network_Usage: newData.Network_Usage,
        Login_Time: newData.Login_Time,
        File_Access_Count: newData.File_Access_Count,
      });
    } catch (error) {
      console.error('Error predicting data:', error);
    }
  };

  const tableData = data.UserID.map((userID, index) => ({
    id: index + 1,
    userID,
    CPU_Usage: data.CPU_Usage[index],
    Memory_Usage: data.Memory_Usage[index],
    Network_Usage: data.Network_Usage[index],
    Login_Time: data.Login_Time[index],
    File_Access_Count: data.File_Access_Count[index],
  }));

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Details</h2>

      {/* Plotly Graphs Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%' }}>
          <h3>CPU Usage (Bar Chart)</h3>
          <div id="cpu-usage-chart"></div>
        </div>

        <div style={{ width: '48%' }}>
          <h3>Memory Usage (Pie Chart)</h3>
          <div id="memory-usage-chart"></div>
        </div>
      </div>



      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ width: '48%' }}>
          <h3>Network Usage (Scatter Plot)</h3>
          <div id="network-usage-chart"></div>
        </div>

        <div style={{ width: '48%' }}>
          <h3>Login Time (Line Chart)</h3>
          <div id="login-time-chart"></div>
        </div>
      </div>
      

      <div style={{ width: '48%', marginTop: '20px' }}>
        <h3>File Access Count (Bar Chart)</h3>
        <div id="file-access-chart"></div>
      </div>

 


    </div>
  );
};

export default Dashboard;
