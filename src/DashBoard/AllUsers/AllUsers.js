import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {}=useQuery({
        queryKey:["users"],
        
    })
    return (
        <div>
            <h2>This is All User Abel Abel</h2>
             
        </div>
    );
};

export default AllUsers;