import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NavigationOptions from "../NavigationOptions";
import Eroutes from "../Eroutes";
import ResearchScreen from "../../screens/research/ResearchScreen";
import EventDetailsScreen from "../../screens/components/eventDetails/EventDetailsScreen";
import LocationDetailsScreen from "../../screens/components/locationDetails/LocationDetailsScreen";

const ResearchStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={NavigationOptions}>
            <Stack.Screen name={Eroutes.RESEARCH_SCREEN} component={ResearchScreen}/>
            <Stack.Screen name={Eroutes.EVENT_DETAILS_SCREEN} component={EventDetailsScreen}/>
            <Stack.Screen name={Eroutes.LOCATION_DETAILS_SCREEN} component={LocationDetailsScreen}/>
        </Stack.Navigator>
    )
}

export default ResearchStack