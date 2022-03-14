import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Acceuil from "../screens/Home";
import { StyleSheet } from "react-native";

export type RouteParams = {
    Acceuil: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export default function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="Acceuil" component={Acceuil} />
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