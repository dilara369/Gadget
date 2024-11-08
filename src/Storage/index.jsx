// getAllcard function for save all card to localStorage

import toast from "react-hot-toast";

const getAllcard=()=>{
    const all= localStorage.getItem('wantAdd')
    // const cardData = JSON.parse(all)
    // console.log(cardData)
    if(all) {
        const cardData = JSON.parse(all)
        return cardData;
        
    }
    else {
        // console.log([])
        return [];
    }

}

const getAllWish=()=>{
    const allWish= localStorage.getItem('wantWish')
    // const cardData = JSON.parse(all)
    // console.log(cardData)
    if(allWish) {
        const wishData = JSON.parse(allWish)
        return wishData;
        
    }
    else {
        // console.log([])
        return [];
    }

}

const addCard = card =>{
    // console.log(card)
    // const wantAdd =[]
    const wantAdd =getAllcard()
    const isExist =wantAdd.find(item=> item.product_id==card.product_id)
    if(isExist){
       return toast.error('Card Already Exist!');
    
    }

    wantAdd.push(card)
    localStorage.setItem('wantAdd', JSON.stringify(wantAdd))
    toast.success('Successfully Added!');
}
const addWish = card =>{
   
    const wantWish =getAllcard()
    const iswishExist =wantWish.find(item=> item.product_id==card.product_id)
    if(iswishExist){
       return toast.error('item Already Exist!');
    
    }

    wantWish.push(card)
    localStorage.setItem('wantWish', JSON.stringify(wantWish))
    toast.success('Successfully Add to wish !');
}


const removeCard = product_id =>{
    const wantAdd =getAllcard()
    console.log(wantAdd)
  
    const isExist =wantAdd.filter(item=> item.product_id !=product_id)
    console.log(isExist) 
    localStorage.setItem('wantAdd', JSON.stringify(isExist))
    toast.success('Successfully Removed!')

}
const removeWish = product_id =>{
    const wantWish =getAllcard()
    console.log(wantWish)
  
    const iswishExist =wantWish.filter(item=> item.product_id !=product_id)
    console.log(iswishExist) 
    localStorage.setItem('wantWish', JSON.stringify(iswishExist))
    toast.success('Successfully Removed from wishList!')

}

export  {addCard ,addWish, getAllcard, getAllWish ,removeCard , removeWish } 

