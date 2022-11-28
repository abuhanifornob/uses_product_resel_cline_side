import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const imgbbKey = process.env.REACT_APP_imgbbKey;
    const navigate = useNavigate();

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
        console.log(url);

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgBbData => {
                console.log(imgBbData.data.url)
                if (imgBbData.success) {
                    console.log(imgBbData.data.url);
                    const product = {
                        productName: data.productModel,
                        productCategory: data.productName,
                        price: data.originalPrice,
                        productCondition: data.productCondition,
                        images: imgBbData.data.url,
                        mobileNumber: data.phoneNumber,
                        location: data.location,
                        description: data.description,
                        reselPrice: data.sellingPrice,
                        yearsOfUse: data.yearOfUses,
                        postedTime: data.time,
                        sellersName: user.displayName,
                        email: user.email

                    }
                    console.log(product);
                    fetch("http://localhost:5000/products", {
                        method: "POST",
                        headers: {
                            'content-type': "application/json",

                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Product Add Success !!!")
                                navigate("/dashboard/seller/products");
                            }

                        })
                }

            })

    }
    return (
        <div className=' flex justify-center items-center my-10' >
            <div className='w-[600px] p-7 shadow-xl'>
                <h1 className='text-center'>Add Product</h1>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <select {...register("productName", { required: true })} className="select select-bordered w-full ">

                            <option value="Toshiba">Toshiba</option>
                            <option value="Hp">Hp</option>
                            <option value="Lenovo">Lenovo</option>
                            <option value="Dell">Dell</option>

                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Model</span>
                        </label>
                        <input {...register("productModel", { required: true })} type="text" placeholder="Enter Product Model" className="input input-bordered w-full" />
                        {errors.productModel && <span className='text-yellow-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Condition</span>
                        </label>
                        <select {...register("productCondition", { required: true })} className="select select-bordered w-full ">
                            <option value="good">Good</option>
                            <option value="excellent">Excellent</option>
                            <option value="fair">Fair</option>

                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Images</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" placeholder="Chose Product Images" className="input input-bordered w-full" />
                        {errors.image && <span className='text-yellow-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register("originalPrice", { required: true })} type="text" placeholder="Enter Original Price" className="input input-bordered w-full" />
                        {errors.originalPrice && <span className='text-yellow-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Selling Price</span>
                        </label>
                        <input {...register("sellingPrice", { required: true })} type="text" placeholder="Enter  Selling Price" className="input input-bordered w-full" />
                        {errors.sellingPrice && <span className='text-yellow-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone Number </span>
                        </label>
                        <input {...register("phoneNumber", { required: true })} type="text" placeholder="Enter Your Phone Number" className="input input-bordered w-full" />
                        {errors.phoneNumber && <span className='text-yellow-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Meeting Location </span>
                        </label>
                        <input {...register("location", { required: true })} type="text" placeholder="Enter Meeting Location" className="input input-bordered w-full" />
                        {errors.location && <span className='text-yellow-600'>This field is required</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Year of Uses </span>
                        </label>
                        <input {...register("yearOfUses", { required: true })} type="text" placeholder="Enter Product Year of Uses" className="input input-bordered w-full" />
                        {errors.yearOfUses && <span className='text-yellow-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Posted Time </span>
                        </label>
                        <input {...register("time", { required: true })} type="time" placeholder="Enter Chose Time" className="input input-bordered w-full" />
                        {errors.time && <span className='text-yellow-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Order Description </span>
                        </label>
                        <textarea {...register("description", { required: true })} type="text" placeholder="Enter Product Description Details" className="input input-bordered w-full h-32 " />
                        {errors.description && <span className='text-yellow-600'>This field is required</span>}
                    </div>


                    <input className='btn btn-secondary w-full mt-2' type="submit" value="Add Product" />

                </form>


            </div>
    

        </div>



    );
};

export default AddProduct;