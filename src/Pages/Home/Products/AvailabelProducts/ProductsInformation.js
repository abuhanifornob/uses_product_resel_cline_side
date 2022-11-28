import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaBeer, FaCheck } from "react-icons/fa";

const ProductsInformation = ({product,setBookProduct}) => {
    const{images,location,postedTime,productName,productCategory,reselPrice,yearsOfUse,price,sellersName,verified}=product;
    console.log(product);
    return (
        <div className="card w-96 md:w-80 lg:w-72 bg-base-100 shadow-xl">
        <figure><img src={images} alt="Product" /></figure>
        <div className="card-body">
    
          <p className='text-2xl font-bold'>Product Information</p>
          <ul className='list-outside list-disc'>
            <li>Product Name :{productCategory}</li>
            <li>Product Model :{productName}</li>
            <li>Location :{location}</li>
            <li>Years of Use :{yearsOfUse}</li>
            <li>Posted Time :{postedTime}</li>
            <li>Orginal Price :$ {price}</li>
            <li>Sealing Price :Only $ {reselPrice}</li>
            
          </ul>
          <div className="card-actions flex justify-between justify-center items-center">
            <div className='flex justify-center items-center gap-3'>
            <label className='text-xl font-bold text-primary'>{sellersName }</label>
            {
              verified &&
              <label> <FaCheck className='text-primary text-3xl' /></label>
            }
             
            </div>
           <div>
           <label onClick={()=>setBookProduct(product)} className="btn btn-primary" htmlFor="booking-modal">Book Now</label>
           </div>
          
          </div>
        </div>
      </div>
    );
};

export default ProductsInformation;