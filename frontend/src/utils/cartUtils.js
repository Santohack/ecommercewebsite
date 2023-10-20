
export const addDecimal = (num) => {

    return num.toFixed(2);
}

export const updateCart = (state)=>{
     //calculate itemPrice

     state.itemPrice = addDecimal(state.cartItem.reduce((acc, item) => acc + (item.price * item.qty), 0))
     console.log("item", state.itemPrice )
     //calculate shippingPrice
     state.shippingPrice = addDecimal(state.itemPrice > 100 ? 0 : 10)
     //calculate  taxPrice

     state.taxPrice = addDecimal(Number((0.15 * state.itemPrice).toFixed(2)))
     // calculate totalPrice
     state.totalPrice = (
         Number(state.itemPrice) +
         Number(state.shippingPrice) +
         Number(state.taxPrice)
     ).toFixed(2)
     localStorage.setItem('cart', JSON.stringify(state))

    
}