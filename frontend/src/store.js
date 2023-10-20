import { apiSlice } from './slices/apiSlice'
import cartSliceReducer from './slices/cartSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart:cartSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
    ,
    devTools: true,

})
export default store