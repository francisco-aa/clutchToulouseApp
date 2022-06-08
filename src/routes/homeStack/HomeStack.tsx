import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Eroutes from "../Eroutes";
import Accueil from "../../screens/Accueil";
import NavigationOptions from "../NavigationOptions";

const HomeStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={NavigationOptions}>
            <Stack.Screen name={Eroutes.HOME_SCREEN} component={Accueil}/>
        </Stack.Navigator>
    )
}

export default HomeStack
