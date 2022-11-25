import {
    createBrowserRouter,
  } from "react-router-dom";


import Main from "../layout/Main";
import ProductRoute from "../layout/ProductRoute";
import Home from "../Pages/Home/Home";
import HpProducts from "../Pages/Home/Products/HpProducts/HpProducts";
import Login from "../Pages/Shareds/Login/Login";
import SignUp from "../Pages/Shareds/SignUp/SignUp";

export const routs=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[{
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signUp",
            element:<SignUp></SignUp>
        },
    ]
    },

    {
        path:"/product",
        element:<ProductRoute/> ,
        children:[{
            path:"/product/hp",
            element:<HpProducts></HpProducts>
        }]
    },
  
])