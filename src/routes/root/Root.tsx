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
                    <Image source={color =='white' ? require('../../../assets/img/Menu/Home.png')
                                                : require('../../../assets/img/Menu/Home_active.png') }/>
                )
            }} component={Acceuil}/>
            <Tab.Screen name={'Research'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={color=='white' ? require('../../../assets/img/Menu/Search.png')
                                               : require('../../../assets/img/Menu/Search_active.png')}/>

                )
            }} component={ResearchStack}/>
            <Tab.Screen name={'Agenda'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={color=='white' ?require('../../../assets/img/Menu/Agenda.png')
                                                : require('../../../assets/img/Menu/Agenda_active.png')}/>
                )
            }} component={AgendaStack}/>
            <Tab.Screen name={'Map'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={color=='white' ?require('../../../assets/img/Menu/Map.png')
                                                : require('../../../assets/img/Menu/Map_active.png')}/>
                )
            }} component={MapStack}/>
            <Tab.Screen name={'Alerts'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={color=='white' ?require('../../../assets/img/Menu/Notification.png')
                                                : require('../../../assets/img/Menu/Notification_active.png')}/>
                )
            }} component={AlertsStack}/>
            <Tab.Screen name={'Reader'} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Image source={color=='white' ?require('../../../assets/img/Menu/Book.png')
                                                : require('../../../assets/img/Menu/Book_active.png')}/>
                )
            }} component={ReaderStack}/>
        </Tab.Navigator>
    )
}

export default Root
