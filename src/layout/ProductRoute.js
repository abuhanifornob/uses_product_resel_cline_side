import React from 'react';
import { Outlet } from 'react-router-dom';
import ProductsCategory from '../Pages/Home/Products/ProductsCategory/ProductsCategory';
import Navbar from '../Pages/Shareds/Navbar/Navbar';

const ProductRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:flex'>
                <div>
              <ProductsCategory></ProductsCategory>
             
                </div>
                <div>
                  <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default ProductRoute;