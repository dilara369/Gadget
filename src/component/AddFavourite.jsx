import React from 'react';
import { MdDelete } from "react-icons/md"; 

const AddFavourite = ({handleWish = () => {}, wish = []}) => {
    console.log(wish)
    return (
        <div>
         {wish && wish.length > 0 ? (
    wish.map((item) => (
        <div key={item.product_id} className="flex gap-8 rounded-xl bg-white shadow-lg shadow-red-200 border border-pink-100 mt-4 p-5 ">
            <div>
                <img className="w-[200px] rounded-xl" src={item.product_image} alt={item.product_title} />
            </div>
            <div>
                <h1 className="text-lg font-bold">{item.product_title}</h1>
                <p>{item.description}</p>
                <p className="font-semibold">Price: ${item.price}</p>
                <div className="flex items-center gap-2 cursor-pointer">
                    <p>Remove from Wishlist</p>
                    <MdDelete onClick={() => handleWish(item.product_id)} size={30} className="text-red-500" />
                </div>
            </div>
        </div>
    ))
) : (
    <p className="text-center mt-5 text-gray-500">No items in the wishlist.</p>
)}
    
        </div>
    );
};

export default AddFavourite;