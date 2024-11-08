import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({item}) => {

const navigate = useNavigate()

    const { product_title ,product_id, price , product_image  } =item || {}
    return (
        <>
        <div className=' border rounded-xl p-6 bg-slate-200 shadow-lg shadow-red-200'>
             <Link
        // to={`/product/${product_id}`}
        className='transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden'
      >
        <figure className='w-full h-48 overflow-hidden'>
          <img className='h-[200px] rounded-xl w-full' src={product_image} alt='' />
        </figure>
        <div className='p-4'>
          <h1 className='text-xl'> {product_title}</h1>
          <p> Price:${price}</p>
        </div>
      </Link>
      <Link to={`/Details/${product_id}`}> <button  className='btn border-purple-800 2px solid  rounded-full  text-purple-950'> View Details </button> </Link> 
      
        </div>
        </>
    );
};

export default Card;

 
