import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi= createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/'
    }),
    endpoints:(builder)=>({
        posts:builder.query({
            query:()=>'/posts'
        }),
       
    })
})

export const {usePostsQuery} = postsApi;