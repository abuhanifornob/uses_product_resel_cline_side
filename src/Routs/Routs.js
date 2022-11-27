import {
    createBrowserRouter,
  } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";


import Main from "../layout/Main";
import ProductRoute from "../layout/ProductRoute";
import Home from "../Pages/Home/Home";
import AvailabelProducts from "../Pages/Home/Products/AvailabelProducts/AvailabelProducts";

import Login from "../Pages/Shareds/Login/Login";
import SignUp from "../Pages/Shareds/SignUp/SignUp";
import PrivetRouts from "./PrivetRouts/PrivetRouts";

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
        path:"/products",
        element:<ProductRoute/> ,
        children:[{
            path:"/products/:name",
            element:<AvailabelProducts></AvailabelProducts>,
            loader:({params})=>fetch(`http://localhost:5000/products/${params.name}`)
        }]
    },
  
    {
        path:"/dashboard",
        element:<PrivetRouts><DashBoard></DashBoard></PrivetRouts>
    },
  
])