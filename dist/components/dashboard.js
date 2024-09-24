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
        renderPlotlyGraphs();
    }, [data]);
    const handlePredict = async () => {
        try {
            const response = await axios.post('/api/predict');
            const newData = response.data;
            setData({
                UserID: newData.UserID,
                CPU_Usage: newData.CPU_Usage,
                Memory_Usage: newData.Memory_Usage,
                Network_Usage: newData.Network_Usage,
                Login_Time: newData.Login_Time,
                File_Access_Count: newData.File_Access_Count,
            });
        }
        catch (error) {
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
    return (React.createElement("div", { style: { padding: '20px' } },
        React.createElement("h2", null, "User Details"),
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
            React.createElement("div", { style: { width: '48%' } },
                React.createElement("h3", null, "CPU Usage (Bar Chart)"),
                React.createElement("div", { id: "cpu-usage-chart" })),
            React.createElement("div", { style: { width: '48%' } },
                React.createElement("h3", null, "Memory Usage (Pie Chart)"),
                React.createElement("div", { id: "memory-usage-chart" }))),
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginTop: '20px' } },
            React.createElement("div", { style: { width: '48%' } },
                React.createElement("h3", null, "Network Usage (Scatter Plot)"),
                React.createElement("div", { id: "network-usage-chart" })),
            React.createElement("div", { style: { width: '48%' } },
                React.createElement("h3", null, "Login Time (Line Chart)"),
                React.createElement("div", { id: "login-time-chart" }))),
        React.createElement("div", { style: { width: '48%', marginTop: '20px' } },
            React.createElement("h3", null, "File Access Count (Bar Chart)"),
            React.createElement("div", { id: "file-access-chart" }))));
};
export default Dashboard;
