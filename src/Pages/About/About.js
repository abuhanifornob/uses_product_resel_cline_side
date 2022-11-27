import React from 'react'; 
import hanif from "../../assets/icons/hanif.JPG"

const About = () => {
    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={hanif} className="w-1/2 rounded-lg shadow-2xl" />
          <div className='w-1/2'>
            <h1 className="text-2xl font-bold font-serif">About Us</h1>
            <p className="py-6 text-xl font-bold">I am Abu Hanif  student of Asian Univercity . I Want ot make wonder full web site and make carrier software Engineering . i am commited Hard Working all time </p>
            
          </div>
        </div>
      </div>
    );
};

export default About;