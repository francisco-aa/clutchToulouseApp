import {ScrollView, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {HeaderImage, Content} from "./eventDetailsScreen.style";
import {Ionicons, FontAwesome5, FontAwesome} from '@expo/vector-icons';
import Title from "../../../components/title/Title";
import Tag from "../../../components/tag/Tag"
import {find, map} from "lodash";
import React from "react";
import Container from "../../../components/ContainerTouchable";
import Information from "../../../components/Information";
import {format} from "date-fns";
import fr from "date-fns/locale/fr";
import PreventViewAdress from "../../../components/preventViewAdress/PreventViewAdress";
import {CustomButton} from "../../../components/button/button.style";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import Eroutes from "../../../routes/Eroutes";


const EventDetailsScreen = () => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const event = useAppSelector(state => state.events.selectedEvent)
    const alerts = useAppSelector(state => state.alerts.alerts)

    const handleLocationPress = () => {
       navigation.navigate(Eroutes.LOCATION_DETAILS_SCREEN)
    }
    const isFavorite = find(alerts, ["@id", event["@id"]]) !== undefined

    return (
        <>
            <HeaderImage source={{uri: `https://clutchmag.fr/images/locations/${event?.location?.image}`}}>
                <Ionicons onPress={() => navigation.goBack()} name="chevron-back-circle-outline" size={40}
                          color="white" style={{
                    position: 'absolute',
                    top: 60,
                    left: 20,

                }}/>
            </HeaderImage>
            <Content>
                <TouchableOpacity style={{
                    position: 'absolute',
                    right: 30,
                    top: -35,
                    width: 70,
                    height: 70,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    backgroundColor: 'white'
                }}>
                    {isFavorite ? (
                        <FontAwesome name="heart" onPress={() => dispatch({type: "alerts/disableAlert", payload: event["@id"]})}  size={35} color="#625A96"/>
                    ) : (
                        <FontAwesome name="heart-o" onPress={() => dispatch({type: "alerts/setAlerts", payload: event})} size={35} color="#625A96"/>
                    )}
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Title color={'#625A96'} align={'left'} title={event?.name} marginTop={10} size={25}
                           marginBottom={0}/>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        {event?.tags && map(event.tags, (tag, index) => (
                            <Tag key={index} color={"#625A96"} title={tag}/>
                        ))}
                    </View>
                    <Container style={{
                        marginTop: 20
                    }} direction={'column'} justify={'center'} align={'flex-start'}>
                        <Information text={format(new Date(event?.start_date), 'PPpp', {locale: fr})} icon={'clock'}/>
                        <Information
                            text={event.location.phone ? event.location.phone : "numéro de téléphone indisponible"}
                            icon={'phone'}/>
                        <Information bold underline
                                     onPress={handleLocationPress}
                                     text={`${event.location.name}, ${event.location.street_name}`.length < 4 ? 'Information indisponible' : `${event.location.name}, ${event.location.street_name}`}
                                     icon={'map-marker-alt'}/>
                        <Information text={event.price ? event.price : 'Information indisponible'} icon={'tickets-alt'}/>
                    </Container>
                    <Container style={{
                        marginTop: 30,
                        marginBottom: 30,
                    }} justify={'space-between'}>
                        <CustomButton bold bgColor={"#625A96"} title={"AJOUTER À L’AGENDA"} onPress={() => console.log('test')}/>
                        <CustomButton bold color={"#625A96"} title={"RESERVER"} onPress={() => console.log('test')}/>

                    </Container>
                    {event?.location?.longitude && event?.location?.latitude && (
                        <PreventViewAdress coordinate={{latitude: event.location.latitude, longitude: event.location.longitude}}/>
                    )}
                </ScrollView>
            </Content>
        </>
    )
}

export default React.memo(EventDetailsScreen)
