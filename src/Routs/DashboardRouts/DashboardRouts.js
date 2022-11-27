import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shareds/Footer/Footer';
import Navbar from '../../Pages/Shareds/Navbar/Navbar';

const DashboardRouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardRouts;
