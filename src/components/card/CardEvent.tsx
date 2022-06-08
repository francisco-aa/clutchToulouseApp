import React, {FC} from "react";
import {CommonCard, EventCardWrapper} from "./card";
import Information from "../Information";
import Container from "../Container";
import Title from "../title/Title";
import {AntDesign, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import Tag from "../tag/Tag";
import {find, map} from "lodash";
import {format} from "date-fns";
import fr from "date-fns/locale/fr";
import {useNavigation} from "@react-navigation/native";
import Eroutes from "../../routes/Eroutes";
import Ievent from "../../redux/slices/Ievent";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

type TCardEvent = {
    color: string,
    event: Ievent,
    marginTop: number,
    tags?: string[]
}
const CardEvent: FC<TCardEvent> = ({color, tags, marginTop = 20, event}) => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const alerts = useAppSelector(state => state.alerts.alerts)
    const handlePress = () => {
        dispatch({type: "events/setSelectedEvent", payload: event})
        //TODO: revoir l'implémentation
        navigation.navigate(Eroutes.EVENT_DETAILS_SCREEN)
    }


    const isFavorite = find(alerts, ["@id", event["@id"]]) !== undefined

    return (
        <EventCardWrapper style={{
            marginTop,
        }} onPress={handlePress}>
            <CommonCard color={color}>
                {isFavorite ? (
                        <FontAwesome style={{
                            position: 'absolute',
                            right: 20,
                            top: 20,
                        }} name="heart" onPress={() => dispatch({type: "alerts/disableAlert", payload: event["@id"]})} size={24}
                                     color="#00ADBB"/>
                    ) : (
                        <FontAwesome style={{
                            position: 'absolute',
                            right: 20,
                            top: 20,
                        }} name="heart-o"  onPress={() => dispatch({type: "alerts/setAlerts", payload: event})}  size={24}
                                     color="black"/>
                    )}
                    <Container justify={'center'} style={{textAlign: 'center', marginRight: 30}}>
                        <Title  title={event.name} transform={'uppercase'} marginTop={0} size={20} marginBottom={0}
                                color={'white'}/>
                    </Container>
                    <Container direction={'column'} justify={'center'} align={'flex-start'}>
                        <Information isTouchable={false} text={format(new Date(event.start_date), 'PPpp', {locale: fr})} icon={'clock'}/>
                        <Information bold underline isTouchable={false}
                                     text={`${event.location.name}, ${event.location.street_name}`.length < 4 ? 'Information indisponible' : `${event.location.name}, ${event.location.street_name}`}
                                     icon={'map-marker-alt'}/>
                        <Information isTouchable={false} text={event.price ? event.price : 'Information indisponible'} icon={'ticket-alt'}/>
                    </Container>
                    <Container style={{
                        marginTop: 15,
                    }} justify={'center'} align={'center'}>
                        {tags && map(tags, (tag, index) => (
                            <Tag color={"white"} key={index} title={tag}/>
                        ))}
                    </Container>
            </CommonCard>
        </EventCardWrapper>
    )
}

export default CardEvent
