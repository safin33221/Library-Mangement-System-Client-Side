import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-olive-one.vercel.app/api' }),
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
        updateBook: builder.mutation({
            query: ({ id, ...bookData }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: bookData,
            }),
            invalidatesTags: ["books"],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["books"]
        })
        ,

        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData
            }),
            invalidatesTags: ["books"]

        }),
        getBorrowSummary: builder.query({
            query: () => "/borrow",
        }),
        


    })

})

export const { useGetBooksQuery, useCreateBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery, useUpdateBookMutation, useDeleteBookMutation } = baseApi