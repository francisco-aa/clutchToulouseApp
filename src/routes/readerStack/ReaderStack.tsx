import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NavigationOptions from "../NavigationOptions";
import Eroutes from "../Eroutes";
import ReaderScreen from "../../screens/reader/ReaderScreen";
import Acceuil from "../../screens/Acceuil";

const ReaderStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={NavigationOptions}>
            <Stack.Screen name={Eroutes.READER_SCREEN} component={Acceuil}/>
        </Stack.Navigator>
    )
}

export default ReaderStack
