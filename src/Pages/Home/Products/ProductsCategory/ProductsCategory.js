import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCategory = () => {
    return (
        <div className='mx-8 lg:mx-auto '>
            <h2 className="">
                <span className='text-xl font-bold'>Our Product Category</span>
            </h2>
            <ul className="menu bg-base-100 w-96 p-2 rounded-box menu-horizontal lg:menu-vertical">

                <li><Link to="/product/hp">HP</Link></li>
                <li><a>Lenevo</a></li>
                <li><a>Deel</a></li>
                <li><a>Tushiba</a></li>
            </ul>
        </div>
    );
};

export default ProductsCategory;