import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Ievent from "./Ievent";
import Eroutes from "../../routes/Eroutes";

export interface IeventsSlice {
    currentFilter: 'place' | 'calendar',
    currentResearch: string,
    dateFilter: string,
    selectedEvent: Ievent | null
}

const initialState: IeventsSlice = {
    currentFilter: 'place',
    currentResearch: '',
    dateFilter: new Date().toDateString(),
    selectedEvent: null
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        changeCurrentFilter: (state, action: PayloadAction<'place' | 'calendar'>) => {
            state.currentFilter = action.payload
        },
        setCurrentResearch: (state, action: PayloadAction<string>) => {
            state.currentResearch = action.payload
        },
        setDateFilter: (state, action: PayloadAction<string>) => {
            state.dateFilter = action.payload
        },
        setSelectedEvent: (state, action: PayloadAction<Ievent>) => {
            state.selectedEvent = action.payload
        }
    },
})

export const { changeCurrentFilter, setCurrentResearch, setSelectedEvent } = eventsSlice.actions

export default eventsSlice.reducer