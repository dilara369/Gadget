import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Heading from './Heading';

const CardDetails = () => {
   const data = useLoaderData()
    const {id} = useParams()
   
    return (
        <div className='hero h-[300px] bg-[#9538E2] pb-24 '>
            <Heading title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' ></Heading>

            {/* <div>
                {data.map(product=>  (         
                   <h1>{product.price}</h1>

                ))}
            </div> */}
        </div>
    );
};

export default CardDetails;
