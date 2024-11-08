import { MdDelete } from "react-icons/md";

const ShoppingCard = ({ handleRemove, card, handleSort }) => {
  console.log(card);

  // const totalPrice = cards.reduce((total, currentCard) => total + currentCard.price, 0);

  return (
    <div>
      <div className=" w-5/6 mx-auto flex justify-between mt-10">
        <p className="text-2xl font-bold">Cart</p>
        <div className="flex items-center gap-5">
          <h5 className="font-bold">Total Price:${}</h5>
          <button
            onClick={() => handleSort()}
            className="rounded-full border-purple-950 px-4 py-1 bg-gradient-to-tr from-purple-500 to-purple-200 "
          >
            Sort By Price{" "}
          </button>
          <button className="rounded-full border  px-4 py-1 bg-gradient-to-t from-purple-500 to-orange-200 ">
            Purchase
          </button>
        </div>
      </div>

      {card &&
        card?.map((item) => (

          <div key={item.product_id} className="flex gap-8 rounded-xl bg-white shadow-lg shadow-red-200 border border-pink-100 mt-4 p-5 ">
            <div>
              <img className="w-[200px] rounded-xl" src={item.product_image} alt="" />
            </div>
            <div>
              <h1 className="text-lg font-bold">{item.product_title}</h1>
              <p>{item.description}</p>
              <p className="font-semibold">Price:${item.price}</p>
              <MdDelete onClick={()=>handleRemove()}  size={30} />
            </div>
          
          </div>
        ))}
    </div>
  );
};

export default ShoppingCard;
