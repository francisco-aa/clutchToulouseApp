import React, { Fragment, useState } from 'react'
import { Map, markerStyle } from '../../components/map/mapView.style'
import { Callout, Marker } from 'react-native-maps'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { useGetAllEventsQuery } from '../../api/events.service'
import fr from 'date-fns/locale/fr'
import { FontAwesome } from '@expo/vector-icons'
import { format } from 'date-fns'
import DateTimePicker from 'react-native-modal-datetime-picker'

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
  const { data } = useGetAllEventsQuery()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  let events: any[] = []
  const eventsByLocation: { lieu: any, events: any[] }[] = []

  function loadMarkers (date: Date) {
    return (new Date(date).getMonth() === selectedDate.getMonth() &&
            new Date(date).getDate() === selectedDate.getDate() &&
            new Date(date).getFullYear() === selectedDate.getFullYear())
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    setSelectedDate(date)
    hideDatePicker()
  }
  const MapMarkers = () => {
    if (data) {
      events = data.filter(d => (loadMarkers(new Date(d.start_date))))
      events.forEach(event => {
        if (!eventsByLocation.find(evt => evt.lieu === event.location.name)) {
          // si le lieu de cet event existe pas
          eventsByLocation.push({ lieu: event.location.name, events: [event] })
        } else {
          // si le lieu de cet event existe déjà
          const index = eventsByLocation.findIndex(evt => evt.lieu === event.location.name)
          eventsByLocation[index].events.push(event)
        }
      })
    }
    return (
      <>
        {eventsByLocation && eventsByLocation.map(event => (
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
        <Button
          title={selectedDate.toLocaleDateString()}
          onPress={showDatePicker}
          color={'white'}
        />
        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </>
  )
}

export default MapScreen
