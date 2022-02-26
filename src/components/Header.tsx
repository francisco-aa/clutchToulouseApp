import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
    return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../assets/img/Clutch_icon_1.png')}
    />
  )
};

const styles = StyleSheet.create({})