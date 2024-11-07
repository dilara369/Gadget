import React from "react";
import banner from "../assets/banner.jpg";
import Heading from "../component/Heading";
const Banner = () => {
  return (
    <div className=" relative hero h-auto bg-[#9538E2]  border solid rounded-xl    ">
      <div className="hero-content text-center   ">
        <div className="max-w-md  space-y-4">
          <div className="pb-24 pt-8 space-y-3"> <Heading
            title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
            subtitle=" Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          ></Heading>

          <button className="btn border  rounded-full  px-8 py-2 text-purple-700 "> Shop Now
          </button>
          
          </div>          
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2rounded-xl bg-[#e3e0e0] p-5 rounded-xl">
            <img className="h-[220px] w-full rounded-xl" src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
