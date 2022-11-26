import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList/CategoryList';

const ProductsCategory = () => {
    const[productsCategory,setProductsCategory]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:5000/productsCategory")
        .then(res=>res.json())
        .then(data=>setProductsCategory(data))

    },[])
    console.log(productsCategory);
    return (
        <div className='mx-8 lg:mx-auto '>
            <h2 className="">
                <span className='text-xl font-bold'>Our Product Category</span>
            </h2>
            <ul className="menu bg-base-100 w-96 p-2 rounded-box menu-horizontal lg:menu-vertical">
               
                {/* <li><Link to="/product/hp">HP</Link></li>
                <li><a>Lenevo</a></li>
                <li><a>Deel</a></li>

                <li><a>Tushiba</a></li> */}
                {
                productsCategory.map(categoryName=><CategoryList
                key={categoryName._id}
                categoryName={categoryName}
                ></CategoryList>)
                }
            </ul>
        </div>
    );
};

export default ProductsCategory;