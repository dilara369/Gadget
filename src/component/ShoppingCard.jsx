// import { useState } from "react";


const ShoppingCard = ({handleRemove,card}) => {
   
    console.log(card)
    // const { product_title, price, description, product_image  } =  card || {}
    // const data = useLoaderData()
    // const [cards, setCards] = useState(card)


    // const handleSort = sortBy => {
    //     if (sortBy == 'price') {
    //       // sort by price
    //       const sorted = [...cards].sort((a, b) => b.price - a.price)
    //       setCards(sorted)
    //     }
     
        // const totalPrice = cards.reduce((total, currentCard) => total + currentCard.price, 0);

    return (
        <div>
             <div className=' w-5/6 mx-auto flex justify-between mt-10'>
                <p className='text-2xl font-bold'>Cart</p>
                <div className='flex items-center gap-5'>
                    <h5 className='font-bold'>Total Price:${}</h5>
                    <button onClick={()=> handleSort('price')} className='rounded-full border-purple-950 px-4 py-1 bg-gradient-to-tr from-purple-500 to-purple-200 '>Sort By Price </button>
                    <button className='rounded-full border  px-4 py-1 bg-gradient-to-t from-purple-500 to-orange-200 '>Purchase</button>
                </div>
             </div>


            <div className='flex gap-8 rounded-xl bg-white'>
                <div>
                    <img src={card.product_image} alt="" />
                </div>
                <div>
               <h1>{card.product_title}</h1>
               <p>{card.description}</p>
               <p>{card.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCard;

