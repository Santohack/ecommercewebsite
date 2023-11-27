import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : { cartItem: [], shippingAdress: {}, paymentMethod:' paypal'}

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

            state.ShippingAdress = action.payload
            return updateCart(state)
        }


    }

})
export const { addToCart, deleteItem, saveShippingAddress} = cartSlice.actions

export default cartSlice.reducer