import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";
import { addCard, getAllcard } from "../Storage";
import { FcRating } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const CardDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [card, setCard] = useState([]);
  const [isadd, setIsadd] = useState(false);
  useEffect(() => {
    const singleData = data.find((card) => card.product_id == product_id);
    setCard(singleData);
    const wantAdd = getAllcard();
    const isExist = wantAdd.find((item) => item.product_id == card.product_id);
    if (isExist) {
      setIsadd(true);
    }
  }, [data, product_id]);

  const handeAdd = (card) => {
    addCard(card);
    setIsadd(true);
    // react can read again and done fullfill so i put it here again 
  };
  const handeLove = (card) => {
    addCard(card);
    setIsadd(true);
    // react can read again and done fullfill so i put it here again 
  };

  return (
    <div className=" relative hero h-[300px] bg-[#9538E2] pb-56 ">
      <Heading
        title="Product Details"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></Heading>
      <div className=" absolute top-1/4  flex gap-8 bg-white rounded-xl border 2px solid border-blue-400 p-5  ">
        <div>
          <img className="rounded-xl h-full" src={card.product_image} alt="" />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-xl">{card.product_title}</h1>
          <p className="text-md">Price:${card.price}</p>
          <button className=" border 2px solid  border-green-800 bg-green-100 text-green-900 rounded-full px-4 py-1  ">
            In Stock
          </button>
          <p>{card.description}</p>
          <div className="space-y-2">
            <h2 className="text-lg font-bold">Specifications:</h2>
            <ul>
              {card.Specification &&
                card.Specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            {" "}
            <p className="font-bold">Rating</p> <FcRating />{" "}
          </div> 
          <div className="flex gap-2 items-center">
          <FcRating />
          <FcRating />
          <FcRating />
          <FcRating />
            <p className="bg-blue-200 rounded-full w-6 h-6 text-center">{card.rating}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
             disabled={isadd}
            onClick={()=> handeAdd(card)} className="bg-purple-900 rounded-full text-white px-5 py-1 flex items-center gap-2">Add To Cart  <FaCartArrowDown />  </button>
            <FcLike  onClick={()=> handeLove(card)}   size={35} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
