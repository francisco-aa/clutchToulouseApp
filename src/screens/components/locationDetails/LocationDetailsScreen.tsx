import React from "react";
import {HeaderImage} from "../eventDetails/eventDetailsScreen.style";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useAppSelector} from "../../../redux/hooks";
import IconRounded from "./IconRounded";
import {Content} from "./locationDetailsScreen.style";
import Container from '../../style/Container'
import Title from "../../style/title/Title";
import {map} from "lodash";
import Tag from "../../style/tag/Tag";
import Information from "../../style/Information";
import {ScrollView, Text} from "react-native";
import NextEvents from "./components/NextEvents";
const LocationDetailsScreen = () => {

    const navigation = useNavigation()
    const location = useAppSelector(state => state.events.selectedEvent?.location)
    return (
        <>
            <HeaderImage source={{uri: `https://clutchmag.fr/images/locations/${location?.image}`}}>
                <Ionicons onPress={() => navigation.goBack()} name="chevron-back-circle-outline" size={40}
                          color="white" style={{
                    position: 'absolute',
                    top: 60,
                    left: 20,

                }}/>
            </HeaderImage>
            <Content>
                <Container justify={'center'}>
                    <IconRounded source={{uri: `https://clutchmag.fr/images/locations/${location?.image}`}}/>
                </Container>
                <Title title={location?.name} marginTop={100} size={20} marginBottom={20}/>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Container justify={'space-around'} >
                        {location?.tags && map(location.tags, (tag, key) => (
                            <Tag title={tag} color={'#625A96'} key={key}/>
                        ))}
                    </Container>
                    <Container style={{
                        marginTop: 30
                    }} direction={'column'} align={'flex-start'}>
                        <Information
                            text={location.business_hours ? location.business_hours : "numéro de téléphone indisponible"}
                            icon={'clock'}/>
                        <Information
                            text={`${location.street_name}`.length < 4 ? 'Information indisponible' : `${location.street_name}`}
                            icon={'map-marker-alt'}/>
                        <Information
                            text={location.phone ? location.phone : "numéro de téléphone indisponible"}
                            icon={'phone'}/>
                        <Information
                            text={location.website ? location.website : "numéro de téléphone indisponible"}
                            icon={'link'}/>
                    </Container>
                    <Container style={{
                        marginTop: 30
                    }} >
                        <Text>{location.content}</Text>
                    </Container>
                    <Title title={"LES PROCHAINS EVENEMENTS DANS CE LIEU"} color={"#085066"} marginTop={20} size={15} marginBottom={0}/>
                    <NextEvents locationId={location["@id"]}/>
                </ScrollView>
            </Content>
        </>
    )
}

export default LocationDetailsScreen