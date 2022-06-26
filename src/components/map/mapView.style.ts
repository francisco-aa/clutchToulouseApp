import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import styled from 'styled-components'

export const Map = styled(MapView)`
width: 100%;
bottom: 0;
height: 100%
`
export const markerStyle = StyleSheet.create({
  markerImage: {
    width: 30,
    height: 30
  }
})
