import React from 'react';
import hp from "../../../assets/ph.png"
import dell from "../../../assets/dell.png"
import lenovo from "../../../assets/lenovo.jpg"
import toshiba from "../../../assets/Toshiba.png"
import Service from './Service';

const Services = () => {
    const serviceData=[
        {
            id:1,
            title:"HP Laptop",
            describtion:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:hp
        },
        {
            id:2,
            title:"Dell Laptop",
            describtion:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:dell
        },
        {
            id:3,
            title:"Lenovo Laptop",
            describtion:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:lenovo
        },
        {
            id:4,
            title:"Toshiba labtop",
            describtion:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:toshiba
        }
    ]
    return (
        <div className='mt-10'>
        <div className='text-center mb-4'>
            <h3 className='text-primary text-3xl font-bold'>OUR PRODUCTS</h3>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                serviceData.map(service=><Service
                 key={service.id}
                 service={service}
                ></Service>)
            }

        </div>
    </div>
    );
};

export default Services;