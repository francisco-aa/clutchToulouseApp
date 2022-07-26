// @ts-ignore
import styled from 'styled-components'
import MapView from 'react-native-maps'
import { StyleSheet } from 'react-native'
import { inspect } from 'util'

export const Map = styled(MapView)`
width: 100%;
bottom: 0;
height: 100%
`
export const markerStyle = StyleSheet.create({
  markerImage: {
    width: 30,
    height: 30
  },
  popup: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    width: 100,
    borderStartWidth: 5,
    borderStartColor: '#000000',
    paddingLeft: 5,
    marginBottom: 1
  },
  popupHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    width: 100
  }
})
