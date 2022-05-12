import React from "react";
import Container from "../Container";
import { AntDesign, Feather } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import Eroutes from "../../../routes/Eroutes";


const HeaderIcons = () => {
    const navigation = useNavigation()
    return (
        <Container style={{
            marginTop: 50
        }} justify={'space-between'}>
            <AntDesign onPress={() => navigation.navigate(Eroutes.ALERTS_SCREEN)} name="heart" size={30} color="black" />
            <Feather name="settings" size={30} color="black" />
        </Container>
    )
}

export default HeaderIcons