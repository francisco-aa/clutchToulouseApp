import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Ievent from "../redux/slices/Ievent";
import {filter, map, reverse} from "lodash";

export const eventsApi = createApi({
    reducerPath: 'eventsApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl: 'https://clutchmag.fr/api/'}),
    endpoints: (builder) => ({
        getAllEvents: builder.query<Ievent[], void>({
            query: () => `events?`,
            transformResponse: (response, meta, arg) => {
                return reverse(response["hydra:member"])
            },
        }),
    }),
})

export const {useGetAllEventsQuery} = eventsApi