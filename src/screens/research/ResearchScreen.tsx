import React, {useEffect, useState} from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import HeaderIcons from "../../components/headers/HeadersIcons";
import Title from "../../components/title/Title";
import Filters from "./components/Filters";
import CardEvent from "../../components/card/CardEvent";
import Container from "../../components/ContainerTouchable";
import {ScrollView, Text} from "react-native";
import {clone, map} from "lodash";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import Loading from "../../components/loading/Loading";
import Ievent from "../../redux/slices/Ievent";
import SearchBarCityGuide from "./components/SearchBarCityGuide";
import {useNavigation} from "@react-navigation/native";
import Eroutes from "../../routes/Eroutes";
import { useGetAllEventsQuery } from "../../api/events.service";
import CategoriesList from "./components/CategoriesList";

const ResearchScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const [dataFiltered, setDataFiltered] = useState<Ievent[] | null>(null)
    const currentFilter = useAppSelector(state => state.events.currentFilter)

    const {data, error, isLoading, refetch} = useGetAllEventsQuery('')


    const refresh = () => {
        setDataFiltered(null)
        return refetch()
    }


    return (
        <ScreenWrapper bg={'#085066'}>
            <HeaderIcons/>

            <Title marginBottom={15} marginTop={50} title={'rechercher un évènement'} weight={'bold'}
                   transform={'uppercase'} size={25} color={'white'}/>
            <SearchBarCityGuide refresh={refresh} events={data} setDataFiltered={setDataFiltered}/>
            <Filters onChangeFilter={(filter) => dispatch({type: "events/changeCurrentFilter", payload: filter})}/>
            <ScrollView style={{marginTop: 30, marginBottom: 60}}>

                {currentFilter === 'categories' ? (
                    <CategoriesList/>
                ) : (
                    <Container direction={'column'}>
                        {error ? (
                            <Text>Une erreur est survenue</Text>
                        ) : isLoading ? (
                            <Loading color={"#625A96"}/>
                        ) : data && !dataFiltered ? (
                            <>
                                {map(clone(data), (event, index) => (
                                    <CardEvent key={index} color={'#625A96'} marginTop={10}
                                               event={event}
                                               tags={event.tags}/>
                                ))}
                            </>
                        ) : dataFiltered && dataFiltered.length > 0 ? (
                            <>
                                {map(dataFiltered, (event, index) => (
                                    <CardEvent event={event} key={index} tags={event.tags} color={'#625A96'} marginTop={10}
                                    />
                                ))}
                            </>
                        ) : (
                            <Text>Désolé, aucun évènement ne correspond à votre recherche</Text>
                        )}
                    </Container>
                )}

            </ScrollView>

        </ScreenWrapper>
    )
}

export default ResearchScreen
