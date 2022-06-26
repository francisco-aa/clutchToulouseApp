import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '../screens/SplashScreen'
import { StatusBar } from 'react-native'
import Eroutes from './Eroutes'
import Root from './root/Root'
import React from 'react'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
            <NavigationContainer >
                <StatusBar/>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={'SpashScreen'} options={{
                      headerShown: false
                    }} component={SplashScreen}/>
                    <Stack.Screen name={Eroutes.ROOT} component={Root}/>
                </Stack.Navigator>
            </NavigationContainer>
  )
}

export default AppNavigation
