import React, { Fragment } from 'react'
import { Map, markerStyle } from '../../components/map/mapView.style'
import { Callout, Marker } from 'react-native-maps'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useGetAllEventsQuery } from '../../api/events.service'
import fr from 'date-fns/locale/fr'
import { FontAwesome } from '@expo/vector-icons'
import { capitalize } from 'lodash'
import { format } from 'date-fns'

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#000000'
  },
  description: {
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 10,
    color: '#000000'
  },
  date: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#ffffff',
    padding: 5
  }
})

const styleDateBox = StyleSheet.create({
  dateBox: {
    position: 'absolute',
    top: 35,
    right: 5,
    alignSelf: 'center',
    backgroundColor: 'rgb(0,0,0)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    padding: 2
  }
})

const MapScreen = () => {
  const MapMarkers = () => {
    const today = new Date('2022-10-22') // à changer, on doit afficher les events du jour
    const { data } = useGetAllEventsQuery()
    let todaysEvents: any[] = []
    const todaysEventsByLocation: { lieu: any, events: any[] }[] = []

    function isToday (date: Date) {
      return (new Date(date).getMonth() === today.getMonth() &&
                new Date(date).getDate() === today.getDate() &&
                new Date(date).getFullYear() === today.getFullYear())
    }

    if (data) {
      todaysEvents = data.filter(d => (isToday(new Date(d.start_date))))
      todaysEvents.forEach(event => {
        if (!todaysEventsByLocation.find(evt => evt.lieu === event.location.name)) {
          // si le lieu de cet event existe pas
          todaysEventsByLocation.push({ lieu: event.location.name, events: [event] })
        } else {
          // si le lieu de cet event existe déjà
          const index = todaysEventsByLocation.findIndex(evt => evt.lieu === event.location.name)
          todaysEventsByLocation[index].events.push(event)
        }
      })
    }
    return (
      <>
        {todaysEventsByLocation && todaysEventsByLocation.map(event => (
          <Fragment key={event.lieu}>
            {event.events.length === 1 && event.events.map(evt => (
              evt.location.latitude && evt.location.longitude
                ? <Marker key={evt.id} coordinate={{
                  latitude: evt.location.latitude,
                  longitude: evt.location.longitude
                }}
                title="Titre"
                description="description"
                >
                  {evt.category === 1 &&
                                            <Image
                                              style={markerStyle.markerImage}
                                              resizeMode={'contain'}
                                              source={require('../../../assets/images/markers/Fant_violet.png')}
                                            />
                  }{evt.category === 2 &&
                                        <Image
                                          style={markerStyle.markerImage}
                                          resizeMode={'contain'}
                                          source={require('../../../assets/images/markers/Fant_bleu.png')}
                                        />
                  }{evt.category === 3 &&
                                        <Image
                                          style={markerStyle.markerImage}
                                          resizeMode={'contain'}
                                          source={require('../../../assets/images/markers/Fant_black.png')}
                                        />
                  }{evt.category === 4 &&
                                        <Image
                                          style={markerStyle.markerImage}
                                          resizeMode={'contain'}
                                          source={require('../../../assets/images/markers/Fant_jaune.png')}
                                        />
                  }{evt.category === 5 &&
                                        <Image
                                          style={markerStyle.markerImage}
                                          resizeMode={'contain'}
                                          source={require('../../../assets/images/markers/Fant_rose.png')}
                                        />
                  }
                  <Callout>
                    <View style={markerStyle.popupHeader}>
                      <Text style={styles.title}>
                        <FontAwesome
                          name="map-marker"
                          size={15}
                          color='#000000'/>
                        {'  ' + event.events[0].location.name}</Text>
                    </View>
                    <View style={markerStyle.popup}>
                      <Text style={styles.description}>
                        <FontAwesome
                          name="music"
                          size={10}
                          color='#000000'/>
                        {'  ' + evt.name}
                      </Text>
                      <Text
                        style={styles.description}>
                        <FontAwesome
                          name="clock-o"
                          size={10}
                          color='#000000'/>
                        {'  ' + new Date(evt.start_date).toLocaleTimeString('fr', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}</Text>
                    </View>
                  </Callout>
                </Marker>
                : null
            ))
            }
            {event.events.length > 1 &&
                            event.events[0].location.latitude && event.events[0].location.longitude
              ? <Marker key={event.events[0].id} coordinate={{
                latitude: event.events[0].location.latitude,
                longitude: event.events[0].location.longitude
              }}
              title="Titre"
              description="description"
              >
                {event.events[0].category === 1 &&
                                        <Image
                                          style={markerStyle.markerImage}
                                          resizeMode={'contain'}
                                          source={require('../../../assets/images/markers/Fant_violet.png')}
                                        />
                }{event.events[0].category === 2 &&
                                    <Image
                                      style={markerStyle.markerImage}
                                      resizeMode={'contain'}
                                      source={require('../../../assets/images/markers/Fant_bleu.png')}
                                    />
                }{event.events[0].category === 3 &&
                                    <Image
                                      style={markerStyle.markerImage}
                                      resizeMode={'contain'}
                                      source={require('../../../assets/images/markers/Fant_black.png')}
                                    />
                }{event.events[0].category === 4 &&
                                    <Image
                                      style={markerStyle.markerImage}
                                      resizeMode={'contain'}
                                      source={require('../../../assets/images/markers/Fant_jaune.png')}
                                    />
                }{event.events[0].category === 5 &&
                                    <Image
                                      style={markerStyle.markerImage}
                                      resizeMode={'contain'}
                                      source={require('../../../assets/images/markers/Fant_rose.png')}
                                    />
                }
                <Callout>
                  <View style={markerStyle.popupHeader}>
                    <Text style={styles.title}>
                      <FontAwesome
                        name="map-marker"
                        size={15}
                        color='#000000'/>
                      {'  ' + event.events[0].location.name}</Text>
                  </View>
                  {event.events.map(evt => (
                    <View key={evt.name} style={markerStyle.popup}>
                      <Text style={styles.description}>
                        <FontAwesome
                          name="music"
                          size={10}
                          color='#000000'/>
                        {'  ' + evt.name}
                      </Text>
                      <Text
                        style={styles.description}>
                        <FontAwesome
                          name="clock-o"
                          size={10}
                          color='#000000'/>
                        {'  ' + format(new Date(evt!.start_date), 'p', { locale: fr })}
                      </Text>
                    </View>
                  ))
                  }
                </Callout>
              </Marker>
              : null
            }
          </Fragment>
        )
        )
        }
      </>
    )
  }
  return (
    <>
      <Map
        initialRegion={{
          latitude: 43.604466,
          longitude: 1.442929,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
      >
        <MapMarkers/>
      </Map>
      <View style={styleDateBox.dateBox}>
        <Text style={styles.date}>
          <FontAwesome
            name="calendar-o"
            size={13}
            color='#ffff'/>
          {'  ' + capitalize(format(new Date(2022, 9, 22), 'P', { locale: fr }))}
        </Text>
      </View>
    </>
  )
}

export default MapScreen
