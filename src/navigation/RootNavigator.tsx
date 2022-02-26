import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Acceuil from "../screens/Acceuil";

export type RouteParams={
    Acceuil:undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator=()=>{
    return <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Acceuil" component={Acceuil} />
            </Stack.Group>
        </Stack.Navigator>
}