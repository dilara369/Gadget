import React, { useEffect, useState } from "react";
import Heading from "../component/Heading";
import { getAllcard, removeCard } from "../Storage";
import { NavLink, } from "react-router-dom";
import ShoppingCard from "../component/ShoppingCard";

const Dashboard = () => {
        
    const [card, setCard] = useState()
    useEffect(() => {
        const wantAdd =getAllcard()
      setCard(wantAdd)
    }, [])
  
    const handleRemove = (product_id) => {
      removeCard(product_id)
      const wantAdd = getAllcard()
      setCard(wantAdd)
    }

    const handleSort = () => {
        
        // sort by price
        const sorted = [...card].sort((a, b) => b.price - a.price)
        setCard(sorted)
  }


  return (
    <div>
      <div className=" relative hero h-[200px] bg-[#9538E2]  border solid rounded-xl  ">
        <div className="pb-28">
        <Heading
          title="Dashboard"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        </div>
        

<div className="flex justify-center space-x-5 bg-transparent">
    <NavLink
        role="tab"
        className={({ isActive }) =>
            `tab ${isActive ?'bg-white , text-purple-800 , font-bold ':'bg-purple-600'} relative top-1/2 shadow-xl border border-white px-8 py-2 rounded-full text-white text-center`
        }
        to="/dashboard/Shopping"
    >
        Cart
    </NavLink>

    <NavLink
        role="tab"
        className={({ isActive }) =>
            `tab ${isActive ? 'bg-white , text-purple-800 , font-bold ':'bg-purple-600'} relative top-1/2 shadow-xl border border-white px-8 py-2 rounded-full text-white`
        }
        to="/wishlist"
    >
        Wishlist
    </NavLink>
</div>
     
      </div>

<ShoppingCard handleRemove={handleRemove} handleSort={handleSort}  card={card} ></ShoppingCard>

    </div>
  );
};

export default Dashboard;



