import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Ievent from "../redux/slices/Ievent";
import {reverse} from "lodash";

export const eventsApi = createApi({
    reducerPath: 'eventsApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl: 'https://clutchmag.fr/api/'}),
    endpoints: (builder) => ({
        getAllEvents: builder.query<Ievent[], string>({
            query: () => `events?`,
            transformResponse: (response: Ievent[], meta, arg) => {
                return reverse(response["hydra:member"])
            },
        }),
    }),
})

export const {useGetAllEventsQuery} = eventsApi
