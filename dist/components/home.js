import React, { useState } from 'react';
const Home = () => {
    const [data, setData] = useState({
        UserID: ['user1', 'user2', 'user3', 'user4', 'user5'],
        CPU_Usage: [60, 45, 75, 30, 90],
        Memory_Usage: [70, 65, 80, 40, 85],
        Network_Usage: [80, 35, 70, 60, 55],
        Login_Time: [10, 12, 8, 14, 6],
        File_Access_Count: [12, 8, 15, 7, 10],
    });
    const [suspiciousUsers, setSuspiciousUsers] = useState([]);
    const handlePredict = async () => {
        try {
            const threshold = 70;
            const suspicious = data.UserID.filter((_, index) => data.CPU_Usage[index] > threshold);
            setSuspiciousUsers(suspicious);
        }
        catch (error) {
            console.error('Error predicting suspicious users:', error);
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
        React.createElement("div", { style: { marginTop: '20px' } },
            React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' } },
                React.createElement("h3", { style: { fontSize: '24px', fontWeight: 'bold', color: '#333' } }, "User Data"),
                React.createElement("button", { onClick: handlePredict, style: {
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    } }, "Predict Suspicious Users")),
            React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif', marginTop: '20px' } },
                React.createElement("thead", null,
                    React.createElement("tr", { style: { backgroundColor: '#f2f2f2' } }, ['ID', 'UserID', 'CPU Usage', 'Memory Usage', 'Network Usage', 'Login Time', 'File Access Count'].map((header) => (React.createElement("th", { key: header, style: {
                            border: '1px solid #dddddd',
                            padding: '12px',
                            textAlign: 'left',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                        } }, header))))),
                React.createElement("tbody", null, tableData.map((row) => (React.createElement("tr", { key: row.id, style: {
                        backgroundColor: suspiciousUsers.includes(row.userID) ? '#ffcccc' : '#f9f9f9',
                        transition: 'background-color 0.3s',
                    } },
                    React.createElement("td", { style: { border: '1px solid #dddddd', padding: '12px' } }, row.id),
                    React.createElement("td", { style: { border: '1px solid #dddddd', padding: '12px' } }, row.userID),
                    React.createElement("td", { style: { border: '1px solid #dddddd', padding: '12px' } },
                        row.CPU_Usage,
                        "%"),
                    React.createElement("td", { style: { border: '1px solid #dddddd', padding: '12px' } },
                        row.Memory_Usage,
                        "%"),
                    React.createElement("td", { style: { border: '1px solid #dddddd', padding: '12px' } },
                        row.Network_Usage,
                        "%"),
                    React.createElement("td", { style: { border: '1px solid #dddddd', padding: '12px' } },
                        row.Login_Time,
                        " hrs"),
                    React.createElement("td", { style: { border: '1px solid #dddddd', padding: '12px' } }, row.File_Access_Count)))))))));
};
export default Home;
