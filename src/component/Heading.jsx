import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div className=' text-center w-full justify-center space-y-3 '>
            <h1 className='text-2xl font-bold text-white'>{title}</h1>
            <p className='text-slate-100  mx-auto'>{subtitle}</p>
        </div> 
    );
};

export default Heading;

