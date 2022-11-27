import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList/CategoryList';

const ProductsCategory = () => {
    //const[productsCategory,setProductsCategory]=useState([]);
    const{data:productsCategory=[],isLoading}=useQuery({
        queryKey:["productsCategory"],
        queryFn:async()=>{
            const res= await fetch("http://localhost:5000/productsCategory");
            const data= await res.json();
            return data
        }
    })
    
    // useEffect(()=>{
    //     fetch("http://localhost:5000/productsCategory")
    //     .then(res=>res.json())
    //     .then(data=>setProductsCategory(data))

    // },[])
    // console.log(productsCategory);
    return (
        <div className='mx-8 lg:mx-auto '>
            <h2 className="">
                <span className='text-xl font-bold'>Our Product Category</span>
            </h2>
            <ul className="menu bg-base-100 w-80 p-2 rounded-box menu-horizontal lg:menu-vertical">
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