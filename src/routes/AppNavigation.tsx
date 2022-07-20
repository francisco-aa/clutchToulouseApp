import LocationDetailsScreen from '../screens/components/locationDetails/LocationDetailsScreen'
import EventDetailsScreen from '../screens/components/eventDetails/EventDetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '../screens/SplashScreen'
import { StatusBar } from 'react-native'
import Eroutes from './Eroutes'
import Root from './root/Root'

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
        <Stack.Screen name={Eroutes.EVENT_DETAILS_SCREEN} component={EventDetailsScreen}/>
        <Stack.Screen name={Eroutes.LOCATION_DETAILS_SCREEN} component={LocationDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
