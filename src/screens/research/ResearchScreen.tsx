import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import SearchBarCityGuide from './components/SearchBarCityGuide'
import HeaderIcons from '../../components/headers/HeadersIcons'
import { useGetAllEventsQuery } from '../../api/events.service'
import Container from '../../components/ContainerTouchable'
import ScreenWrapper from '../../components/ScreenWrapper'
import CategoriesList from './components/CategoriesList'
import CardEvent from '../../components/card/CardEvent'
import Loading from '../../components/loading/Loading'
import Title from '../../components/title/Title'
import { ScrollView, Text } from 'react-native'
import Ievent from '../../redux/slices/Ievent'
import Filters from './components/Filters'
import React, { useState } from 'react'
import { clone, map } from 'lodash'

const ResearchScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
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
                        {error
                          ? (
                            <Text>Une erreur est survenue</Text>
                            )
                          : isLoading
                            ? (
                            <Loading color={'#625A96'}/>
                              )
                            : data && !dataFiltered
                              ? (
                            <>
                                {map(clone(data), (event, index) => (
                                    <CardEvent key={index} color={'#625A96'} marginTop={10}
                                               event={event}
                                               tags={event.tags}/>
                                ))}
                            </>
                                )
                              : dataFiltered && dataFiltered.length > 0
                                ? (
                            <>
                                {map(dataFiltered, (event, index) => (
                                    <CardEvent event={event} key={index} tags={event.tags} color={'#625A96'} marginTop={10}
                                    />
                                ))}
                            </>
                                  )
                                : (
                            <Text>Désolé, aucun évènement ne correspond à votre recherche</Text>
                                  )}
                    </Container>
                    )}
            </ScrollView>
        </ScreenWrapper>
  )
}

export default ResearchScreen
