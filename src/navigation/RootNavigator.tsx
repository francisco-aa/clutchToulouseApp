import React from "react";
import Acceuil from "../screens/Acceuil";
import SplashScreen from "../screens/SplashScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Agenda from "../screens/Agenda";
import Notification from "../screens/Notification";
import Book from "../screens/Book";
import ResearchScreen from "../screens/research/ResearchScreen";
import MapScreen from "../screens/map/MapScreen";
import alertsScreen from "../screens/alerts/AlertsScreen";

;

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
                <Stack.Screen name="Search" component={ResearchScreen} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Agenda" component={Agenda} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Map" component={MapScreen} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Notification" component={Notification} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Book" component={Book} options={{animation:'fade_from_bottom'}}/>
                <Stack.Screen name="Favorites" component={alertsScreen} options={{animation:'fade_from_bottom'}}/>
            </Stack.Group>
        </Stack.Navigator>
    )
};
