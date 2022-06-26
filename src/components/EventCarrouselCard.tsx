import { Image, StyleSheet, Text, View } from 'react-native'
import Ievent from '../redux/slices/Ievent'
import { colors } from '../utils/appUtils'
import React from 'react'

type Props = {
    event: Ievent
}

export default function EventCarrouselCard (props: Props) {
  function GetEventCardColor (type:number) {
    switch (type) {
      case 1:
        return colors[0]
      case 2:
        return colors[1]
      case 3:
        return colors[2]
      case 4:
        return colors[3]
      case 5:
        return colors[0]
    }
  }

  return (
        <View style={[styles.carrouselCards, { backgroundColor: GetEventCardColor(props.event.category) }]}>
            <View style={styles.titleZone}>
                <Text style={[styles.title, { color: colors[0] }]}>{props.event.name}</Text>
            </View>
            <Image style={styles.image} source={require('../../assets/images/markers/Fant_white.png')}/>
        </View>
  )
}

const styles = StyleSheet.create({
  carrouselCards: {
    flex: 1,
    height: 97,
    width: 160,
    marginRight: 9,
    alignItems: 'center'
  },
  titleZone: {
    backgroundColor: 'white',
    flex: 1,
    height: 62,
    width: 152,
    top: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase',
    fontSize: 17,
    margin: 2
  },
  image: {
    flex: 1,
    height: 17.96,
    width: 23.51,
    resizeMode: 'contain',
    top: 2
  }
})
