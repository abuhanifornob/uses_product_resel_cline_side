import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductModal from '../ProductModal/ProductModal';
import ProductsInformation from './ProductsInformation';

const AvailabelProducts = () => {
    const products=useLoaderData();
    const [bookProduct,setBookProduct]=useState(null)
    console.log(bookProduct)

    return (
        <div>
            <h3 className='text-2xl text-primary text-center '>Ours Available Products for You </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-auto'>
                {
                    products.map(product=><ProductsInformation
                    key={product._id}
                    product={product}
                    setBookProduct={setBookProduct}
                    ></ProductsInformation>)
                }
        </div>
        <div>
            {
            bookProduct &&
            <ProductModal
            product={bookProduct}
            setBookProduct={setBookProduct}
            ></ProductModal>
            }
        </div>
        </div>
    );
};

export default AvailabelProducts;