import RNDateTimePicker from "@react-native-community/datetimepicker";
import {TouchableOpacity, View} from "react-native";
import React, {FC, useEffect, useState} from "react";
import SearchBar from "../../../components/searchBar/SearchBar";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {clone, filter, isUndefined} from "lodash";
import Ievent from "../../../redux/slices/Ievent";
import {format} from 'date-fns'
import fr from 'date-fns/locale/fr'
import {compareAsc} from "date-fns/esm/fp";

type TSearchBarCityGuide = {
    events: Ievent[],
    refresh: () => any,
    setDataFiltered: () => any
}
const SearchBarCityGuide: FC<TSearchBarCityGuide> = ({events, refresh, setDataFiltered}) => {
    const {currentFilter, currentResearch, dateFilter, eventsByCategory, selectedCategory} = useAppSelector(state => state.events)
    const dispatch = useAppDispatch()
    const [renderDatePicker, setRenderDatePicker] = useState<boolean>(false)

    const handleSearch = () => {
        switch (currentFilter) {
            case 'place':
                if (events && currentResearch !== '') {
                    const updatedData = filter(clone(events), event => {
                        if (event.location.name && event.location.name.toLowerCase().includes(currentResearch.toLowerCase()) || event.location.street_name && event.location.street_name.toLowerCase().includes(currentResearch.toLowerCase())) {
                            return event
                        }
                    })
                    setDataFiltered(updatedData)
                } else if (events && currentResearch === '') {
                    refresh()
                }
                break
            case 'calendar':
                if (events && !isUndefined(dateFilter)) {
                    const updatedData = filter(clone(events), event => {
                        if (event.start_date && compareAsc(new Date(event.start_date), new Date(dateFilter)) === -1) {
                            return event
                        }
                    })
                    setDataFiltered(updatedData)
                } else if (events && currentResearch === '') {
                    refresh()
                }
                break
            case 'categories':
                if (eventsByCategory && currentResearch !== ''){
                        const updatedData = filter(clone(eventsByCategory), event => {
                            if (event.location.name && event.location.name.toLowerCase().includes(currentResearch.toLowerCase()) || event.location.street_name && event.location.street_name.toLowerCase().includes(currentResearch.toLowerCase()) ||  event.name && event.name.toLowerCase().includes(currentResearch.toLowerCase())) {
                                return event
                            }
                        })
                        dispatch({type: "events/setCurrentEvents", payload: updatedData})
                }else if (eventsByCategory && currentResearch === '') {
                    dispatch({type: "events/setCurrentEvents", payload: null})
                    refresh()
                }
        }
    }

    const handleOnChangeDate = (date: Date | undefined) => {
        if (date){
            dispatch({type: "events/setDateFilter", payload: date?.toDateString()})
        }
        return setRenderDatePicker(false)
    }

    useEffect(() => {
        if (currentFilter === 'place' && renderDatePicker){
            setRenderDatePicker(false)
        }
    }, [currentFilter, renderDatePicker])
    return (
        <>
            {currentFilter === 'calendar' ? (
                <View style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <SearchBar style={{position: 'relative'}} onSearch={handleSearch}
                               currentSearch={format(new Date(dateFilter), 'PP', {locale: fr})}
                               onChange={searchWord => dispatch({type: "events/setCurrentResearch", payload: searchWord})}
                               placeholder={'Recherche'} iconRight={{
                        color: '#FA4E74',
                        name: 'search'
                    }}
                    />
                    {renderDatePicker && (
                        <>
                            <RNDateTimePicker onChange={(event, date) => handleOnChangeDate(date)} display="spinner" value={new Date(dateFilter)}/>
                        </>
                    )}

                    <TouchableOpacity style={{position: 'absolute', height: 50, width: 320}} onPress={() => setRenderDatePicker(true)}>
                    </TouchableOpacity>
                </View>
            ) : (
                <SearchBar onSearch={handleSearch}
                           currentSearch={currentResearch}
                           onChange={searchWord => dispatch({type: "events/setCurrentResearch", payload: searchWord})}
                           placeholder={'Recherche'} iconRight={{
                    color: '#FA4E74',
                    name: 'search'
                }}
                />
            )}
        </>
    )
}

export default SearchBarCityGuide
