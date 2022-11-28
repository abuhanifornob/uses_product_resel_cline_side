import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useRole from '../../Hooks/useRole';
import Footer from '../../Pages/Shareds/Footer/Footer';
import Navbar from '../../Pages/Shareds/Navbar/Navbar';

const DashboardRouts = () => {
    const { user ,loading } = useContext(AuthContext)
    console.log(user?.email);
    const [userRole,userRoleLoading] = useRole(user?.email);
    console.log("inside the Dahs Board",userRole);
    if(userRoleLoading || loading){
        return <progress className="progress w-56"></progress>
    }

  
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay">DashBoard</label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    
                    { console.log(useRole.role==="admin")
                    }
                        {
                           
                            userRole?.role === "admin" ? <>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link to="/dashboard/buyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/sellers">All Sellers</Link></li>
                            </> : userRole?.role === "seller" ?<>
                                <li><Link to="/dashboard/seller/addProduct">Add A Product</Link></li>
                                <li><Link to="/dashboard/seller/products">My Products</Link></li>
                                <li><Link to="/dashboard/seller/buyers">My Buyers</Link></li>
                            </>:<li><Link to='/dashboard/bookingsProducts'>My Orders</Link></li>
                        }

                        {/* <!-- Sidebar content here -->
                        <li><Link to='/dashboard'>My Orders</Link></li> */}

                        {/* Sellers Will See */}
                        {/* <li><Link to="">Add A Product</Link></li>
                        <li><Link to="">My Products</Link></li>
                        <li><Link to="">My Buyers</Link></li> */}
                        {/*  */}
                        {/* <li><Link to="/dashboard/allusers">All Users</Link></li>
                        <li><Link to="/dashboard/allusers">All Buyers</Link></li>
                        <li><Link to="/dashboard/allusers">All Sellers</Link></li> */}
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardRouts;
