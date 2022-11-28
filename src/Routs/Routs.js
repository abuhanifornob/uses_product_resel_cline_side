import {
    createBrowserRouter,
  } from "react-router-dom";
import AllBuyers from "../DashBoard/AllUsers/AllBuyers/AllBuyers";
import AddProduct from "../DashBoard/AllUsers/AllSellers/AddProduct/AddProduct";
import AllSellers from "../DashBoard/AllUsers/AllSellers/AllSellers";
import MyProducts from "../DashBoard/AllUsers/AllSellers/MyProducts/MyProducts";
import AllUsers from "../DashBoard/AllUsers/AllUsers";
import DashBoard from "../DashBoard/DashBoard";
import MyBookingsProducts from "../DashBoard/MyBookingsProducts/MyBookingsProducts";


import Main from "../layout/Main";
import ProductRoute from "../layout/ProductRoute";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import FourOfFour from "../Pages/FourOfFour/FourOfFour";
import Home from "../Pages/Home/Home";
import AvailabelProducts from "../Pages/Home/Products/AvailabelProducts/AvailabelProducts";

import Login from "../Pages/Shareds/Login/Login";
import SignUp from "../Pages/Shareds/SignUp/SignUp";
import DashboardRouts from "./DashboardRouts/DashboardRouts";
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
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"/about",
            element:<About></About>
        }
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
        element:<PrivetRouts><DashboardRouts></DashboardRouts></PrivetRouts>,
        children:[
            {
            path:"/dashboard",
            element:<DashBoard></DashBoard>
        },
            {
            path:"/dashboard/bookingsProducts",
            element:<MyBookingsProducts></MyBookingsProducts>
        },
        {
         path:"/dashboard/allusers",
         element:<AllUsers></AllUsers>
        },
        {
            path:"/dashboard/buyers",
            element:<AllBuyers></AllBuyers>
        },
        {
            path:"/dashboard/sellers",
            element:<AllSellers></AllSellers>
        },
        {
            path:"/dashboard/seller/products",
            element:<MyProducts></MyProducts>
        },
        {
          path:"/dashboard/seller/addProduct",
          element:<AddProduct></AddProduct>
        },
      

    ]
    },

    {
        path:"*",
        element:<FourOfFour></FourOfFour>
    }
  
])