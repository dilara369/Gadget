import React, { useEffect, useState } from "react";
import Heading from "../component/Heading";
import { getAllcard } from "../Storage";
import { NavLink } from "react-router-dom";
import ShoppingCard from "../component/ShoppingCard";

const Dashboard = () => {

    const [card, setCard] = useState([])
    useEffect(() => {
        const wantAdd =getAllcard()
      setCard(wantAdd)
    }, [])
  
    const handleRemove = id => {
      removeCard(id)
      const wantAdd = getAllcard()
      setCard(wantAdd)
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
            `tab ${isActive ? 'bg-blue-400' : 'bg-transparent'} relative top-1/2 shadow-xl border border-white px-8 py-2 rounded-full text-white text-center`
        }
        to="/shopping"
    >
        Cart
    </NavLink>

    <NavLink
        role="tab"
        className={({ isActive }) =>
            `tab ${isActive ? 'bg-blue-400' : 'bg-transparent'} relative top-1/2 shadow-xl border border-white px-8 py-2 rounded-full text-white`
        }
        to="/wishlist"
    >
        Wishlist
    </NavLink>
</div>

    


       
      </div>

<ShoppingCard></ShoppingCard>

    </div>
  );
};

export default Dashboard;



