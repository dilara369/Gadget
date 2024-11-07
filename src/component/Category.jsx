import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({Categories}) => {
    return (
        <div>
            <div className=" p-4 flex flex-col border 2px solid bg-white space-y-3 rounded-xl shadow-xl shadow-slate-400">
        {Categories.map((Category) => 
          <NavLink role="tab" className={({isActive}) =>`tab ${isActive? 'bg-blue-300':''} bg-slate-300 rounded-xl shadow-xl shadow-slate-500   ` } key={Category.category} to={`/product/${Category.category}`}>
          
            {Category.category}
          </NavLink>
        )}
      </div>
        </div>
    );
};

export default Category;

