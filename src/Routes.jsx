import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Order from './Pages/Order/Order';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:name',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    }
    
    
])
export default Routes;