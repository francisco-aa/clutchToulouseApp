import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {}

export default function Book (props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Book</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#625A96',
    marginBottom: 60
  },
  text: {
    fontFamily: 'Poppins-SemiBoldItalic',
    textTransform: 'uppercase',
    fontSize: 40
  }
})
