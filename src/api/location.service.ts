import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Ievent from '../redux/slices/Ievent'
import { reverse } from 'lodash'

export const locationApi = createApi({
  reducerPath: 'locationApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://clutchmag.fr/api/' }),
  endpoints: (builder) => ({
    getAllEvents: builder.query<Ievent[], void>({
      query: () => 'locations?',
      transformResponse: (response, meta, arg) => {
        return reverse(response['hydra:member'])
      }
    })
  })
})

export const { useGetAllEventsQuery } = locationApi
