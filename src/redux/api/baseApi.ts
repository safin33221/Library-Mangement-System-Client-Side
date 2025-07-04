import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    tagTypes: ["books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["books"]
        }),
        createBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["books"]
        }),
        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData
            }),
            invalidatesTags: ["books"]
            
        })

    })

})

export const { useGetBooksQuery, useCreateBookMutation, useBorrowBookMutation } = baseApi