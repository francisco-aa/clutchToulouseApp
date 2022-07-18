import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import SearchBarCityGuide from './components/SearchBarCityGuide'
import HeaderIcons from '../../components/headers/HeadersIcons'
import { useGetAllEventsQuery } from '../../api/events.service'
import Container from '../../components/ContainerTouchable'
import ScreenWrapper from '../../components/ScreenWrapper'
import CategoriesList from './components/CategoriesList'
import Title from '../../components/title/Title'
import { ScrollView } from 'react-native'
import Ievent from '../../redux/slices/Ievent'
import Filters from './components/Filters'
import React, { useState } from 'react'
import ResearchContent from './components/ResearchContent/ResearchContent'

const ResearchScreen = () => {
  const dispatch = useAppDispatch()
  const [dataFiltered, setDataFiltered] = useState<Ievent[] | undefined>(undefined)
  const currentFilter = useAppSelector(state => state.events.currentFilter)

  const { data, error, isLoading, refetch } = useGetAllEventsQuery('')

  const refresh = () => {
    setDataFiltered(undefined)
    return refetch()
  }

  return (
    <ScreenWrapper bg={'#085066'}>
      <HeaderIcons/>
      <Title marginBottom={15} marginTop={50} title={'rechercher un évènement'} weight={'bold'}
        transform={'uppercase'} size={25} color={'white'}/>
      <SearchBarCityGuide refresh={refresh} events={data} setDataFiltered={setDataFiltered}/>
      <Filters onChangeFilter={(filter) => dispatch({ type: 'events/changeCurrentFilter', payload: filter })}/>
      <ScrollView style={{ marginTop: 30, marginBottom: 60 }}>
        {currentFilter === 'categories'
          ? (
            <CategoriesList/>
            )
          : (
            <Container direction={'column'}>
              <ResearchContent error={error} data={!dataFiltered ? data : dataFiltered} isLoading={isLoading}/>
            </Container>
            )}
      </ScrollView>
    </ScreenWrapper>
  )
}

export default ResearchScreen
