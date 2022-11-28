import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmedModal from '../../Pages/Shareds/ConfirmedModal/ConfirmedModal';

const AllUsers = () => {
    const [deletingUsers,setDeletingUsers]=useState(null);
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data
        }

    })

    const handleAdmin = (id) => {
        const result = window.confirm("Are You Suer ? You Want to Admin Make.");
        console.log(id);
        if (result) {
            fetch(`http://localhost:5000/users/admin/${id}`, {
                method: "PATCH",
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success("Make Admin Success!!!!!")
                        refetch();
                    }
                })
        }
    }


    const handleDeletingUser=deleteData=>{
        console.log(deleteData);
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
    // const closeModal=()=>{
    //     setDeletingUsers(null);
    // }
    if (isLoading) {
        return <h2>loading.....</h2>
    }
    return (
        <div className='my-10'>
            <h3 className="text-3xl font-bold text-primary mb-4">All Users is: {users.length} </h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actor</th>
                            <th>Action</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr
                                key={user._id}
                                className="hover"
                            >
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    { 
                                    user?.role !=='admin'&&
                                        <button onClick={() => handleAdmin(user._id)} className='btn btn-xs btn-primary'>Create Admin</button>
                                     
                                    } </td>

                                <td>
                                
                                    <label onClick={()=>handleDeletingUser(user)} className="btn btn-sm btn-error">Delete</label>
                                    
                                    </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* {
                deletingUsers && 
                <>
                <ConfirmedModal
                title={`Are Your Sure You Want to Delete ?`}
                message={`If you Delete ${deletingUsers.name}. It Can't be Undone`}
                modalData={deletingUsers}
                closeModal={closeModal}
                successAction={handleDeletingUser}

                ></ConfirmedModal>
                </>
            } */}

        </div>
    );
};

export default AllUsers;