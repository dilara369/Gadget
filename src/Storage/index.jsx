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

export  {addCard , getAllcard} 
