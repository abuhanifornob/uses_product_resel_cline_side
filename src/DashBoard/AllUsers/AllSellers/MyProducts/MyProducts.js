import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProducts = () => {
    const {user}=useContext(AuthContext);
 const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/seller/${user.email}`);
            const data = await res.json();
            return data;
        }
    });
    const handleDeletingProduct=deleteData=>{
        console.log(deleteData);
        const confirm=window.confirm(`Are Your Sure You Want to Delete ? If you Delete ${deleteData.name}. It Can't be Undone` )
        if(confirm){
            fetch(`http://localhost:5000/products/seller/${deleteData.email}`, {
                method: "DELETE"
              
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(`${deleteData.productName} is Delete Success`);
                        refetch();
                    }
    
                })
        }
       
    }

    if (isLoading) {
        return <h2>loading.....</h2>
    }

    return (
        <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Total Products : {products.length} </h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
    
                    <thead>
                        <tr>
                            <th>
                              
                            </th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,i)=> <tr
                            key={product._id}
                            >
                            <th>{i+1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{product.productCategory}</div>
                                    <div className="text-sm opacity-50">{product.productName}</div>
                                        
                                       
                                    </div>
                                </div>
                            </td>
                            <td>{product.price}</td>
                            <td><button className='btn btn-sm btn-primary'>advertised</button></td>
                          
                            <td>

                            <label onClick={()=>handleDeletingProduct(product)} className="btn btn-sm btn-error">Delete</label>

                            </td>
                        </tr>)
                        } 
                
                    </tbody>
                   

                </table>
            </div>

        </div>
    );
};

export default MyProducts;