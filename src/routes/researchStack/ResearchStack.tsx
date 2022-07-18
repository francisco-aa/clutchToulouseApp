import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ResearchScreen from '../../screens/research/ResearchScreen'
import NavigationOptions from '../NavigationOptions'
import Eroutes from '../Eroutes'
import React from 'react'

const ResearchStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={Eroutes.RESEARCH_SCREEN} component={ResearchScreen}/>
    </Stack.Navigator>
  )
}

export default ResearchStack
