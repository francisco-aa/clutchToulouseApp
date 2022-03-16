import React from "react";
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home";
import { StyleSheet } from "react-native";
import Search from "../screens/Search";
import Agenda from "../screens/Agenda";
import Map from "../screens/Map";
import Notification from "../screens/Notification";
import Book from "../screens/Book";

export type RouteParams = {
    Home: undefined;
    Search: undefined;
    Agenda: undefined;
    Map: undefined;
    Notification: undefined;
    Book: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export default function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Group>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search}/>
                <Stack.Screen name="Agenda" component={Agenda}/>
                <Stack.Screen name="Map" component={Map}/>
                <Stack.Screen name="Notification" component={Notification}/>
                <Stack.Screen name="Book" component={Book}/>
            </Stack.Group>
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
})