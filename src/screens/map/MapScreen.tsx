import { Fragment } from 'react'
import { Map, markerStyle } from '../../components/map/mapView.style'
import { Callout, Marker } from 'react-native-maps'
import { Image, Text, View } from 'react-native'
import { useGetAllEventsQuery } from '../../api/events.service'
import fr from 'date-fns/locale/fr'
import { format } from 'date-fns'

const styles = {
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#000000',
    marginBottom: 5
  },
  description: {
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 10,
    color: '#000000'
  }
}

const MapScreen = () => {
  const MapMarkers = () => {
    const today = new Date('2022-10-22') // à changer, on doit afficher les events du jour
    const { data } = useGetAllEventsQuery('')
    let markers: any[] = []

    function isToday (date: Date) {
      return (new Date(date).getMonth() === today.getMonth() &&
                new Date(date).getDate() === today.getDate() &&
                new Date(date).getFullYear() === today.getFullYear())
    }

    function samePlace (marker: any) {
      markers.forEach((m, index) => {
        if (marker.location.name === m.location.name && new Date(marker.start_date) < new Date(m.start_date)) {
          markers.splice(index, 1)
        }
      })
    }

    if (data) {
      markers = data.filter(d => (isToday(new Date(d.start_date))))
      markers.forEach(marker => samePlace(marker))
    }
    return (
      <>
        {markers && markers.map((marker) => (
          <Fragment key={marker.id}>
            {
              marker.location.latitude && marker.location.longitude
                ? <Marker coordinate={{
                  latitude: marker.location.latitude,
                  longitude: marker.location.longitude
                }}
                title="Titre"
                description="description"
                >
                  {marker.category === 1 &&
                                        <Image
                                          style={markerStyle.markerImage}
                                          resizeMode={'contain'}
                                          source={require('../../../assets/images/markers/Fant_violet.png')}
                                        />
                  }{marker.category === 2 &&
                                    <Image
                                      style={markerStyle.markerImage}
                                      resizeMode={'contain'}
                                      source={require('../../../assets/images/markers/Fant_bleu.png')}
                                    />
                  }{marker.category === 3 &&
                                    <Image
                                      style={markerStyle.markerImage}
                                      resizeMode={'contain'}
                                      source={require('../../../assets/images/markers/Fant_black.png')}
                                    />
                  }{marker.category === 4 &&
                                    <Image
                                      style={markerStyle.markerImage}
                                      resizeMode={'contain'}
                                      source={require('../../../assets/images/markers/Fant_jaune.png')}
                                    />
                  }{marker.category === 5 &&
                                    <Image
                                      style={markerStyle.markerImage}
                                      resizeMode={'contain'}
                                      source={require('../../../assets/images/markers/Fant_rose.png')}
                                    />
                  }
                  <Callout>
                    <View style={markerStyle.popup}>
                      <Text style={styles.title}>{marker.name}</Text>
                      <Text style={styles.description}>
                        {'Lieu : ' + marker.location.name}</Text>
                      <Text
                        style={styles.description}>{'Date : ' + format(new Date(marker.start_date), 'PP', { locale: fr })}</Text>
                      <Text
                        style={styles.description}>{'Heure : ' + new Date(marker.start_date).toLocaleTimeString('fr', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}</Text>
                    </View>
                  </Callout>
                </Marker>
                : null
            }
          </Fragment>
        ))
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
    </>
  )
}

export default MapScreen
