import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';

const ProductModal = ({ product, setBookProduct }) => {
    const { user } = useContext(AuthContext)
    const { productName, productCategory, sellersName, price,images} = product;

    console.log(product);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const productModel = form.productName.value;
        const productName = productCategory;
        const price = form.price.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;
        const sellerName = form.sellerName.value;

        const booking = {
            buyerName: name,
            buyerEmail: email,
            productName,
            productModel,
            price,
            phone,
            meetingLocation,
            sellerName,
            images:images
        }
        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product Booking is Success!!!");
                    setBookProduct(false);
                }

            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productCategory}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-6'>

                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />

                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        <input type="text" name="productName" placeholder="Type here" disabled className="input input-bordered w-full" value={productName} readOnly />
                        <input type="text" name="price" placeholder="Type here" disabled className="input input-bordered w-full" value={price} readOnly />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input input-bordered w-full" required />
                        <input name='sellerName' type="text" defaultValue={sellersName} disabled className="input input-bordered w-full" />
                        <input type="submit" className="btn btn-primary  w-full" value="Summit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default ProductModal;