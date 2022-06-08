import React, {useEffect, useRef, useState} from "react";
import Ecategories from "../../../redux/slices/Ecategories";
import CategoryItem from "../../../components/categories/list/CategoryItem";
import {clone, cloneDeep, filter, map} from "lodash";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {Text} from "react-native";
import Container from "../../../components/ContainerTouchable";
import Loading from "../../../components/loading/Loading";
import CardEvent from "../../../components/card/CardEvent";
import {useGetAllEventsQuery} from "../../../api/events.service";
import Ievent from "../../../redux/slices/Ievent";
import {batch} from "react-redux";

const CategoriesList = () => {

    const dispatch = useAppDispatch()
    const selectedCategory = useAppSelector(state => state.events.selectedCategory)
    const colorRef = useRef<string>('#FA4E74')

    const [list, setList] = useState<string[]>([])
    const [events, setEvents] = useState<Ievent[] | null>([])
    const {eventsByCategory, currentResearch}= useAppSelector(state => state.events)
    const {data, error, isLoading} = useGetAllEventsQuery('')


    const generateList = () => {
    let tempList: Ecategories[] = []
    for(const key of Object.keys(Ecategories)) {
        if (!+key){
            tempList.push(key.replace('_', ' '))
        }
    }
    setList(tempList)
}
    const handlePress = (catName: string) => {
        if (catName === selectedCategory){
            batch(() => {
                dispatch({type: "events/setEventsByCategory", payload: null})
                dispatch({type: "events/setSelectedCategory", payload: null})
            })

        }else{

            batch(() => {
                dispatch({type: "events/setEventsByCategory", payload: null})
                dispatch({type: "events/setSelectedCategory", payload: catName})
            })

        }
    }
    const getEventsByThematic = (thematicNumber: number) => {
        console.log("RECUPERATION DES EVENS PAR THEMES", thematicNumber)
        const events = filter(data, event => {
            if (event.category === thematicNumber){
                return event
            }
        })
        batch(() => {
            dispatch({type: "events/setCurrentEvents", payload: null})
            dispatch({type: "events/setEventsByCategory", payload: events})
        })
    }


    useEffect(() => {

        //lors de la sélection du thème
        if (selectedCategory ){
            //garde le thème sélectionné uniquement
            const updatedList = filter(list, cat => cat === selectedCategory)
            setList(updatedList)
            //change la couleur de fond
            colorRef.current = '#F8BC43'

            let formatedSelectedCategory = cloneDeep(selectedCategory).replace(' ', '_')
           let categoryNumber
            for (let log in Ecategories) {
                if (+log && Ecategories[+log] === formatedSelectedCategory){
                    categoryNumber = +log
                }
            }

            getEventsByThematic(categoryNumber)
        }else{
            colorRef.current = '#FA4E74'
            generateList()
        }
    }, [selectedCategory, data])

    useEffect(() => {
        generateList()
    }, [])

    useEffect(() => {
        if (currentResearch !== ''){
            const updatedData = filter(clone(eventsByCategory), event => {
                if (event.location.name && event.location.name.toLowerCase().includes(currentResearch.toLowerCase()) || event.location.street_name && event.location.street_name.toLowerCase().includes(currentResearch.toLowerCase()) ||  event.name && event.name.toLowerCase().includes(currentResearch.toLowerCase())) {
                    return event
                }
            })
            setEvents(updatedData)
        }else if (currentResearch === ''){
            setEvents(eventsByCategory)
        }
    }, [eventsByCategory, currentResearch])
    return (
        <>
            {map(list, (catName, index) => (
                <>
                    <CategoryItem color={colorRef.current} key={`${index}_item`} categoryName={catName} onPress={() => handlePress(catName)} marginBottom={index > 0 ? 0 : 20}/>
                </>
            ))}
            {selectedCategory && (
                <Container direction={'column'}>
                    {error ? (
                        <Text>Une erreur est survenue</Text>
                    ) : isLoading ? (
                        <Loading color={"#625A96"}/>
                    ) : events ? (
                        <>
                            {map(clone(events ? events : eventsByCategory), (event, index) => (
                                <CardEvent key={`${index}_event`} color={'#625A96'} marginTop={10}
                                           event={event}
                                           tags={event.tags}/>
                            ))}
                        </>
                    ) : (
                        <Text>Désolé, aucun évènement ne correspond à votre recherche</Text>
                    )}
                </Container>
            )}
        </>

    )
}

export default CategoriesList