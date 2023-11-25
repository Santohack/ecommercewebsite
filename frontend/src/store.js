import { apiSlice } from './slices/apiSlice'
import cartSliceReducer from './slices/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import authsliceReducer from './slices/authslice'

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart:cartSliceReducer,
        auth:authsliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
    ,
    devTools: true,

})
export default store