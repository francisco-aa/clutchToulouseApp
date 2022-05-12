import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Eroutes from "../Eroutes";
import NavigationOptions from "../NavigationOptions";
import MapScreen from "../../screens/map/MapScreen";

const MapStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={NavigationOptions}>
            <Stack.Screen name={Eroutes.MAP_SCREEN} component={MapScreen}/>
        </Stack.Navigator>
    )
}

export default MapStack