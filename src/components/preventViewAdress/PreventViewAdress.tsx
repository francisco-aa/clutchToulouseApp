import { LatLng, MapViewProps, Marker } from 'react-native-maps'
import React, { FC, useEffect, useRef } from 'react'
import { Map } from './preventView.style'
import { Image } from 'react-native'
import { markerStyle } from '../map/mapView.style'

type TPreventViewAdress = {
    coordinate: LatLng
}
const PreventViewAdress: FC<TPreventViewAdress> = ({ coordinate }) => {
  const mapRef = useRef<MapViewProps>(null)

  useEffect(() => {
    mapRef.current.animateCamera({ center: { latitude: coordinate.latitude, longitude: coordinate.longitude }, zoom: 16 })
  }, [coordinate])
  return (
    <Map ref={mapRef}>
      <Marker coordinate={{
        latitude: coordinate.latitude,
        longitude: coordinate.longitude
      }}>
        <Image
          style={markerStyle.markerImage}
          resizeMode={'contain'}
          source={require('../../../assets/images/markers/Fant_violet.png')}
        />
      </Marker>
    </Map>
  )
}

export default PreventViewAdress
