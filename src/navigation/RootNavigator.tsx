import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Acceuil from "../screens/Home";
import { StyleSheet } from "react-native";
import Header  from "../components/Header";

export type RouteParams={
    Acceuil:undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export default function RootNavigator() {
     return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Acceuil" component={Acceuil} options={{headerTitle:Header}} />
            </Stack.Group>
        </Stack.Navigator>
     )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})