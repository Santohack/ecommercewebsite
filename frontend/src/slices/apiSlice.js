import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../constant'

const baseUrl = fetchBaseQuery({baseUrl: BASE_URL})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseUrl,
    tagTypes:['Products','Users', 'Orders'],
    endpoints: (builder) => ({})
})