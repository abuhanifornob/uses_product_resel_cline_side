import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyBookingsProducts = () => {
    const { user } = useContext(AuthContext);
    const url =`http://localhost:5000/booking?email=${user?.email}`;

    const { data: booking = [], isLoading, refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
               headers:{
                authorization:`bearer ${localStorage.getItem("accessToken")}`
               }
            });

            const data = await res.json();
            return data;
        }
    });
    console.log(booking);
    return (
        <div className='my-10'>
            <h3 className='text-3xl font-bold mb-4'>My Bookings Products {booking.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
    
                    <thead>
                        <tr>
                            <th>
                              
                            </th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Seller Name</th>
                            <th>Meeting Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((book,i)=> <tr
                            key={book._id}
                            >
                            <th>{i+1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={book.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{book.productName}</div>
                                        <div className="text-sm opacity-50">{book.productModel}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{book.price}</td>
                            <td>{book.sellerName}</td>
                            <td>{book.meetingLocation}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Pay</button>
                            </th>
                        </tr>)
                        }
                      
                       
                       
                     
                
                    </tbody>
                   

                </table>
            </div>

        </div>
    );
};

export default MyBookingsProducts;