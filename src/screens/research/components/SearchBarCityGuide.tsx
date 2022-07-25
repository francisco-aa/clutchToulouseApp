import RNDateTimePicker from '@react-native-community/datetimepicker'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import SearchBar from '../../../components/searchBar/SearchBar'
import React, { FC, useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { clone, filter, isUndefined } from 'lodash'
import Ievent from '../../../redux/slices/Ievent'
import { compareAsc } from 'date-fns/esm/fp'
import fr from 'date-fns/locale/fr'
import { format } from 'date-fns'

type TSearchBarCityGuide = {
  events: Ievent[] | undefined,
  refresh: () => any,
  setDataFiltered: React.Dispatch<React.SetStateAction<Ievent[] | undefined>>
}

const SearchBarCityGuide: FC<TSearchBarCityGuide> = ({ events, refresh, setDataFiltered }) => {
  const { currentFilter, currentResearch, dateFilter, eventsByCategory } = useAppSelector(state => state.events)
  const dispatch = useAppDispatch()
  const [renderDatePicker, setRenderDatePicker] = useState<boolean>(false)

  const handleSearch = () => {
    const theTernary = (event: Ievent) => (
      (event.location.name && event.location.name.toLowerCase().includes(currentResearch.toLowerCase())) ||
      (event.location.street_name && event.location.street_name.toLowerCase().includes(currentResearch.toLowerCase()))
    )

    switch (currentFilter) {
    case 'place':
      if (events && currentResearch !== '') {
        const updatedData = filter(clone(events), event => {
          if (theTernary(event) || (event.name && event.name.toLowerCase().includes(currentResearch.toLowerCase()))) {
            return event
          }
        })
        setDataFiltered(updatedData as Ievent[])
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
        setDataFiltered(updatedData as Ievent[])
      } else if (events && currentResearch === '') {
        refresh()
      }
      break
    case 'categories':
      if (eventsByCategory && currentResearch !== '') {
        const updatedData = filter(clone(eventsByCategory), event => {
          if (theTernary(event)) {
            return event
          }
        })
        dispatch({ type: 'events/setCurrentEvents', payload: updatedData })
      } else if (eventsByCategory && currentResearch === '') {
        dispatch({ type: 'events/setCurrentEvents', payload: null })
        refresh()
      }
    }
  }

  const handleOnChangeDate = (event: Event, date: Date | undefined) => {
    if (date) {
      dispatch({ type: 'events/setDateFilter', payload: date?.toDateString() })
      handleSearch()
    }
    return setRenderDatePicker(false)
  }

  useEffect(() => {
    if (currentFilter === 'place' && renderDatePicker) {
      setRenderDatePicker(false)
    }
  }, [currentFilter, renderDatePicker])
  return (
    <>
      {currentFilter === 'calendar'
        ? (
          <View style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <SearchBar style={{ position: 'relative' }} onSearch={handleSearch}
              currentSearch={format(new Date(dateFilter), 'PP', { locale: fr })}
              onChange={searchWord => dispatch({ type: 'events/setCurrentResearch', payload: searchWord })}
              placeholder={'Recherche'} iconRight={{
                color: '#FA4E74',
                name: 'search'
              }}
            />
            {renderDatePicker && (
              <>
                <RNDateTimePicker onChange={handleOnChangeDate} value={new Date(dateFilter)}/>
              </>
            )}
            <TouchableOpacity style={{ position: 'absolute', height: 50, width: 310 }} onPress={() => setRenderDatePicker(true)}>
            </TouchableOpacity>
          </View>
        )
        : (
          <SearchBar onSearch={handleSearch}
            currentSearch={currentResearch}
            onChange={searchWord => dispatch({ type: 'events/setCurrentResearch', payload: searchWord })}
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
