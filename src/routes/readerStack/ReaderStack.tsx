import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NavigationOptions from "../NavigationOptions";
import Eroutes from "../Eroutes";
import Book from "../../screens/Book";

const ReaderStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={NavigationOptions}>
            <Stack.Screen name={Eroutes.READER_SCREEN} component={Book}/>
        </Stack.Navigator>
    )
}

export default ReaderStack
