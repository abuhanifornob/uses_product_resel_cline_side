import {
    createBrowserRouter,
  } from "react-router-dom";


import Main from "../layout/Main";
import ProductRoute from "../layout/ProductRoute";
import Home from "../Pages/Home/Home";
import HpProducts from "../Pages/Home/Products/HpProducts/HpProducts";

export const routs=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[{
            path:"/",
            element:<Home></Home>
        },
        // {
        //     path:"/login",
        //     element:<Login></Login>
        // },
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