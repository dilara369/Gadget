import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from './Heading';
import { addCard, getAllcard } from '../Storage';

const CardDetails = () => {
   const data = useLoaderData()
    const {product_id} = useParams()
    const [card, setCard] = useState([])
    const [isadd, setIsadd] = useState(false)
    useEffect(() => {
      const singleData = data.find(card => card.product_id == product_id)
      setCard(singleData)
      const wantAdd =getAllcard()
      const isExist =wantAdd.find(item=> item.product_id==card.product_id)
      if (isExist) {
        setIsadd(true)
      }
    }, [data, product_id])
  
    const handeAdd = card => {
        addCard(card)
        setIsadd(true)
      }
   
    return (
        <div className='hero h-[300px] bg-[#9538E2] pb-24 '>
            <Heading title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' ></Heading>
           
        </div>
    );
};

export default CardDetails;
