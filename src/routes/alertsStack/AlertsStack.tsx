import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NavigationOptions from "../NavigationOptions";
import Eroutes from "../Eroutes";
import AlertsScreen from "../../screens/alerts/AlertsScreen";

const AlertsStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={NavigationOptions}>
            <Stack.Screen name={Eroutes.ALERTS_SCREEN} component={AlertsScreen}/>
        </Stack.Navigator>
    )
}

export default AlertsStack