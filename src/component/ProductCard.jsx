import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const ProductCard = () => {
    const data = useLoaderData()
//    console.log(data)
   const {category} = useParams( )
//    console.log(category)
    const [products , setProducts]= useState([])
    useEffect(()=>{
        if(category){
            const filterProduct = [...data].filter(
                products => category === products.category
            )
            setProducts(filterProduct)
        }
        else{
            setProducts(data.slice(0,12))
        }

    },[category,data])     
    return (
        <div>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {products.map(item=> (
          <Card key={item.id} item={item} />
         
        ))}
      </div>
        </div>
    );
};

export default ProductCard;

