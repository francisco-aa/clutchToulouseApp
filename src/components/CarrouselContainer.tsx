import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import { useGetAllEventsQuery } from '../api/events.service'
import CategoryCarrouselCard from './CategoryCarrouselCard'
import { filter, isEmpty, isUndefined } from 'lodash'
import EventCarrouselCard from './EventCarrouselCard'
import React, { useEffect, useState } from 'react'
import Icategory from '../redux/slices/Icategory'
import { dataAccess } from '../data/dataAccess'
import Ievent from '../redux/slices/Ievent'

type Props = {
    type:('category'|'headline'|'Today'),
}

export default function CarrouselContainer (props: Props) {
  const { data, isLoading } = useGetAllEventsQuery('')
  const categories:Icategory[] = new dataAccess().getcategories()
  const [todayEvents, setTodayFiletred] = useState<Ievent[]>()
  const [headlinesEvents, setDataFiletred] = useState<Ievent[]>()

  useEffect(() => {
    if (!isLoading) {
      const headlinesEvents = filter(data, event => {
        if (!isEmpty(event.name) && event.is_clutchorama === false) { /* POUR TESTS : A MODIFIER => true */
          return event
        }
      })
      const todayEvents = filter(data, event => {
        if (new Date(event.start_date).toISOString().slice(0, 10) !== new Date().toISOString().slice(0, 10)) { return event } /* POUR TESTS : A MODIFIER => === */
      })
      setDataFiletred(headlinesEvents as Ievent[])
      setTodayFiletred(todayEvents as Ievent[])
    }
  }, [isLoading])

  const renderCategoryCarrouselCard:ListRenderItem<Icategory> = ({ item }) => {
    return <CategoryCarrouselCard category={item} />
  }

  const renderEventCarrouselCard:ListRenderItem<Ievent> = ({ item }) => {
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
      if (!isUndefined(headlinesEvents) && !isEmpty(headlinesEvents)) {
        return (
                    <View style={styles.carrouselContainer}>
                        <Text style={styles.carrouselTitle} >À LA UNE</Text>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={headlinesEvents} renderItem={renderEventCarrouselCard}/>
                    </View>
        )
      } else {
        return null
      }
    case 'Today':
      if (!isUndefined(todayEvents) && !isEmpty(todayEvents)) {
        return (
                    <View style={styles.carrouselContainer}>
                        <Text style={styles.carrouselTitle} >Aujourd'hui</Text>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={todayEvents} renderItem={renderEventCarrouselCard}/>
                    </View>
        )
      } else {
        return null
      }
  }
}

const styles = StyleSheet.create({
  carrouselContainer: {
    flex: 1,
    marginLeft: 15,
    marginBottom: 30
  },
  carrouselTitle: {
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16
  }
})
