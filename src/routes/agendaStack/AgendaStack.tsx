import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Eroutes from "../Eroutes";
import NavigationOptions from "../NavigationOptions";
import Agenda from "../../screens/Agenda";

const AgendaStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={NavigationOptions}>
            <Stack.Screen name={Eroutes.AGENDA_SCREEN} component={Agenda}/>
        </Stack.Navigator>
    )
}

export default AgendaStack
