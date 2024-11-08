import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/404');  
        
    };

    return (
        <div>

    

<div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center mb-4">Welcome to Our Website</h1>
            <p className="text-lg text-center mb-6">
                "Your go-to place for everything tech. We bring you the best gadgets at unbeatable prices, 
                keeping you up to date with the latest trends in the digital world."
            </p>
            <p className="text-md text-center">
                "With a focus on quality, customer satisfaction, and innovation, we are dedicated to providing 
                you with a seamless shopping experience, one click at a time."
            </p>

            <button 
            onClick={handleClick} 
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg mt-20  "
        >
             More About use
        </button> 
        </div>


        </div>
    );
};

export default AboutUs;

