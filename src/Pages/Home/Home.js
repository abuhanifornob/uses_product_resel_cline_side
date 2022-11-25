import React from 'react';
import ContuctUs from './ContuctUs/ContuctUs';
import ProductsBanner from './Products/ProductsBanner/ProductsBanner';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <ProductsBanner></ProductsBanner>
            <Services></Services>
            <ServiceInfo></ServiceInfo>
            <ContuctUs></ContuctUs>
            
        </div>
    );
};

export default Home;