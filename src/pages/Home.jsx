import React from 'react';
import Banner from '../component/Banner';

import { Outlet, useLoaderData } from 'react-router-dom';
import Category from '../component/Category';

const Home = () => {

    const Categories = useLoaderData();

    return (
        <div>
            <Banner> </Banner> 
            
            <h1 className='mt-44 text-4xl font-bold flex justify-center '> Explore Cutting-Edge Gadgets</h1>
            <div className='w-full flex gap-16   mt-6'>  
                <div className='w-[15%]'>
                <Category Categories={Categories}></Category>
                </div>
             <div className='flex-1'>
             {/* need dayanamic nested so , outlet  */}
             <Outlet></Outlet>
             </div>
  
               </div>

        </div>
    );
};

export default Home;