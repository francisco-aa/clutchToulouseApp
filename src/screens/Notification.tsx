import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

export default function Notification(props: Props){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:"100%",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00ADBB',
    marginBottom:60
  },
  text:{
    fontFamily:'Poppins-SemiBoldItalic',
    textTransform: 'uppercase',
    fontSize:40,
  }
})