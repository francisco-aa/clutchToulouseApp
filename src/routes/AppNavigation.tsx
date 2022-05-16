import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Root from "./root/Root";
import Eroutes from "./Eroutes";
import { StatusBar } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import SplashScreen from "../screens/SplashScreen";

const AppNavigation = () => {
    const Stack = createNativeStackNavigator()

    return (
            <NavigationContainer >
                <StatusBar/>
                <Stack.Navigator  screenOptions={{headerShown: false}}>
                    <Stack.Screen name={'SpashScreen'} options={{
                        headerShown: false,
                    }} component={SplashScreen}/>
                    <Stack.Screen  name={Eroutes.ROOT} component={Root}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default AppNavigation
