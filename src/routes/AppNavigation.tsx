import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Root from "./root/Root";
import Eroutes from "./Eroutes";

const AppNavigation = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer >
            <Stack.Navigator  screenOptions={{headerShown: false}}>
                <Stack.Screen  name={Eroutes.ROOT} component={Root}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation