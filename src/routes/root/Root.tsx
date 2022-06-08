import {AntDesign, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import HomeStack from "../homeStack/HomeStack";
import ResearchStack from "../researchStack/ResearchStack";
import AgendaStack from "../agendaStack/AgendaStack";
import MapStack from "../mapStack/MapStack";
import AlertsStack from "../alertsStack/AlertsStack";
import ReaderStack from "../readerStack/ReaderStack";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SplashScreen from "../../screens/SplashScreen";
import Eroutes from "../Eroutes";
import Acceuil from "../../screens/Acceuil";
import { Image } from "react-native";

const Root = () => {
    const Tab = createBottomTabNavigator()

    return (

        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#00ADBB',
            tabBarInactiveTintColor: 'white',
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: 'black',left: 10, right: 10, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 },
        })} >

            <Tab.Screen name={Eroutes.HOME_SCREEN} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={require('../../../assets/img/Menu/Home.png')}/>
                )
            }} component={Acceuil}/>
            <Tab.Screen name={'Research'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={require('../../../assets/img/Menu/Search.png')}/>
                )
            }} component={ResearchStack}/>
            <Tab.Screen name={'Agenda'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={require('../../../assets/img/Menu/Agenda.png')}/>
                )
            }} component={AgendaStack}/>
            <Tab.Screen name={'Map'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={require('../../../assets/img/Menu/Map.png')}/>
                )
            }} component={MapStack}/>
            <Tab.Screen name={'Alerts'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={require('../../../assets/img/Menu/Notification.png')}/>
                )
            }} component={AlertsStack}/>
            <Tab.Screen name={'Reader'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={require('../../../assets/img/Menu/Book.png')}/>
                )
            }} component={ReaderStack}/>
        </Tab.Navigator>
    )
}

export default Root
