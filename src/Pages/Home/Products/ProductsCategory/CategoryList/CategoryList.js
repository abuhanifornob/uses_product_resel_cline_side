import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({categoryName}) => {
   const{category_name}=categoryName;
    return (
        <div>
             <li><Link to={`/products/${category_name}`}>{category_name}</Link></li>
        </div>
    );
};

export default CategoryList;