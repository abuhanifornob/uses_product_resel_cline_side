import React from 'react';
import clock from "../../../assets/icons/clock.svg"
import location from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
import CardInfo from './CardInfo';

const ServiceInfo = () => {
    const cardData = [
        {
            id: 1,
            title: "Opening Hours",
            discribtion: "12 Month, 30 Day, 24Hours ",
            icon: clock,
            bgCalss: "bg-gradient-to-r from-purple-500 to-blue-500",
        },
        {
            id: 2,
            title: "Visit our location",
            discribtion: "Ashulia,Savar-1450,Dhaka,Bangladesh",
            icon: location,
            bgCalss: "bg-gradient-to-r from-neutral to-indigo-500",
        },
        {
            id: 3,
            title: "Contact us now",
            discribtion: "+000 1716203929 hanifcse90@gmail.com",
            icon: phone,
            bgCalss: "bg-gradient-to-r from-orange-500 to-blue-500",
        },
    ];

    return (
        <div className='mt-24'>
            <h2 className="text-3xl text-primary text-center font-bold"> Our Serviceing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 mt-10">
                {cardData.map((card) => (
                    <CardInfo key={card.id} card={card}></CardInfo>
                ))}
            </div>
        </div>
    );
};

export default ServiceInfo;