import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Apires} from "../../interface.ts";

export const showApi = createApi({
    reducerPath: "showApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.tvmaze.com`
    }),
    endpoints: (builder) => ({
        fetchAllShows: builder.query<Apires[], void>({
            query: () => ({
                url: `/search/shows`,
                params: {
                    q: "all"
                }
            }),

        })
    })
})

export const {useFetchAllShowsQuery} = showApi