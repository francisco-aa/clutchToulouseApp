import {AntDesign, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import HomeStack from "../homeStack/HomeStack";
import ResearchStack from "../researchStack/ResearchStack";
import AgendaStack from "../agendaStack/AgendaStack";
import MapStack from "../mapStack/MapStack";
import AlertsStack from "../alertsStack/AlertsStack";
import ReaderStack from "../readerStack/ReaderStack";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Root = () => {
    const Tab = createBottomTabNavigator()

    return (

        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#00ADBB',
            tabBarInactiveTintColor: 'white',
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: 'black',left: 10, right: 10, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 },
        })} >

            <Tab.Screen name={'Home'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home-sharp" size={24} color={color} />
                )
            }} component={HomeStack}/>
            <Tab.Screen name={'Research'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="search1" size={24} color={color} />
                )
            }} component={ResearchStack}/>
            <Tab.Screen name={'Agenda'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="md-calendar-sharp" size={size} color={color} />
                )
            }} component={AgendaStack}/>
            <Tab.Screen name={'Map'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Fontisto name="map-marker-alt" size={24} color={color} />
                )
            }} component={MapStack}/>
            <Tab.Screen name={'Alerts'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="bell" size={24} color={color} />
                )
            }} component={AlertsStack}/>
            <Tab.Screen name={'Reader'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="book" size={24} color={color} />
                )
            }} component={ReaderStack}/>
        </Tab.Navigator>
    )
}

export default Root