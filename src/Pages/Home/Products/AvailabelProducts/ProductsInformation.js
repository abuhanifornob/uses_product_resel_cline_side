import React from 'react';

const ProductsInformation = ({product,setBookProduct}) => {
    const{images,location,postedTime,productName,productCategory,reselPrice,yearsOfUse,price}=product;
    return (
        <div className="card w-96 md:w-80 lg:w-72 bg-base-100 shadow-xl">
        <figure><img src={images} alt="Product" /></figure>
        <div className="card-body">
    
          <p>Product Information for make your esy Decision for Product Buy.</p>
          <ul className='list-outside list-disc'>
            <li>Product Name :{productCategory}</li>
            <li>Product Model :{productName}</li>
            <li>Location :{location}</li>
            <li>Years of Use :{yearsOfUse}</li>
            <li>Posted Time :{postedTime}</li>
            <li>Orginal Price :$ {price}</li>
            <li>Sealing Price :Only $ {reselPrice}</li>
            
          </ul>
          <div className="card-actions justify-end">
          <label onClick={()=>setBookProduct(product)} className="btn btn-primary" htmlFor="booking-modal">Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default ProductsInformation;