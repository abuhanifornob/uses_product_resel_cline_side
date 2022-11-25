import React from 'react';
import { Link } from 'react-router-dom';
import ProductsCategory from '../ProductsCategory/ProductsCategory';
import banner from "../../../../assets/Banner.jpg"

const ProductsBanner = () => {
    return (
        <div className='lg:flex lg:mx-auto mx-8 mt-8'>
                <ProductsCategory></ProductsCategory>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">WELL COME OUR SHOPE</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary transition duration-700 ease-in-out">YOU GET START BUY</button>
                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default ProductsBanner;