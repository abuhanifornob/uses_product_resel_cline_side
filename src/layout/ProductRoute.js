import React from 'react';
import { Outlet } from 'react-router-dom';
import ProductsCategory from '../Pages/Home/Products/ProductsCategory/ProductsCategory';
import Footer from '../Pages/Shareds/Footer/Footer';
import Navbar from '../Pages/Shareds/Navbar/Navbar';

const ProductRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:flex'>
                <div>
              <ProductsCategory></ProductsCategory>
             
                </div>
                <div>
                  <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ProductRoute;