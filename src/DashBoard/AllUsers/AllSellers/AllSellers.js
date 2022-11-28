import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users/seller");
            const data = await res.json();
            return data;
        }
    });

    const handleDeletingSeller=deleteData=>{
       
        const confirm=window.confirm(`Are Your Sure You Want to Delete ? If you Delete ${deleteData.name}. It Can't be Undone` )
        if(confirm){
            fetch(`http://localhost:5000/users/${deleteData.email}`, {
                method: "DELETE",
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(`${deleteData.email} is Delete Success`);
                        refetch();
                    }
    
                })
        }
       
    }
  const handleVerify=(seller)=>{
    const result = window.confirm("Are You Suer ? You Want to Seller Verified.");
    
    if (result) {
        fetch(`http://localhost:5000/users/verified/${seller.email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Seller Verified Success!!!!!")
                    refetch();
                }
            })
    }
  }

    if (isLoading) {
        return <h2>loading.....</h2>
    }
    return (
        <div className='my-10'>
            <h3 className="text-3xl font-bold text-primary mb-4">Total Seller is: {sellers.length} </h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                  
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                        sellers.map((seller,i)=> <tr
                        key={seller._id}
                        >
                        <th>{i+1}</th>
                        <td>{seller.name}</td>
                        <td>{seller.email}</td>
                        <td>
                                    { 
                                    !seller?.verified &&
                                        <button onClick={() => handleVerify(seller)} className='btn btn-xs btn-primary'>Make Verified</button>
                                     
                                    } </td>
                        
                        <td>
                        <label onClick={()=>handleDeletingSeller(seller)} className="btn btn-sm btn-error">Delete</label>
                        </td>
                    </tr>)
                       }
                       
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllSellers;