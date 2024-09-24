import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
const CustomSidebar = () => {
    const location = useLocation();
    const styles = {
        sidebar: {
            backgroundColor: '#2c3e50',
            height: '100vh',
            width: '250px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
        },
        linkList: {
            listStyleType: 'none',
            padding: 0,
        },
        linkItem: {
            marginBottom: '20px',
        },
        link: (isActive) => ({
            color: isActive ? 'white' : '#ecf0f1',
            textDecoration: 'none',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            padding: '10px 15px',
            borderRadius: '5px',
            backgroundColor: isActive ? '#1abc9c' : 'transparent',
            transition: 'background-color 0.3s',
        }),
        icon: (isActive) => ({
            marginRight: '10px',
            fontSize: '18px',
            color: isActive ? 'white' : '#ecf0f1',
        }),
        linkHover: {
            backgroundColor: '#34495e',
        },
    };
    return (React.createElement("div", { style: styles.sidebar },
        React.createElement("ul", { style: styles.linkList },
            React.createElement("li", { style: styles.linkItem },
                React.createElement(Link, { to: "/admin", style: styles.link(location.pathname === '/admin') },
                    React.createElement("i", { className: "fas fa-chart-pie", style: styles.icon(location.pathname === '/admin') }),
                    "Dashboard")),
            React.createElement("li", { style: styles.linkItem },
                React.createElement(Link, { to: "/admin/pages/home", style: styles.link(location.pathname === '/admin/pages/home') },
                    React.createElement("i", { className: "fas fa-home", style: styles.icon(location.pathname === '/admin/pages/home') }),
                    "User Data")))));
};
export default CustomSidebar;
