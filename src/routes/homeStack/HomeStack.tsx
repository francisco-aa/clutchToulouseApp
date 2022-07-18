import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationOptions from '../NavigationOptions'
import Accueil from '../../screens/Accueil'
import Eroutes from '../Eroutes'
import React from 'react'

const HomeStack = () => {
  const Stack = createNativeStackNavigator()

  return (
        <Stack.Navigator screenOptions={NavigationOptions}>
            <Stack.Screen name={Eroutes.HOME_SCREEN} component={Accueil}/>
        </Stack.Navigator>
  )
}

export default HomeStack
