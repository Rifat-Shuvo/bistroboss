import React from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
const location = useLocation()
// console.log(location);
const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;