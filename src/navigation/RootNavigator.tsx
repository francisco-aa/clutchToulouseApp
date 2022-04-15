import React from "react";
import Acceuil from "../screens/Acceuil";;
import SplashScreen from "../screens/SplashScreen";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Search from "../screens/Search";
import Agenda from "../screens/Agenda";
import Map from "../screens/Map";
import Notification from "../screens/Notification";
import Book from "../screens/Book";
import Favorites from "../screens/Favorites";

export type RouteParams = {
    SplashScreen:undefined,
    Acceuil: undefined;
    Search: undefined;
    Agenda: undefined;
    Map: undefined;
    Notification: undefined;
    Book: undefined;
    Favorites: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();


export default function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Group>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{animation:'fade'}} />
                <Stack.Screen name="Acceuil" component={Acceuil} options={{animation:'fade'}} />
                <Stack.Screen name="Search" component={Search} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Agenda" component={Agenda} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Map" component={Map} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Notification" component={Notification} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Book" component={Book} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Favorites" component={Favorites} options={{animation:'fade_from_bottom'}}/>
            </Stack.Group>
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
})