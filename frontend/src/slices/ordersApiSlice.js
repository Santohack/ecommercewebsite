import { ORDERS_URL } from "../constant";
import {apiSlice} from "./apiSlice";


const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (data) => ({
                url: ORDERS_URL,
                method: "POST",
                body: data,
            }),
        }),
    }),
})


export const { useCreateOrderMutation } = ordersApiSlice

