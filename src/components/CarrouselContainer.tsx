import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Category } from '../types/Category'
import { dataAccess } from '../data/dataAccess'
import CategoryCarrouselCard from './CategoryCarrouselCard'
import EventCarrouselCard from './EventCarrouselCard'
import { Event } from '../types/Event'

type Props = { 
    type:("category"|"headline"|"Today") ,
}

export default function  CarrouselContainer(props: Props){
    const categories:Category[] =  new dataAccess().getcategories()
    const headlines:Event[] =  new dataAccess().getHeadlines()
    const TodayEvents:Event[] =  new dataAccess().getTodayEvent()
    const renderCategoryCarrouselCard:ListRenderItem<Category>=({item})=>{
            return <CategoryCarrouselCard category={item} />
        }
    const renderEventCarrouselCard:ListRenderItem<Event>=({item})=>{
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
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={headlines} renderItem={renderEventCarrouselCard}/>
                </View>
                )
        case 'Today':
            return (
                <View style={styles.carrouselContainer}>
                    <Text style={styles.carrouselTitle} >aujourd'hui</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={TodayEvents} renderItem={renderEventCarrouselCard}/>
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