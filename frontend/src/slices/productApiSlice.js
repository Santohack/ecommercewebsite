import { PRODUCTS_URL } from "../constant";
import { apiSlice } from "./apiSlice";

export const  productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts:builder.query({
            query:()=>({
                url:PRODUCTS_URL
            }),
            keepUnusedDataFor:5
        }),
        getProductsDetail:builder.query({
            query:(productId)=>({
                url:`${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor:5
        }),
        
    })
})
export const {useGetProductsQuery,useGetProductsDetailQuery} = productApiSlice
