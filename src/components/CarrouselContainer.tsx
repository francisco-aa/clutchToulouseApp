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
    const {data, isLoading} = useGetAllEventsQuery('')
    const categories:Icategory[] =  new dataAccess().getcategories()
    const [headlinesEvents, setDataFiletred] = useState<Ievent[]>()
    const todayEvents = data
    useEffect(() => {
        if (!isLoading){
            const headlinesEvents = map(data, event => {
                if (event != undefined && event.name && event.is_clutchorama == false) {
                    return event
                }
            })
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
                <View style={styles.carrouselContainer}>
                <Text style={styles.carrouselTitle} >À LA UNE</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={headlinesEvents} renderItem={renderEventCarrouselCard}/>
            </View>

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