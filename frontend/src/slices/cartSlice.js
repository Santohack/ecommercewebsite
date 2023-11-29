import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : { cartItem: [], shippingAddress: {}, paymentMethod:' paypal'}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        /**
         * Adds an item to the cart.
         *
         * @param {Object} state - The current state of the application.
         * @param {Object} action - The action object that contains the payload.
         */
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItem.find((x) => x._id === item._id)
            if (existItem) {
                state.cartItem = state.cartItem.map((x) => x._id === item._id ? item : x)
            }
            else {
                state.cartItem = [...state.cartItem, item]
            }
            return updateCart(state)

        },
        deleteItem: (state,action)=>{
            state.cartItem = state.cartItem.filter((x)=>x._id !== action.payload)
            return updateCart(state)

        },
        saveShippingAddress:(state,action)=>{

            state.shippingAddress = action.payload
            return updateCart(state)
        },
        savePaymentMethod:(state,action)=>{
            
            state.paymentMethod = action.payload
            return updateCart(state)
        },
        cleanCart:(state,action)=>{
            state.cartItem = []
            return updateCart(state)
        }


    }

})
export const { addToCart, deleteItem, saveShippingAddress, cleanCart, savePaymentMethod} = cartSlice.actions

export default cartSlice.reducer