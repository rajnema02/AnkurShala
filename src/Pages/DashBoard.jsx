import React from 'react'
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Components/Dashboard';
import FooterDash from '../Components/FooterDash';
import NavbarDash from '../Components/NavbarDash';
import '../assets/css/bootstrap.min.css';
import '../assets/css/now-ui-dashboard.css';
import '../assets/demo/demo.css';
const DashBoard = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel" id="main-panel">
        <NavbarDash />
        <Dashboard />
        <FooterDash />
      </div>
    </div>
  )
}

export default DashBoard
