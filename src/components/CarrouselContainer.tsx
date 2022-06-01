import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import { dataAccess } from '../data/dataAccess'
import CategoryCarrouselCard from './CategoryCarrouselCard'
import EventCarrouselCard from './EventCarrouselCard'
import Icategory from '../redux/slices/Icategory'
import Ievent from '../redux/slices/Ievent'
import { useGetAllEventsQuery } from '../api/events.service'
import { filter, map, now } from 'lodash'
import React, {useEffect, useState} from "react";


type Props = { 
    type:("category"|"headline"|"Today") ,
}


export default function  CarrouselContainer(props: Props){
    const {data, isLoading} = useGetAllEventsQuery()
    const categories:Icategory[] =  new dataAccess().getcategories()

    // const [headlinesEvents, getDataFiletredByTop] = useState<Ievent[] | null>(null)
    // const [todayEvents, getDataFiletredByDate] = useState<Ievent[] | null>(null)
    // const headlinesEvents = data.data?.filter(event => event.is_clutchorama == false).map(event => event.name)
    const [headlinesEvents, setDataFiletred] = useState<Ievent[] | null>([])
    const todayEvents = data

    // console.log(data.data?.map(event => event.name))
    // console.log(headlinesEvents)

    useEffect(() => {
        if (!isLoading){
            const headlinesEvents = map(data, event => {
                if (event.name && event.is_clutchorama == false) {
                    return event.name
                }
            } )
            setDataFiletred(headlinesEvents)
        }
    }, [isLoading])

    const renderCategoryCarrouselCard:ListRenderItem<Icategory>=({item})=>{
            return <CategoryCarrouselCard category={item} />
        }

    const renderEventCarrouselCard:ListRenderItem<Ievent>=({item})=>{
            return <EventCarrouselCard event={item}/>
        }

    switch (props.type) {
        case 'category':
            return (
                <View style={styles.carrouselContainer}>
                    <Text style={styles.carrouselTitle} >Catégories</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} renderItem={renderCategoryCarrouselCard}/>
                </View>
                )
        case 'headline':
            return (
                <>{console.log("test " + headlinesEvents)}                
                <View style={styles.carrouselContainer}>
                <Text style={styles.carrouselTitle} >À LA UNE {headlinesEvents}</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={headlinesEvents} renderItem={renderEventCarrouselCard}/>
            </View></>

                )
        case 'Today':
            return (
                <View style={styles.carrouselContainer}>
                    <Text style={styles.carrouselTitle} >Aujourd'hui</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={todayEvents} renderItem={renderEventCarrouselCard}/>
                </View>
                )
    }
}


const styles = StyleSheet.create({
    carrouselContainer:{
        flex: 1,
        marginLeft:15,
        marginBottom:30,
    },
    carrouselTitle:{
        fontFamily:'Poppins-Bold',
        textTransform: 'uppercase',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:16
    },
})