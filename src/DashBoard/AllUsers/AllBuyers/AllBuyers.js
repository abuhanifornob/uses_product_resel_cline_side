import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users/buyer");
            const data = await res.json();
            return data;
        }

    })

    const handleDeletingBuyer=deleteData=>{
       
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
    if (isLoading) {
        return <h2>loading.....</h2>
    }
    
    return (
        <div className='py-10'>
             <h3 className="text-3xl font-bold text-primary mb-4">Total Buyers is: {buyers.length} </h3>
            <h3>All Buyers :{buyers.length} </h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                  
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                           
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                        buyers.map((buyer,i)=> <tr
                        key={buyer._id}
                        >
                        <th>{i+1}</th>
                        <td>{buyer.name}</td>
                        <td>{buyer.email}</td>
                        <label onClick={()=>handleDeletingBuyer(buyer)} className="btn btn-sm btn-error">Delete</label>
                    </tr>)
                       }
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyers;