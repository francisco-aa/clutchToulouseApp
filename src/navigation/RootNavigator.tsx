import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Acceuil from "../screens/Acceuil";
import { StyleSheet } from "react-native";
import SplashScreen from "../screens/SplashScreen";

export type RouteParams = {
    SplashScreen:undefined,
    Acceuil: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export default function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{animation:'fade'}} />
                <Stack.Screen name="Acceuil" component={Acceuil} options={{animation:'fade'}} />
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